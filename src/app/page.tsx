import { getFeaturedRepositories } from '@/lib/github';
import HomePage from './HomePage';

export default async function Page() {
  const pinnedRepositories = await getFeaturedRepositories();

  return <HomePage pinnedRepositories={pinnedRepositories} />;
}
