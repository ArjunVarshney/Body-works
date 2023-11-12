import data from "@/data/routine-data.json";
import { RoutineType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const routineData: RoutineType[] = data;

export async function GET(req: Request, res: Response) {
   try {
      let searchedData: RoutineType[] = [...routineData];

      const { searchParams, origin } = new URL(req.url);
      const page = parseInt(searchParams.get("page") || "0");
      const limit = parseInt(searchParams.get("limit") || "10");
      const search = searchParams.get("search");
      const category = searchParams.get("category");
      const equipment = searchParams.get("equipment");
      const gender = searchParams.get("gender");
      const duration = searchParams.get("duration");
      const trainingLevel = searchParams.get("level");
      const daysPerWeek = searchParams.get("days_per_week");
      const mainGoal = searchParams.get("main_goal");
      const workoutType = searchParams.get("workout_type");

      const start = page * limit;
      const end = start + limit;

      if (category) {
         const regex = new RegExp(category, "i");

         searchedData = searchedData.filter((workout) =>
            workout.category.some((category) => regex.test(category))
         );
      }

      if (equipment) {
         const regex = new RegExp(equipment, "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(workout.routine.workout_summary["Equipment Required"])
         );
      }

      if (gender) {
         const regex = new RegExp(gender, "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(workout.routine.workout_summary["Target Gender"])
         );
      }

      if (duration) {
         const regex = new RegExp(duration, "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(workout.routine.workout_summary["Program Duration"])
         );
      }

      if (trainingLevel) {
         const regex = new RegExp(trainingLevel.replace(" ", ""), "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(
               workout.routine.workout_summary["Training Level"].replace(
                  " ",
                  ""
               )
            )
         );
      }

      if (daysPerWeek) {
         const regex = new RegExp(String(daysPerWeek).replace(" ", ""), "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(
               workout.routine.workout_summary["Days Per Week"].replace(" ", "")
            )
         );
      }

      if (mainGoal) {
         const regex = new RegExp(String(mainGoal).replace(" ", ""), "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(
               workout.routine.workout_summary["Main Goal"].replace(" ", "")
            )
         );
      }

      if (workoutType) {
         const regex = new RegExp(String(workoutType).replace(" ", ""), "i");

         searchedData = searchedData.filter((workout) =>
            regex.test(
               workout.routine.workout_summary["Workout Type"].replace(" ", "")
            )
         );
      }

      if (search) {
         const regex = new RegExp(search.trim(), "i");
         searchedData = searchedData.filter(
            (workout) =>
               regex.test(JSON.stringify(workout.routine.workout_summary)) ||
               regex.test(workout.routine.routine_title) ||
               regex.test(workout.routine.routine_description) ||
               regex.test(JSON.stringify(workout.category))
         );
      }

      const outputArray: RoutineType[] = [
         ...searchedData.slice(start, end).map((routine: RoutineType) => {
            return {
               ...routine,
               routine: {
                  ...routine.routine,
                  routine_imageUrl:
                     origin + "/assets" + routine.routine.routine_imageUrl,
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
