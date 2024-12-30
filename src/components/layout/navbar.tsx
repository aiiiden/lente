import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ImageLogo, TypoLogo } from '../logo';

export default function SimpleNavbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        'flex items-center justify-between h-14 fixed z-20 bg-white w-full max-w-screen-sm mx-auto px-3',
        className,
      )}
    >
      <Link href="/" className="flex items-center gap-1">
        <ImageLogo size="sm" />
        <TypoLogo size="sm" />
      </Link>
    </nav>
  );
}
