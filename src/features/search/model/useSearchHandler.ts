import { useRouter, useSearchParams } from 'next/navigation';

import { PARAMS_NAME } from '@/shared/constants';

export function useSearchHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get(PARAMS_NAME.QUERY) ?? '';

  const handleSearchSubmit = (newQuery: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (newQuery) {
      params.set(PARAMS_NAME.QUERY, newQuery);
      params.delete(PARAMS_NAME.CATEGORY);
    } else params.delete(PARAMS_NAME.QUERY);

    params.set(PARAMS_NAME.PAGE, '1');

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return { query, handleSearchSubmit };
}
