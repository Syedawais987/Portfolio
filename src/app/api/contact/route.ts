import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Web3Forms API - FREE service
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'effdc0c8-b602-488d-afb8-ea50f0f4d826',
        from_name: 'Portfolio Contact Form',
        name: name,
        email: email,
        subject: subject || 'New Contact Form Submission',
        message: message,
        to_email: 'syedawaishussain987@gmail.com'
      }),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}