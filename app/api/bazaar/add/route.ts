import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; 

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const imageFile = formData.get("image") as File | null;

    let image = "";
    if (imageFile) {
      // Convert image to base64 string (not for production)
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      image = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
    }

    if (!title || !description || !price) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('RunningShopDB'); 
    const result = await db.collection("bazaarProducts").insertOne({
      title,
      description,
      price,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}