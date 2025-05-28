'use client';

import { useEffect } from 'react';
import { setupWebVitals } from '@/lib/performance';

export default function WebVitals() {
  useEffect(() => {
    setupWebVitals();
  }, []);

  return null;
}
