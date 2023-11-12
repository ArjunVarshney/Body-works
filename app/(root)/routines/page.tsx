"use client";

import RoutineFilter from "@/components/routines/routine-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RoutineType } from "@/types";
import queryString from "query-string";
import axios from "axios";
import ExRoutines from "@/components/routines/routines";

const Routines = () => {
   const searchParams = useSearchParams();
   const [routines, setRoutines] = useState<RoutineType[]>([]);
   const [page, setPage] = useState(0);
   const [nPages, setNPages] = useState(0);
   const router = useRouter();

   const getQuery = (searchString?: string) => {
      const category = searchParams.get("category");
      const equipment = searchParams.get("equipment");
      const gender = searchParams.get("gender");
      const duration = searchParams.get("duration");
      const level = searchParams.get("level");
      const days_per_week = searchParams.get("days_per_week");
      const main_goal = searchParams.get("main_goal");
      const workout_type = searchParams.get("workout_type");
      return {
         search: searchString || undefined,
         equipment: equipment || undefined,
         gender: gender || undefined,
         duration: duration || undefined,
         category: category || undefined,
         level: level || undefined,
         days_per_week: days_per_week || undefined,
         main_goal: main_goal || undefined,
         workout_type: workout_type || undefined,
      };
   };

   const loadMore = async () => {
      const searchString = searchParams.get("search");
      const fetchUrl = queryString.stringifyUrl({
         url: "/api/routine",
         query: { ...getQuery(searchString || undefined), page: page + 1 },
      });
      const data = await fetchData(fetchUrl);
      console.log(data);
      setRoutines((prev) => [...prev, ...data.data]);
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
         url: "/api/routine",
         query: getQuery(searchString),
      });
      const url = queryString.stringifyUrl({
         url: "/routines",
         query: getQuery(searchString),
      });

      router.push(url);
      const data = await fetchData(fetchUrl);
      setRoutines(data.data);

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
      <div className="container">
         <SectionHeading title="Routines" className="pt-3"/>
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
         <RoutineFilter />
         <ExRoutines routines={routines} />

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

export default Routines;
