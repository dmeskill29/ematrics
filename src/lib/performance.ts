import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export function reportWebVitals() {
  if (typeof window !== 'undefined') {
    onCLS(console.log);
    onINP(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  }
}

// Performance monitoring for production
export function sendToAnalytics(metric: { name: string; value: number; id: string }) {  if (process.env.NODE_ENV === 'production') {
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

// Monitor Core Web Vitals
export function setupWebVitals() {
  if (typeof window !== 'undefined') {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }
}
