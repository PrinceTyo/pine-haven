import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const callbackToken = req.headers.get("x-callback-token");

  if (callbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();

    if (body.status === "PAID") {
      await prisma.payment.update({
        where: {
          invoiceId: body.id,
        },
        data: {
          status: "paid",
          paidAt: new Date(),
          method: body.payment_method,
        },
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
