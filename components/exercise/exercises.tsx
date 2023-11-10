"use client";

import ExerciseCard from "./exercise-card";
import { Loader2 } from "lucide-react";
import queryString from "query-string";
import { ExType } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";

interface ExerciseProps {
   limit?: number;
   page?: number;
   targetMuscle?: string;
   exercises?: ExType[];
}

const Exercises = ({
   limit = 10,
   page = 1,
   targetMuscle,
   exercises,
}: ExerciseProps) => {
   const [data, setData] = useState<ExType[]>([]);

   const fetchData = async (url: string) => {
      try {
         if (!exercises) {
            const data = (await axios.get(url)).data;
            setData(data.data);
         } else {
            setData(exercises);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      const url = queryString.stringifyUrl({
         url: "/api/exercises",
         query: { limit, page, targetMuscle },
      });
      fetchData(url);
   }, [exercises]);

   return (
      <>
         {data ? (
            <div className="container grid grid-cols-[repeat(1,minmax(200px,500px))] sm:grid-cols-[repeat(2,minmax(200px,450px))] lg:grid-cols-[repeat(3,minmax(200px,450px))] gap-10">
               {data.map((ex: ExType) => (
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
