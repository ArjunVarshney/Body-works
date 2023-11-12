"use client";

import { Loader2 } from "lucide-react";
import queryString from "query-string";
import { ExType, RoutineType } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import RoutineCard from "./routine-card";

interface RoutineProps {
   limit?: number;
   page?: number;
   routines?: RoutineType[];
}

const ExRoutines = ({ limit = 10, page = 1, routines }: RoutineProps) => {
   const [data, setData] = useState<RoutineType[]>([]);

   const fetchData = async (url: string) => {
      try {
         if (!routines) {
            const data = (await axios.get(url)).data;
            setData(data.data);
         } else {
            setData(routines);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      const url = queryString.stringifyUrl({
         url: "/api/exercises",
         query: { limit, page },
      });
      fetchData(url);
   }, [routines]);

   return (
      <>
         {data ? (
            <div className="container grid grid-cols-[repeat(1,minmax(200px,500px))] sm:grid-cols-[repeat(2,minmax(200px,450px))] lg:grid-cols-[repeat(3,minmax(200px,450px))] gap-10">
               {data.map((routine: RoutineType) => (
                  <RoutineCard key={routine.id} routine={routine} />
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

export default ExRoutines;
