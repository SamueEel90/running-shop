import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  console.log("GET /api/getAll endpoint accessed"); // <-- log for debugging
  try {
    const client = await clientPromise;
    const db = client.db('RunningShopDB');
    const products = await db.collection('products').find({}).toArray();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}