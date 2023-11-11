"use client";

import ExerciseFilter from "@/components/exercise-filter";
import Exercises from "@/components/exercise/exercises";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { ExType } from "@/types";
import axios from "axios";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";

const ExercisePage = () => {
   const searchParams = useSearchParams();
   const [exercises, setExercises] = useState<ExType[]>([]);
   const [page, setPage] = useState(0);
   const [nPages, setNPages] = useState(0);
   const router = useRouter();

   const getQuery = (searchString?: string) => {
      const equipment = searchParams.get("equipment");
      const bodypart = searchParams.get("bodypart");
      const targetMuscle = searchParams.get("targetMuscle");
      return {
         search: searchString || undefined,
         equipment: equipment || undefined,
         bodypart: bodypart || undefined,
         targetMuscle: targetMuscle || undefined,
      };
   };

   const loadMore = async () => {
      const searchString = searchParams.get("search");
      const fetchUrl = queryString.stringifyUrl({
         url: "/api/exercises",
         query: { ...getQuery(searchString || undefined), page: page + 1 },
      });
      const data = await fetchData(fetchUrl);
      setExercises((prev) => [...prev, ...data.data]);
      setPage((prev) => prev + 1);
   };

   const fetchData = async (url: string) => {
      try {
         const data = (await axios.get(url)).data;
         return data;
      } catch (error) {
         console.log(error);
      }
   };

   const fetchDataAndChangeUrl = async (searchString?: string) => {
      const fetchUrl = queryString.stringifyUrl({
         url: "/api/exercises",
         query: getQuery(searchString),
      });
      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: getQuery(searchString),
      });

      router.push(url);
      const data = await fetchData(fetchUrl);
      setExercises(data.data);

      setPage(0);
      setNPages(data.numberOfPages);
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const searchString = String(formData.get("search"));

      fetchDataAndChangeUrl(searchString);
   };

   useEffect(() => {
      const searchString = searchParams.get("search");
      fetchDataAndChangeUrl(searchString || undefined);
   }, [searchParams]);

   return (
      <div className="container !pt-0">
         <SectionHeading title="Exercises" />
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

         <div className="flex w-full justify-center mt-10">
            <Button
               variant={"outline"}
               onClick={loadMore}
               disabled={nPages <= page + 1}
            >
               Load More
            </Button>
         </div>
      </div>
   );
};

export default ExercisePage;
