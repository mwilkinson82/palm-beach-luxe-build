import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  style?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName = "",
      email,
      phone,
      message = "",
      style,
      source,
    }: ContactEmailRequest = await req.json();

    // Validate required fields. Style Book inquiries don't require lastName or message.
    const isStyleBook = source === "style-book";
    if (!firstName || !email || (!isStyleBook && (!lastName || !message))) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const fullName = `${firstName}${lastName ? " " + lastName : ""}`.trim();
    console.log("Sending contact form email for:", fullName, email, "source:", source);

    // Send notification email to the team
    const teamEmailResponse = await resend.emails.send({
      from: "Beau Monde Builders <onboarding@resend.dev>",
      to: ["ajhoover@mac.com"],
      subject: isStyleBook
        ? `Style Book Inquiry — ${style ?? "Unspecified"} — ${fullName}`
        : `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #B8860B; font-weight: 300; font-size: 28px; margin-bottom: 30px;">${isStyleBook ? "Style Book Inquiry" : "New Contact Form Submission"}</h1>

          ${isStyleBook && style ? `
          <div style="background: #f4efe4; padding: 24px 30px; margin-bottom: 20px; border-left: 3px solid #B8860B;">
            <p style="margin: 0; color: #555; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">Style of Interest</p>
            <p style="margin: 8px 0 0; color: #0f2a3d; font-size: 22px;">${style}</p>
          </div>` : ""}

          <div style="background: #f9f9f9; padding: 30px; margin-bottom: 30px;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 20px;">Contact Details</h2>
            <p style="margin: 10px 0; color: #555;"><strong>Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #B8860B;">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0; color: #555;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #B8860B;">${phone}</a></p>` : ''}
          </div>

          ${message ? `<div style="background: #f9f9f9; padding: 30px;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 20px;">Message</h2>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>` : ""}

          <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
            This email was sent from the Beau Monde Builders ${isStyleBook ? "Style Book" : "contact form"}.
          </p>
        </div>
      `,
    });

    console.log("Team notification email sent:", teamEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Beau Monde Builders <onboarding@resend.dev>",
      to: [email],
      subject: isStyleBook
        ? "Thank You — Your Style Book Inquiry"
        : "Thank You for Contacting Beau Monde Builders",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #B8860B; font-weight: 300; font-size: 28px; margin-bottom: 30px;">Thank You, ${firstName}</h1>

          <p style="color: #555; line-height: 1.8; font-size: 16px;">
            ${isStyleBook && style
              ? `We've noted your interest in <strong>${style}</strong> and appreciate you reaching out to Beau Monde Builders.`
              : "We have received your message and appreciate you reaching out to Beau Monde Builders."}
          </p>

          <p style="color: #555; line-height: 1.8; font-size: 16px;">
            Our team will review your inquiry and respond within 24 hours to schedule your private consultation.
          </p>
          
          <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee;">
            <p style="color: #333; font-weight: 500; margin-bottom: 10px;">Beau Monde Builders Space Coast</p>
            <p style="color: #777; font-size: 14px; margin: 5px 0;">1129 Rockledge Blvd</p>
            <p style="color: #777; font-size: 14px; margin: 5px 0;">Rockledge, FL 32955</p>
            <p style="color: #777; font-size: 14px; margin: 5px 0;">(321) 298-4122</p>
          </div>
        </div>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
