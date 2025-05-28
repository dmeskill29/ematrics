'use client'

import { useEffect } from 'react'

interface GoogleTagManagerProps {
  gtmId: string
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Initialize GTM
    if (typeof window !== 'undefined' && gtmId) {
      // Google Tag Manager
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
        const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer || []
      ;(window as unknown as { dataLayer: unknown[] }).dataLayer = dataLayer
      
      dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })
      
      document.head.appendChild(script)
    }
  }, [gtmId])

  return (
    <>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Utility function to track events
export const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...eventData
    })
  }
}

// Common event tracking functions
export const trackDemoRequest = (data: { name: string; email: string; company: string }) => {
  trackEvent('demo_request', {
    event_category: 'Lead Generation',
    event_label: 'Demo Request',
    value: 1,
    user_name: data.name,
    user_email: data.email,
    company: data.company
  })
}

export const trackContactForm = (data: { name: string; email: string; inquiryType: string }) => {
  trackEvent('contact_form', {
    event_category: 'Lead Generation',
    event_label: 'Contact Form',
    inquiry_type: data.inquiryType,
    user_name: data.name,
    user_email: data.email
  })
}

export const trackPageView = (page: string) => {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: page
  })
}
