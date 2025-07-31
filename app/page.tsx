import LandingPage from '@/components/LandingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Lukas M',
  description:
    'A small presentational page of my personal overview and projects.',
  authors: [{ name: 'Lukas Mikula', url: 'https://lukasm.dev' }],
};
function Page() {
  return <LandingPage />;
}
export default Page;
