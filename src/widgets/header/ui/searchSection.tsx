import { SearchBar } from '@/shared/ui/search-bar';

import { useSearchHandler } from '@/features/search/model';

export const SearchSection = () => {
  const { handleSearchSubmit, query } = useSearchHandler();

  return <SearchBar onSubmit={handleSearchSubmit} defaultValue={query} />;
};
