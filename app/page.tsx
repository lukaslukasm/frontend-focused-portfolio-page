import LandingPage from '@/components/LandingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Lukas M ',
};
function Page() {
  return <LandingPage />;
}
export default Page;
