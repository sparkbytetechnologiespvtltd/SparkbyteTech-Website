import { NextResponse } from "next/server";
import { z } from "zod";

import { appendEnquiryToExcel } from "@/lib/graph-excel";

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
    await appendEnquiryToExcel(payload);

    return NextResponse.json({
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { error: `Unable to save enquiry: ${errorMessage}` },
      { status: 500 },
    );
  }
}
