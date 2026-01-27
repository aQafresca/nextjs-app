'use client';

import React from 'react';

import { Button } from '@/shared/ui/button';

interface Props {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const ActionButton = ({ icon, onClick, className = '' }: Props) => (
  <Button
    size="icon"
    variant={'ghost'}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }}
    className={`relative z-20 ${className}`}
  >
    {icon}
  </Button>
);
