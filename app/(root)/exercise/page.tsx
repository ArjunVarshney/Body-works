"use client";

import ExerciseFilter from "@/components/exercise-filter";
import Exercises from "@/components/exercise/exercises";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";

const ExercisePage = () => {
   const searchParams = useSearchParams();
   const [exercises, setExercises] = useState([]);

   const router = useRouter();

   const fetchData = async (url: string) => {
      try {
         const data = (await axios.get(url)).data;
         setExercises(data.data);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const searchString = String(formData.get("search"));

      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            search: searchString === "" ? undefined : searchString,
         },
      });

      const fetchUrl = queryString.stringifyUrl({
         url: "/api/exercises",
         query: {
            search: searchString === "" ? undefined : searchString,
         },
      });

      router.push(url);
      fetchData(fetchUrl);
   };

   useEffect(() => {
      const searchString = searchParams.get("search");
      const url = queryString.stringifyUrl({
         url: "/api/exercises",
         query: {
            search: searchString === "" ? undefined : searchString,
         },
      });

      fetchData(url);
   }, [searchParams]);

   return (
      <div className="container !pt-0">
         <SectionHeading title="Search For Exercises" />
         <div className="container !py-0">
            <form
               className="p-2 md:p-4 flex items-center gap-2 border shadow-sm rounded-lg bg-muted"
               onSubmit={handleSubmit}
            >
               <Input
                  type="text"
                  placeholder="Search"
                  name="search"
                  className="text-xl py-6"
                  defaultValue={searchParams.get("search") || ""}
               />
               <Button type="submit" variant={"ghost"}>
                  <Search />
               </Button>
            </form>
         </div>
         <ExerciseFilter />
         <Separator />
         <Exercises exercises={exercises} />
      </div>
   );
};

export default ExercisePage;
