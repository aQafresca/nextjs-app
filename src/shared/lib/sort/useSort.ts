import { useRouter, useSearchParams } from 'next/navigation';

export const useSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSort = (field: string | null, order: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    if (field && order) {
      params.set('sortBy', field);
      params.set('order', order);
    } else {
      params.delete('sortBy');
      params.delete('order');
    }

    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return { updateSort, searchParams };
};
