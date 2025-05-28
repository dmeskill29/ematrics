'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    personalization: false
  })
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    }
    setPreferences(allConsent)
    saveConsent(allConsent)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    }
    setPreferences(necessaryOnly)
    saveConsent(necessaryOnly)
    setShowBanner(false)
  }

  const savePreferences = () => {
    saveConsent(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const saveConsent = (consent: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
      // Trigger GTM event if analytics consent is given
    if (consent.analytics && typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: 'cookie_consent_granted',
        consent_analytics: consent.analytics,
        consent_marketing: consent.marketing,
        consent_personalization: consent.personalization
      })
    }
  }

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      {!showPreferences ? (
        // Main banner
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                We use cookies
              </h3>
              <p className="text-sm text-charcoal-600">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                  Learn more
                </a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 min-w-0 sm:min-w-fit">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-sm text-charcoal-600 hover:text-charcoal-900 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={acceptNecessary}
                className="text-sm text-charcoal-700 hover:text-charcoal-900 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Necessary Only
              </button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="px-6"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      ) : (
        // Preferences panel
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-900">
              Cookie Preferences
            </h3>
            <button
              onClick={() => setShowPreferences(false)}
              className="text-charcoal-400 hover:text-charcoal-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal-900 mb-1">
                  Necessary Cookies
                </h4>
                <p className="text-sm text-charcoal-600">
                  These cookies are essential for the website to function properly and cannot be disabled.
                </p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-6 bg-primary-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal-900 mb-1">
                  Analytics Cookies
                </h4>
                <p className="text-sm text-charcoal-600">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.analytics ? 'bg-primary-500 justify-end' : 'bg-gray-300 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal-900 mb-1">
                  Marketing Cookies
                </h4>
                <p className="text-sm text-charcoal-600">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.marketing ? 'bg-primary-500 justify-end' : 'bg-gray-300 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
              </div>
            </div>

            {/* Personalization Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal-900 mb-1">
                  Personalization Cookies
                </h4>
                <p className="text-sm text-charcoal-600">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handlePreferenceChange('personalization')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    preferences.personalization ? 'bg-primary-500 justify-end' : 'bg-gray-300 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => setShowPreferences(false)}
              className="px-4 py-2 text-sm text-charcoal-600 hover:text-charcoal-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <Button onClick={savePreferences} size="sm">
              Save Preferences
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
