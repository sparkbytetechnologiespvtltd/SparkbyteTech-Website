import { NextResponse } from "next/server";
import { z } from "zod";

import { appendEnquiryToExcel } from "@/lib/graph-excel";
import { sendEnquiryNotification } from "@/lib/resend";

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(30),
  company: z.string().min(1, "Company is required").max(100),
  requirements: z.string().min(1, "Requirements are required").max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form data" },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const warnings: string[] = [];

    const [emailResult, excelResult] = await Promise.allSettled([
      sendEnquiryNotification(payload),
      appendEnquiryToExcel(payload),
    ]);

    if (emailResult.status === "rejected") {
      warnings.push(
        `Email notification failed: ${emailResult.reason instanceof Error ? emailResult.reason.message : "Unknown error"}`,
      );
    }

    if (excelResult.status === "rejected") {
      warnings.push(
        `Excel logging failed: ${excelResult.reason instanceof Error ? excelResult.reason.message : "Unknown error"}`,
      );
    }

    if (
      emailResult.status === "rejected" &&
      excelResult.status === "rejected"
    ) {
      return NextResponse.json(
        {
          error:
            "Unable to process your enquiry at this time. Please try again later or contact us directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Enquiry submitted successfully",
      warnings: warnings.length > 0 ? warnings : undefined,
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
