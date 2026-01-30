import Image from 'next/image';
import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { type ICartColumnProps } from '@/entities/cart/model';

export const CART_COLUMNS: ICartColumnProps[] = [
  {
    key: 'IMAGE',
    title: 'Image',
    className: 'w-[100px]',
    render: ({ item }) => (
      <div className="flex justify-center">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={50}
          height={50}
          className="rounded-md object-contain"
        />
      </div>
    ),
  },
  {
    key: 'TITLE',
    title: 'Title',
    className: 'font-medium',
    render: ({ item }) => item.title,
  },
  {
    key: 'QUANTITY',
    title: 'Quantity',
    className: 'text-center',
    render: ({ item, actions }) => (
      <div className="flex max-w-2/3 gap-3">
        <Button
          onClick={() => {
            actions.decrement(item.id);
          }}
          variant={'outline'}
          size={'icon-xs'}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
        <span className="w-4 font-tabular-nums">{item.quantity}</span>
        <Button
          onClick={() => {
            actions.increment(item.id);
          }}
          variant={'outline'}
          size={'icon-xs'}
        >
          +
        </Button>
      </div>
    ),
  },
  {
    key: 'PRICE',
    title: 'Price',
    className: 'min-w-[70px]',
    render: ({ item }) => `$ ${item.price.toLocaleString()}`,
  },
  {
    key: 'TOTAL',
    title: 'Total',
    className: 'font-semibold min-w-[100px]',
    render: ({ item }) => `$ ${(item.quantity * item.price).toLocaleString()}`,
  },
  {
    key: 'DELETE',
    title: '',
    className: 'w-[50px] text-right',
    render: ({ item, actions }) => (
      <Button
        onClick={() => {
          actions.remove(item.id);
        }}
        variant="ghost"
        size="icon-sm"
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="size-4" />
      </Button>
    ),
  },
];
