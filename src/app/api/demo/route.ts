import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      company, 
      title, 
      phone, 
      teamSize, 
      industry, 
      currentTools, 
      challenges, 
      preferredDate, 
      preferredTime, 
      timezone 
    } = body

    // Validate required fields
    if (!name || !email || !company || !title || !teamSize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Replace with actual demo booking system (Calendly API, Google Calendar, etc.)
    const demoData = {
      name,
      email,
      company,
      title,
      phone,
      teamSize,
      industry,
      currentTools,
      challenges,
      preferredDate,
      preferredTime,
      timezone,
      timestamp: new Date().toISOString(),
      source: 'website',
      type: 'demo_request'
    }

    console.log('Demo booking submission:', demoData)

    // Example: Send to CRM as lead
    // await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...demoData, leadType: 'demo' })
    // })

    // Example: Create calendar event via Calendly API
    // await createCalendlyEvent(demoData)

    // Example: Send confirmation email
    // await sendDemoConfirmationEmail(demoData)

    return NextResponse.json(
      { message: 'Demo scheduled successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Demo booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
