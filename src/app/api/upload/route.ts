import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (file.size === 0 || file.size === undefined) {
      return NextResponse.json(
        { message: "File is required" },
        { status: 400 },
      );
    }
    if (file.size > 4000000) {
      return NextResponse.json(
        { message: "File must be less than 4MB" },
        { status: 400 },
      );
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "File must be an image" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), "public/uploads");

    await fs.mkdir(uploadDir, {
      recursive: true,
    });

    const fileName = `${Date.now()}-${file.name.replaceAll(" ", "-")}`;
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      imageUrl: `/uploads/${fileName}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed upload image",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get("imageUrl");

    if (!imageUrl) {
      return NextResponse.json(
        { message: "Image URL is required" },
        { status: 400 },
      );
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      imageUrl.replace(/^\/+/, ""),
    );

    await fs.unlink(filePath);
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed delete image",
      },
      {
        status: 500,
      },
    );
  }
}
