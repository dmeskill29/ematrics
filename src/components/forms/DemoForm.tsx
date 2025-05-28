'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    teamSize: '',
    industry: '',
    currentTools: '',
    challenges: '',
    preferredDate: '',
    preferredTime: '',
    timezone: 'America/New_York'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual demo booking API/Calendly integration
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Demo booking error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarIcon className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
          Demo Scheduled!
        </h3>
        <p className="text-charcoal-600 mb-6">
          We&apos;ve received your demo request and will send you a calendar invite within the next hour. 
          Our team will reach out if we need to adjust the timing.
        </p>
        <div className="space-y-3">
          <Button
            onClick={() => setSubmitStatus('idle')}
            variant="outline"
          >
            Schedule another demo
          </Button>
          <p className="text-sm text-charcoal-500">
            Questions? Email us at{' '}
            <a href="mailto:demos@ematrics.com" className="text-primary-600 hover:text-primary-700">
              demos@ematrics.com
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-charcoal-700 mb-2">
            Job Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Sales Manager, VP of Sales"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-charcoal-700 mb-2">
            Sales Team Size *
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="">Select team size</option>
            <option value="1-5">1-5 people</option>
            <option value="6-15">6-15 people</option>
            <option value="16-50">16-50 people</option>
            <option value="51-100">51-100 people</option>
            <option value="100+">100+ people</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-charcoal-700 mb-2">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select your industry</option>
          <option value="technology">Technology</option>
          <option value="saas">SaaS</option>
          <option value="financial-services">Financial Services</option>
          <option value="healthcare">Healthcare</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="real-estate">Real Estate</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="currentTools" className="block text-sm font-medium text-charcoal-700 mb-2">
          Current Sales Tools
        </label>
        <input
          type="text"
          id="currentTools"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          placeholder="e.g., Salesforce, HubSpot, Outreach"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="challenges" className="block text-sm font-medium text-charcoal-700 mb-2">
          Current Sales Challenges
        </label>
        <textarea
          id="challenges"
          name="challenges"
          rows={3}
          value={formData.challenges}
          onChange={handleChange}
          placeholder="What are your biggest sales challenges? (optional)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Scheduling Preferences */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-charcoal-900 mb-4 flex items-center">
          <ClockIcon className="w-5 h-5 mr-2 text-primary-500" />
          Scheduling Preferences
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal-700 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-charcoal-700 mb-2">
              Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="timezone" className="block text-sm font-medium text-charcoal-700 mb-2">
            Timezone
          </label>
          <select
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="Europe/London">GMT (London)</option>
            <option value="Europe/Paris">CET (Paris)</option>
            <option value="Asia/Tokyo">JST (Tokyo)</option>
            <option value="Australia/Sydney">AEST (Sydney)</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
        </Button>
        
        {submitStatus === 'error' && (
          <p className="mt-2 text-sm text-red-600">
            There was an error scheduling your demo. Please try again or email us directly at demos@ematrics.com
          </p>
        )}
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-charcoal-500">
        By scheduling a demo, you agree to our{' '}
        <a href="/privacy" className="text-primary-600 hover:text-primary-700">
          Privacy Policy
        </a>. We&apos;ll only use your information to prepare for and conduct your demo.
      </p>
    </form>
  )
}
