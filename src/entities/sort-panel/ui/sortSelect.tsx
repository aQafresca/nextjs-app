'use client';

import React from 'react';
import { X } from 'lucide-react';

import { useSort } from '@/shared/lib/sort/useSort';
import { Button } from '@/shared/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import type { ISortDropdownProps } from '@/entities/sort-panel/model';
import { ORDER_OPTIONS } from '@/entities/sort-panel/model';

export const SortSelect = ({
  field,
  label,
  sortBy,
  order,
}: ISortDropdownProps) => {
  const isActive = sortBy === field;
  const displayValue = isActive ? order : '';
  const { updateSort } = useSort();

  const handleSelect = (order: string) => {
    updateSort(field, order);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateSort(null, null);
  };

  return (
    <Select
      key={`${field}-${isActive ? 'active' : 'inactive'}`}
      value={displayValue}
      onValueChange={handleSelect}
    >
      <div className="relative flex items-center">
        <SelectTrigger
          className={`w-35 border-border ${isActive ? 'bg-primary/90' : ''}`}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>

        {isActive ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="absolute right-2 h-6 w-6 rounded-full hover:bg-background/20"
          >
            <X className=" text-bold h-3 w-3" />
            <span className="sr-only">Reset sort</span>
          </Button>
        ) : null}
      </div>

      <SelectContent>
        {ORDER_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
