"use client";

import Exercises from "@/components/exercise/exercises";
import { ExType } from "@/types";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";

const ExercisePage = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [data, setData] = useState<{
      totalExercises: number;
      numberOfPages: number;
      data: ExType[];
   }>({
      totalExercises: 0,
      numberOfPages: 0,
      data: [],
   });

   async function fetchData(options: any) {
      const url = queryString.stringifyUrl({
         url: "/api/exercises",
         query: options,
      });
      const data = await axios.get(url);
      console.log(url);
      setData(data.data);
   }

   useEffect(() => {
      fetchData({
         page: searchParams.get("page") || undefined,
         equipment: searchParams.get("equipment") || undefined,
         bodypart: searchParams.get("bodypart") || undefined,
         targetmuscle: searchParams.get("targetmuscle") || undefined,
      });
   }, []);

   return (
      <div className="container">
         <Exercises limit={10} />
      </div>
   );
};

export default ExercisePage;
