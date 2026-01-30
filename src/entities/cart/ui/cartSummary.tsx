'use client';

import Image from 'next/image';

import { Button } from '@/shared/ui/button';

import type { ICartItem } from '@/entities/cart/model';

interface ICartSummaryProps {
  items: ICartItem[];
  total: string;
}

export const CartSummary = ({ items, total }: ICartSummaryProps) => {
  return (
    <div
      className="
        fixed bottom-10 left-1/2 -translate-x-1/2
        flex flex-col gap-3 max-w-[360px]
        border border-border rounded-lg p-4
        backdrop-blur-md bg-background/20
        md:static md:translate-x-0 md:left-auto md:border-none
      "
    >
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Image
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            width={30}
            height={30}
            className="object-contain border border-foreground h-[30px] dark:bg-muted-foreground"
          />
        ))}
      </div>

      <div>
        {items.length === 0 ? (
          <span>have no items selected yet</span>
        ) : (
          <span className={'text-xs text-foreground'}>
            selected: {items.length}
          </span>
        )}
      </div>

      <Button className="min-w-54" disabled={items.length === 0}>
        Go to checkout $ {total}
      </Button>
    </div>
  );
};
