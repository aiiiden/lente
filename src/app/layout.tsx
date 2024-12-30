import type { Metadata } from 'next';

import MobileLayout from '@/components/layout/mobile-layout';
import { cn } from '@/lib/utils';
import { ClientSideProvider } from '@/providers/client';

import { fontSans } from './fonts/config';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn([fontSans.className, 'min-h-svh antialiased bg-gray-50'])}
      >
        <ClientSideProvider>
          <MobileLayout>{children}</MobileLayout>
        </ClientSideProvider>
      </body>
    </html>
  );
}
