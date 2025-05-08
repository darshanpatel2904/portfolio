import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["darshanpatel14906@gmail.com"],
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
