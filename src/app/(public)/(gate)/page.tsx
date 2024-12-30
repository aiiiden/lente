import Link from 'next/link';

import { ImageLogo, TypoLogo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-200">
      <div className=" flex-grow flex items-center justify-center">
        <Logo />
      </div>
      <div className="container pt-6 pb-8 bg-white rounded-tl-2xl rounded-tr-2xl">
        <Button className="w-full" size="lg">
          Start
        </Button>
        <p className="text-xs font-medium text-center text-gray-400 mt-4 text-pretty">
          You agree to our{' '}
          <Link
            href="/legal/term"
            className="underline underline-offset-2 hover:text-black active:text-black"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/legal/privacy"
            className="underline underline-offset-2 hover:text-black active:text-black"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div role="img" className="flex gap-4 items-center w-fit mx-auto">
      <ImageLogo size="md" />
      <TypoLogo size="md" />
    </div>
  );
}
