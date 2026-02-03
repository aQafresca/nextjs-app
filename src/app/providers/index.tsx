'use client';

import React, { useEffect } from 'react';

import { ThemeProvider } from '@/shared/lib/theme/theme-provider';

import { authInit } from '@/features/auth/model/authInit';

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  useEffect(() => {
    void authInit().catch(console.error);
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
