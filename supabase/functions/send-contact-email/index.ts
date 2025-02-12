
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Get SendPulse credentials from environment variables
    const userId = Deno.env.get('SENDPULSE_USER_ID');
    const secret = Deno.env.get('SENDPULSE_SECRET');

    if (!userId || !secret) {
      throw new Error('SendPulse credentials not configured');
    }

    // First, get the access token
    const tokenResponse = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: userId,
        client_secret: secret,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      console.error('Token response:', tokenData);
      throw new Error('Failed to get access token');
    }

    // Send the email using SendPulse SMTP API
    const emailResponse = await fetch('https://api.sendpulse.com/smtp/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({
        email: {
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
          subject: 'New Contact Form Submission',
          from: {
            name: 'Contact Form',
            email: 'PaulCertifiedx@gmail.com' // Using your verified email address
          },
          to: [
            {
              name: 'Site Admin',
              email: 'PaulCertifiedx@gmail.com'
            }
          ]
        }
      }),
    });

    const emailData = await emailResponse.json();
    console.log('SendPulse API response:', emailData);

    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(emailData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
