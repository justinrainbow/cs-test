'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const navigate = useMemo(() => router.push.bind(router), [router]);

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
