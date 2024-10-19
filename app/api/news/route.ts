import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


interface NewsDetail {
  title: string;
  label: string;
  img: string;
  time:string;
}

const prisma = new PrismaClient();

export async function GET() {
  try {
    const news = await prisma.news.findMany();
    return NextResponse.json(
      {
        news,
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
    const data = (await request.json()) as NewsDetail;

    const topic = await prisma.news.create({
      data: {
        title: data.title,
        label: data.label,  // 修改这里
        img: data.img,
        time:data.time
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
