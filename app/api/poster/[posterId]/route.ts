import data from "@/data/routine-data.json";
import { PosterType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const posterData: PosterType[] = data;

export async function GET(
   req: Request,
   { params }: { params: { posterId: string } }
) {
   try {
      const { origin } = new URL(req.url);
      if (!params.posterId) {
         return new NextResponse("PosterId is required", { status: 400 });
      }

      const poster: PosterType = posterData.filter(
         (e) => e.id === params.posterId
      )[0];

      if (!poster) {
         return new NextResponse("Poster not found", { status: 400 });
      }

      return NextResponse.json({
         ...poster,
         images: {
            poster_imageUrl: origin + poster.images.poster_imageUrl,
            muscles_worked_imageUrl:
               origin + poster.images.muscles_worked_imageUrl,
            focus_imageUrl: origin + poster.images.focus_imageUrl,
            type_imageUrl: origin + poster.images.type_imageUrl,
            difficulty_imageUrl: origin + poster.images.difficulty_imageUrl,
         },
      });
   } catch (error) {
      console.log("[PosterId_Get]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
