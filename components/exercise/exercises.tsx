"use client";
import ExerciseCard from "./exercise-card";
import { Loader2 } from "lucide-react";
import queryString from "query-string";
import { useRequest } from "@/hooks/use-request";
import { ExType } from "@/types";

interface ExerciseProps {
   limit?: number;
   page?: number;
   targetMuscle?: string;
}

const Exercises = ({ limit = 10, page = 1, targetMuscle }: ExerciseProps) => {
   const url = queryString.stringifyUrl({
      url: "/api/exercises",
      query: { limit, page, targetMuscle },
   });

   const exercises = useRequest(url).data;

   return (
      <>
         {exercises ? (
            <div className="container grid grid-cols-[repeat(1,minmax(200px,500px))] sm:grid-cols-[repeat(2,minmax(200px,450px))] lg:grid-cols-[repeat(3,minmax(200px,450px))] gap-10">
               {exercises.map((ex: ExType) => (
                  <ExerciseCard key={ex.id} ex={ex} />
               ))}
            </div>
         ) : (
            <div className="min-h-[300px] flex items-center justify-center">
               <Loader2 className="animate-spin w-full min-h-[100px]" />
            </div>
         )}
      </>
   );
};

export default Exercises;
