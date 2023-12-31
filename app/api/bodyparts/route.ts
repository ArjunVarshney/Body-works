import data from "@/data/bodyparts.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
      const { origin } = new URL(req.url);
      const response = {
         numberOfBodyParts: data.length,
         data: [
            ...data.map((bodypart) => {
               return {
                  ...bodypart,
                  imageUrl: origin + bodypart.imageUrl,
               };
            }),
         ],
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[BODYPARTS_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
