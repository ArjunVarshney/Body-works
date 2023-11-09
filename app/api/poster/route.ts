import data from "@/data/poster-data.json";
import { PosterType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const posterData: PosterType[] = data;

export async function GET(req: Request, res: Response) {
   try {
      let searchedData: PosterType[] = [...posterData];

      const { searchParams, origin } = new URL(req.url);
      const page = parseInt(searchParams.get("page") || "0");
      const limit = parseInt(searchParams.get("limit") || "10");
      const search = searchParams.get("search");
      const type = searchParams.get("type");
      const focus = searchParams.get("focus");
      const difficulty = searchParams.get("difficulty");

      const start = page * limit;
      const end = start + limit;

      if (type) {
         const regex = new RegExp(type, "i");

         searchedData = searchedData.filter((poster) =>
            regex.test(JSON.stringify(poster.type))
         );
      }

      if (focus) {
         const regex = new RegExp(focus, "i");

         searchedData = searchedData.filter((poster) =>
            regex.test(JSON.stringify(poster.focus))
         );
      }

      if (difficulty) {
         const regex = new RegExp(difficulty, "i");

         searchedData = searchedData.filter((poster) =>
            regex.test(JSON.stringify(poster.difficulty))
         );
      }

      if (search) {
         const regex = new RegExp(search.trim(), "i");
         searchedData = searchedData.filter(
            (poster) =>
               regex.test(JSON.stringify(poster.title)) ||
               regex.test(poster.type) ||
               regex.test(poster.focus) ||
               regex.test(poster.difficulty) ||
               regex.test(poster.id) ||
               regex.test(poster.infoText)
         );
      }

      const outputArray: PosterType[] = [
         ...searchedData.slice(start, end).map((poster: PosterType) => {
            return {
               ...poster,
               images: {
                  poster_imageUrl: origin + poster.images.poster_imageUrl,
                  muscles_worked_imageUrl:
                     origin + poster.images.muscles_worked_imageUrl,
                  focus_imageUrl: origin + poster.images.focus_imageUrl,
                  type_imageUrl: origin + poster.images.type_imageUrl,
                  difficulty_imageUrl:
                     origin + poster.images.difficulty_imageUrl,
               },
            };
         }),
      ];

      const response = {
         totalRoutines: searchedData.length,
         numberOfPages: Math.ceil(searchedData.length / limit),
         data: outputArray,
      };

      return NextResponse.json(response);
   } catch (error) {
      console.log("[Workout_GET]", error);
      return new NextResponse("Something went wrong", { status: 500 });
   }
}
