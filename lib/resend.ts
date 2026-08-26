import { Resend } from "resend";

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendEnquiryNotification(payload: EnquiryPayload) {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL;

  if (!fromEmail || !toEmail) {
    throw new Error(
      "RESEND_FROM_EMAIL and ENQUIRY_NOTIFICATION_EMAIL must be configured",
    );
  }

  const resend = getResendClient();
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `New enquiry from ${payload.name} — ${payload.company}`,
    html: `
      <h2>New Website Enquiry</h2>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Company:</strong> ${payload.company}</p>
      <p><strong>Requirements:</strong></p>
      <p>${payload.requirements.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
