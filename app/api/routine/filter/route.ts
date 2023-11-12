import data from "@/data/routine-filter.json";
import { NextResponse } from "next/server";

function updateImageUrls(obj: { [x: string]: any[] }, prefix: any) {
   for (const key in obj) {
      if (Array.isArray(obj[key])) {
         obj[key].forEach((item: { imageUrl: any; routine_imageUrl: any }) => {
            if (item.imageUrl && !item.imageUrl.startsWith(prefix)) {
               item.imageUrl = prefix + item.imageUrl;
            }
            if (item.routine_imageUrl) {
               item.routine_imageUrl = prefix + item.routine_imageUrl;
            }
         });
      }
   }
}

export async function GET(req: Request, res: Response) {
   try {
      const { origin } = new URL(req.url);
      let modifiedData = { ...data };
      updateImageUrls(modifiedData, origin + "/assets");
      const response = {
         ...modifiedData,
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[ROUTINE_FILTER_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
