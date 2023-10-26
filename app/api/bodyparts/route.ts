import data from "@/data/bodyparts.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
   try {
      const origin = "https://body-works.vercel.app";
      const response = {
         numberOfBodyParts: data.length,
         data: [
            ...data.map((bodypart) => {
               bodypart.imageUrl = origin + bodypart.imageUrl;
               return bodypart;
            }),
         ],
      };
      return NextResponse.json(response);
   } catch (error) {
      console.log("[BODYPARTS_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
