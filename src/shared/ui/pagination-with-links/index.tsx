'use client';

import { type ReactNode, useCallback, useTransition } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/shared/lib/utils';
import { Loader } from '@/shared/ui/loader';

export interface PaginationWithLinksProps {
  pageSizeSelectOptions?: {
    pageSizeSearchParam?: string;
    pageSizeOptions: number[];
  };
  totalCount: number;
  pageSize: number;
  page: number;
  pageSearchParam?: string;
  navigationMode?: 'link' | 'router';
}

export function PaginationWithLinks({
  pageSizeSelectOptions,
  pageSize,
  totalCount,
  page,
  pageSearchParam,
  navigationMode = 'link',
}: PaginationWithLinksProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const totalPageCount = Math.ceil(totalCount / pageSize);

  const buildLink = useCallback(
    (newPage: number) => {
      const key = pageSearchParam || 'page';
      const params = new URLSearchParams(searchParams?.toString() || '');
      params.set(key, String(newPage));
      return `${pathname ?? '/'}?${params.toString()}`;
    },
    [pageSearchParam, searchParams, pathname],
  );

  const navigateToPage = useCallback(
    (newPage: number) => {
      if (navigationMode === 'router') {
        const url = buildLink(newPage);
        startTransition(() => {
          router.push(url, { scroll: false });
        });
      }
    },
    [navigationMode, buildLink, router],
  );

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 5;

    const createPageItem = (pageNum: number) => {
      if (navigationMode === 'router') {
        return (
          <PaginationItem key={pageNum}>
            <PaginationLink
              onClick={() => navigateToPage(pageNum)}
              isActive={page === pageNum}
              className={cn(
                'cursor-pointer',
                isPending && 'pointer-events-none opacity-50',
              )}
              aria-disabled={isPending}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        return (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href={buildLink(pageNum)}
              isActive={page === pageNum}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        );
      }
    };

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(createPageItem(i));
      }
    } else {
      items.push(createPageItem(1));

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPageCount - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(createPageItem(i));
      }

      if (page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      items.push(createPageItem(totalPageCount));
    }

    return items;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 w-full">
      <Pagination className={cn({ 'md:justify-end': pageSizeSelectOptions })}>
        <PaginationContent className="max-sm:gap-0">
          {isPending && navigationMode === 'router' && (
            <PaginationItem>
              <Loader />
            </PaginationItem>
          )}
          <PaginationItem>
            {navigationMode === 'router' ? (
              <PaginationPrevious
                onClick={() => navigateToPage(Math.max(page - 1, 1))}
                aria-disabled={page === 1 || isPending}
                tabIndex={page === 1 || isPending ? -1 : undefined}
                className={cn(
                  page === 1 || isPending
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer',
                )}
              />
            ) : (
              <PaginationPrevious
                href={buildLink(Math.max(page - 1, 1))}
                aria-disabled={page === 1}
                tabIndex={page === 1 ? -1 : undefined}
                className={
                  page === 1 ? 'pointer-events-none opacity-50' : undefined
                }
              />
            )}
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            {navigationMode === 'router' ? (
              <PaginationNext
                onClick={() =>
                  navigateToPage(Math.min(page + 1, totalPageCount))
                }
                aria-disabled={page === totalPageCount || isPending}
                tabIndex={page === totalPageCount || isPending ? -1 : undefined}
                className={cn(
                  page === totalPageCount || isPending
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer',
                )}
              />
            ) : (
              <PaginationNext
                href={buildLink(Math.min(page + 1, totalPageCount))}
                aria-disabled={page === totalPageCount}
                tabIndex={page === totalPageCount ? -1 : undefined}
                className={
                  page === totalPageCount
                    ? 'pointer-events-none opacity-50'
                    : undefined
                }
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
