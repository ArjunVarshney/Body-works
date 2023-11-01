import data from "@/data/routine-category.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
      const { origin } = new URL(req.url);
      const response = {
         numberOfCategories: data.length,
         data: [
            ...data.map((category) => {
               return {
                  ...category,
                  imageUrl: origin + "/assets" + category.imageUrl,
               };
            }),
         ],
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[ROUTINE_CATEGORY_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
