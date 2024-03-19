'use client';

import { SWRConfig } from 'swr';
import { PropsWithChildren } from 'react';

export type SWRProviderProps = PropsWithChildren<{
  fallback: Record<string, unknown>;
}>;

export function SWRProvider({ children, fallback }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      {children}
    </SWRConfig>
  );
}
