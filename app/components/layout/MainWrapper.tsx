'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <main className={isHomepage ? '' : 'pt-30'}>
      {children}
    </main>
  );
}
