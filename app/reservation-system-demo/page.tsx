import ReservationSystemDemo from '@/components/ReservationSystemDemo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservation System Demo — Lukas M',
};
function Page() {
  return <ReservationSystemDemo />;
}
export default Page;
