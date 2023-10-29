import data from "@/data/target-muscles.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
      const { origin } = new URL(req.url);

      const response = {
         numberOfTargetMuscles: data.length,
         data: [
            ...data.map((muscle) => {
               return {
                  ...muscle,
                  imageUrl: origin + muscle.imageUrl,
               };
            }),
         ],
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[TARGETMUSCLES_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
