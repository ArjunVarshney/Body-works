"use client";

import RoutineCategoryCard from "@/components/routines/routine-category-card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/section-heading";
import { Skeleton } from "@/components/ui/skeleton";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useRequest } from "@/hooks/use-request";
import Image from "next/image";
import { RoutineType } from "@/types";
import Heading from "@/components/ui/heading";
import markdown from "@wcj/markdown-to-html";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

const RoutineIdPage = ({ params }: { params: { routineId: string } }) => {
   const { category, routine }: RoutineType = useRequest(
      "/api/routine/" + params.routineId
   );
   const categories = useRequest("/api/routine/filter").category;

   const router = useRouter();

   function handleTargetClick(category: string): void {
      const url = queryString.stringifyUrl({
         url: "/routines",
         query: {
            category,
         },
      });
      router.push(url);
   }

   return (
      <div className="container">
         {/* -------------------Heading part------------------ */}
         {routine && routine.routine_title ? (
            <SectionHeading
               title={routine.routine_title}
               className="py-0 pt-2"
            />
         ) : (
            <Skeleton className="w-full h-[60px] md:h-[120px] rounded-lb" />
         )}
         <div className="flex flex-col lg:flex-row mt-5">
            <div className="container flex flex-wrap gap-2">
               {category && categories ? (
                  <>
                     {category.map((category: string) => (
                        <TooltipProvider key={category}>
                           <Tooltip>
                              <TooltipTrigger>
                                 <Badge
                                    className="capitalize px-3 text-md cursor-pointer"
                                    variant={"destructive"}
                                    onClick={() => {
                                       handleTargetClick(category);
                                    }}
                                 >
                                    {category}
                                 </Badge>
                              </TooltipTrigger>
                              <TooltipContent className="p-0">
                                 <RoutineCategoryCard
                                    target={categories.find(
                                       (cat: { title: string }) =>
                                          cat.title === category
                                    )}
                                    onClick={() => {
                                       handleTargetClick(category);
                                    }}
                                 />
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     ))}
                  </>
               ) : (
                  <Skeleton className="h-[60px] mt-1 w-full mr-2" />
               )}
               {routine && routine.workout_summary ? (
                  <div className="w-full mt-5 border rounded-lg">
                     <Table>
                        <TableBody>
                           {Object.entries(routine.workout_summary).map(
                              ([key, value]) => (
                                 <TableRow key={key} className=" min-h-0 h-0">
                                    <TableCell className="font-semibold border-r px-2 sm:px-4 py-2">
                                       {key}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                 </TableRow>
                              )
                           )}
                        </TableBody>
                     </Table>
                  </div>
               ) : (
                  <Skeleton className="h-[310px] mt-1 w-full mr-2" />
               )}
            </div>
            {routine && routine.routine_imageUrl ? (
               <Image
                  height={500}
                  width={500}
                  src={routine.routine_imageUrl}
                  alt="routine image"
                  className="w-full lg:max-w-[400px] object-cover aspect-square rounded-lg border my-4 mr-4 scale-[96%] lg:scale-100"
               />
            ) : (
               <Skeleton className="w-full lg:max-w-[400px] aspect-square" />
            )}
         </div>
         <div className="container capitalize flex flex-col gap-5">
            {/* -------------------------Description---------------------- */}
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:border sm:p-5 rounded-lg animate-pop-in">
               <div className="flex-1">
                  <Heading title="Description" />
                  {routine && routine.routine_description ? (
                     <div
                        className="markdown-content"
                        dangerouslySetInnerHTML={{
                           __html: markdown(routine.routine_description),
                        }}
                     ></div>
                  ) : (
                     <Skeleton className="h-[150px]" />
                  )}
               </div>
            </div>
         </div>
         <div className="container capitalize flex flex-col gap-5">
            {/* -------------------------Plan---------------------- */}
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:border sm:p-5 rounded-lg animate-pop-in">
               <div className="flex-1">
                  <Heading title="Workout Plan" />
                  {routine && routine.routine_description ? (
                     <div className="flex flex-col gap-2">
                        {routine.workout_plan.map(({ day_plan, heading }) => (
                           <Fragment key={heading}>
                              <h3 className="p-2 font-semibold text-2xl underline">
                                 {heading}
                              </h3>
                              <div
                                 className="markdown-content"
                                 dangerouslySetInnerHTML={{
                                    __html: markdown(day_plan),
                                 }}
                              ></div>
                           </Fragment>
                        ))}
                     </div>
                  ) : (
                     <Skeleton className="h-[150px]" />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default RoutineIdPage;
