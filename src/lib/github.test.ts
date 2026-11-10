import { afterEach, describe, expect, it, vi } from 'vitest';
import { getFeaturedRepositories, getPinnedRepositories } from '@/lib/github';
import {
  type GitHubRepository,
  getRepositoryDisplayName,
} from '@/lib/github-shared';

const sampleRepository: GitHubRepository = {
  id: 'R_kgDOABC',
  name: 'homeguard3d',
  nameWithOwner: 'nandini/homeguard3d',
  description: 'Smart-home digital twin',
  url: 'https://github.com/nandini/homeguard3d',
  homepageUrl: null,
  stargazerCount: 2,
  forkCount: 0,
  primaryLanguage: {
    name: 'TypeScript',
    color: '#3178c6',
  },
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('getRepositoryDisplayName', () => {
  it('uses the short name for owned repositories', () => {
    expect(getRepositoryDisplayName(sampleRepository, 'nandini')).toBe(
      'homeguard3d',
    );
  });

  it('keeps owner/name for contributed pins', () => {
    expect(
      getRepositoryDisplayName(
        {
          ...sampleRepository,
          name: 'React-Interview-Guide',
          nameWithOwner: 'PacktPublishing/React-Interview-Guide',
        },
        'nandini',
      ),
    ).toBe('PacktPublishing/React-Interview-Guide');
  });
});

describe('getPinnedRepositories', () => {
  it('returns an empty list when GITHUB_TOKEN is missing', async () => {
    vi.stubEnv('GITHUB_TOKEN', '');
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    await expect(getPinnedRepositories('nandini')).resolves.toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns pinned repositories from GraphQL', async () => {
    vi.stubEnv('GITHUB_TOKEN', 'github_pat_test');
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          user: {
            pinnedItems: {
              nodes: [sampleRepository, null],
            },
          },
        },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    await expect(getPinnedRepositories('nandini')).resolves.toEqual([
      sampleRepository,
    ]);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.github.com/graphql',
      expect.objectContaining({
        method: 'POST',
        headers: {
          Authorization: 'Bearer github_pat_test',
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 },
      }),
    );
  });

  it('returns an empty list when GitHub responds with errors', async () => {
    vi.stubEnv('GITHUB_TOKEN', 'github_pat_test');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          errors: [{ message: 'Bad credentials' }],
        }),
      }),
    );

    await expect(getPinnedRepositories('nandini')).resolves.toEqual([]);
  });

  it('returns an empty list when the HTTP response is not ok', async () => {
    vi.stubEnv('GITHUB_TOKEN', 'github_pat_test');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
      }),
    );

    await expect(getPinnedRepositories('nandini')).resolves.toEqual([]);
  });
});

describe('getFeaturedRepositories', () => {
  it('falls back to recent public repositories without a token', async () => {
    vi.stubEnv('GITHUB_TOKEN', '');
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          node_id: 'R_1',
          name: 'no-description',
          full_name: 'nandini/no-description',
          description: null,
          html_url: 'https://github.com/nandini/no-description',
          homepage: null,
          stargazers_count: 0,
          forks_count: 0,
          language: null,
          fork: false,
        },
        {
          node_id: 'R_2',
          name: 'a-fork',
          full_name: 'nandini/a-fork',
          description: 'Forked project',
          html_url: 'https://github.com/nandini/a-fork',
          homepage: null,
          stargazers_count: 5,
          forks_count: 0,
          language: 'Go',
          fork: true,
        },
        {
          node_id: 'R_3',
          name: 'api',
          full_name: 'nandini/api',
          description: 'FastAPI service',
          html_url: 'https://github.com/nandini/api',
          homepage: null,
          stargazers_count: 1,
          forks_count: 0,
          language: 'Python',
          fork: false,
        },
      ],
    });
    vi.stubGlobal('fetch', fetchMock);

    const repositories = await getFeaturedRepositories('nandini');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toContain('/users/nandini/repos');
    expect(repositories.map((repository) => repository.name)).toEqual([
      'api',
      'no-description',
    ]);
    expect(repositories[0]?.primaryLanguage).toEqual({
      name: 'Python',
      color: '#3572A5',
    });
  });
});
