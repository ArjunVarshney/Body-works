import data from "@/data/ex-data.json";
import { ExType } from "@/types";
import { NextResponse } from "next/server";

// @ts-expect-error
const exData: ExType[] = data;

export async function GET(
  req: Request,
  { params }: { params: { exerciseId: string } }
) {
  try {
    if (!params.exerciseId) {
      return new NextResponse("ExerciseId is required", { status: 400 });
    }

    const ex: ExType = exData.filter((e) => e.id === params.exerciseId)[0];

    if (!ex) {
      return new NextResponse("Exercise not found", { status: 400 });
    }

    return NextResponse.json(ex);
  } catch (error) {
    console.log("[EXERCISEID_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
