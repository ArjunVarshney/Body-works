import data from "@/data/routine-data.json";
import { RoutineType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const routineData: RoutineType[] = data;

export async function GET(
   req: Request,
   { params }: { params: { routineId: string } }
) {
   try {
      const { origin } = new URL(req.url);
      if (!params.routineId) {
         return new NextResponse("RoutineId is required", { status: 400 });
      }

      const routine: RoutineType = routineData.filter(
         (e) => e.id === parseInt(params.routineId)
      )[0];

      if (!routine) {
         return new NextResponse("Routine not found", { status: 400 });
      }

      return NextResponse.json({
         ...routine,
         routine: {
            ...routine.routine,
            routine_imageUrl:
               origin + "/assets" + routine.routine.routine_imageUrl,
         },
      });
   } catch (error) {
      console.log("[RoutineId_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
