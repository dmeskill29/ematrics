import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, teamSize, message, inquiryType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }    const contactData = {
      name,
      email,
      company,
      phone,
      teamSize,
      message,
      inquiryType,
      timestamp: new Date().toISOString(),
      source: 'website',
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
    }

    console.log('Contact form submission:', contactData)

    // Send to CRM webhook (HubSpot, Zapier, etc.)
    if (process.env.CRM_WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(process.env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'User-Agent': 'Ematrics-Website/1.0'
          },
          body: JSON.stringify(contactData)
        })

        if (!webhookResponse.ok) {
          console.error('CRM webhook failed:', webhookResponse.status, webhookResponse.statusText)
        }
      } catch (webhookError) {
        console.error('CRM webhook error:', webhookError)
        // Don't fail the form submission if webhook fails
      }
    }

    // Send to HubSpot if API key is configured
    if (process.env.HUBSPOT_API_KEY) {
      try {
        await sendToHubSpot(contactData)
      } catch (hubspotError) {
        console.error('HubSpot API error:', hubspotError)
      }
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// HubSpot API integration
async function sendToHubSpot(contactData: any) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY
  if (!hubspotApiKey) return

  const hubspotData = {
    properties: {
      email: contactData.email,
      firstname: contactData.name.split(' ')[0],
      lastname: contactData.name.split(' ').slice(1).join(' ') || '',
      company: contactData.company,
      phone: contactData.phone,
      message: contactData.message,
      hs_lead_status: 'NEW',
      lifecyclestage: 'lead',
      lead_source: 'Website Contact Form',
      team_size: contactData.teamSize,
      inquiry_type: contactData.inquiryType
    }
  }

  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${hubspotApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hubspotData)
  })

  if (!response.ok) {
    throw new Error(`HubSpot API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
