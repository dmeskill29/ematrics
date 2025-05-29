import type { Metadata } from 'next';
import OfflineContent from '../../components/ui/OfflineContent';

export const metadata: Metadata = {
  title: 'Offline - Ematrics',
  description: 'You are currently offline. Please check your internet connection.',
};

export default function Offline() {
  return <OfflineContent />;
}
