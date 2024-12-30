import SimpleNavbar from '@/components/layout/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleNavbar />
      {children}
    </>
  );
}
