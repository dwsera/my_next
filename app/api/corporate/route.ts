import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


interface CorporateDetail {
  title: string;
  label: string;
  img:string;
}

const prisma = new PrismaClient();

export async function GET() {
  try {
    const corporate = await prisma.corporate.findMany();
    return NextResponse.json(
      {
        corporate,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("🚀 ~ file: route.ts:18 ~ GET ~ e:", e);
    return NextResponse.json(
      {
        message: "Internal Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as CorporateDetail;

    const topic = await prisma.corporate.create({
      data: {
        title: data.title,
        label: data.label,  // 修改这里
        img:data.img
      },
    });
    

    return NextResponse.json(topic, { status: 200 });
  } catch (e) {
    console.error("🚀 ~ file: route.ts:16 ~ POST ~ e:", e);
    return NextResponse.json(
      {
        message: "Internal error",
      },
      { status: 500 }
    );
  }
}
