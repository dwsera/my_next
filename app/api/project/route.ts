import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ProjectDetail {
  title_two: string;
  label_two: string;
}

interface ProjectRequest {
  title: string;
  label: string;
  img: string;
  arr: ProjectDetail[];
}

const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: { details: true }, // 包含相关的 ProjectDetail 数据
    });
    return NextResponse.json(
      {
        projects,
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
    const data = (await request.json()) as ProjectRequest;

    const topic = await prisma.project.create({
      data: {
        title: data.title,
        label: data.label,  // 修改这里
        img: data.img,
        details: {
          create: data.arr,
        },
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
