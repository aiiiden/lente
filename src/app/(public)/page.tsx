import { ImageLogo, TypoLogo } from '@/components/logo';

export default async function Home() {
  return (
    <div className="w-full h-full">
      <div role="img" className="flex gap-4 items-center">
        <ImageLogo size="md" />
        <TypoLogo size="md" />
      </div>

      <div></div>
    </div>
  );
}
