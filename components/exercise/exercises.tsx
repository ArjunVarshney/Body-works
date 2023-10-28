"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard from "./exercise-card";
import { Loader2 } from "lucide-react";
import queryString from "query-string";

interface ExerciseProps {
   limit?: number;
   page?: number;
}

const Exercises = ({ limit = 10, page = 1 }: ExerciseProps) => {
   const [exercises, setExercises] = useState<any[]>([]);
   const [loading, setLoading] = useState(false);

   const fetchExercises = async () => {
      try {
         setLoading(true);
         const url = queryString.stringifyUrl({
            url: "/api/exercises",
            query: {
               limit,
               page,
            },
         });
         const ex = (await axios.get(url)).data.data;
         setExercises(ex);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchExercises();
   }, []);

   return (
      <>
         {loading && <Loader2 className="animate-spin w-full min-h-[100px]" />}
         <div className="container grid grid-cols-[repeat(1,minmax(200px,500px))] sm:grid-cols-[repeat(2,minmax(200px,450px))] lg:grid-cols-[repeat(3,minmax(200px,450px))] gap-10">
            {exercises.map((ex) => {
               return <ExerciseCard key={ex.id} ex={ex} />;
            })}
         </div>
      </>
   );
};

export default Exercises;
