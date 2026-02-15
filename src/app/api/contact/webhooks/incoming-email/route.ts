import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const event = await req.json();

    // Check if the event is a new received email
    if (event.type === 'email.received') {
        const { data, error } = await resend.emails.receiving.forward({
            emailId: event.data.email_id,
            to: 'deyvisonsouto@gmail.com', // Your personal Gmail
            from: 'forwarding@contact.deyvisonsouto.com', // MUST be a verified domain address
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }

    return NextResponse.json({ received: true });
}