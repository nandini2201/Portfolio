import { GITHUB_USERNAME, type GitHubRepository } from '@/lib/github-shared';

export type { GitHubRepository } from '@/lib/github-shared';
export {
  GITHUB_USERNAME,
  getRepositoryDisplayName,
} from '@/lib/github-shared';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

/** Refresh pinned repos at most once per hour. */
const REVALIDATE_SECONDS = 3600;

const pinnedReposQuery = `
  query GetPinnedRepositories($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            nameWithOwner
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

type PinnedRepositoriesResponse = {
  data?: {
    user: {
      pinnedItems: {
        nodes: Array<GitHubRepository | null>;
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

function isRepository(node: GitHubRepository | null): node is GitHubRepository {
  return (
    node !== null && typeof node.id === 'string' && typeof node.url === 'string'
  );
}

export async function getPinnedRepositories(
  username: string = GITHUB_USERNAME,
): Promise<GitHubRepository[]> {
  if (!username) {
    return [];
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('GITHUB_TOKEN is not set; skipping pinned repositories fetch');
    return [];
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: pinnedReposQuery,
        variables: { username },
      }),
      next: {
        revalidate: REVALIDATE_SECONDS,
      },
    });

    if (!response.ok) {
      console.error(
        `GitHub GraphQL request failed with status ${response.status}`,
      );
      return [];
    }

    const json = (await response.json()) as PinnedRepositoriesResponse;

    if (json.errors?.length) {
      console.error(
        'GitHub GraphQL error:',
        json.errors[0]?.message ?? 'Unknown error',
      );
      return [];
    }

    const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
    return nodes.filter(isRepository);
  } catch (error) {
    console.error('Failed to fetch pinned repositories', error);
    return [];
  }
}

const GITHUB_REST_URL = 'https://api.github.com';
const FEATURED_REPOSITORY_COUNT = 6;

/** GitHub's own language colours, for the languages most likely to appear. */
const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#663399',
  Shell: '#89e051',
  'Jupyter Notebook': '#DA5B0B',
};

type RestRepository = {
  node_id: string;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

/**
 * Most recently pushed public repositories, via the unauthenticated REST
 * API. Repositories with a description are listed first.
 */
export async function getRecentRepositories(
  username: string = GITHUB_USERNAME,
): Promise<GitHubRepository[]> {
  if (!username) {
    return [];
  }

  try {
    const response = await fetch(
      `${GITHUB_REST_URL}/users/${encodeURIComponent(username)}/repos?type=owner&sort=pushed&per_page=30`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      console.error(
        `GitHub REST request failed with status ${response.status}`,
      );
      return [];
    }

    const repositories = (await response.json()) as RestRepository[];
    const own = repositories.filter((repository) => !repository.fork);
    const ordered = [
      ...own.filter((repository) => repository.description),
      ...own.filter((repository) => !repository.description),
    ];

    return ordered.slice(0, FEATURED_REPOSITORY_COUNT).map((repository) => ({
      id: repository.node_id,
      name: repository.name,
      nameWithOwner: repository.full_name,
      description: repository.description,
      url: repository.html_url,
      homepageUrl: repository.homepage,
      stargazerCount: repository.stargazers_count,
      forkCount: repository.forks_count,
      primaryLanguage: repository.language
        ? {
            name: repository.language,
            color: LANGUAGE_COLORS[repository.language] ?? '#6b7280',
          }
        : null,
    }));
  } catch (error) {
    console.error('Failed to fetch recent repositories', error);
    return [];
  }
}

/**
 * Repositories for the GitHub card: pinned ones when GITHUB_TOKEN is set and
 * the profile has pins, otherwise the most recently updated public ones.
 */
export async function getFeaturedRepositories(
  username: string = GITHUB_USERNAME,
): Promise<GitHubRepository[]> {
  const pinned = process.env.GITHUB_TOKEN
    ? await getPinnedRepositories(username)
    : [];

  return pinned.length > 0 ? pinned : getRecentRepositories(username);
}
