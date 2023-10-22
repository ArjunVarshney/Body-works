"use client";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams, useRouter } from "next/navigation";
import course_data from "../course-data.json";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
   const params = useParams();
   const router = useRouter();

   const data: {
      [key: string]: {
         name: string;
         url: string;
         id: string;
      }[];
      // @ts-ignore
   } = course_data[params["courseName"]];
   return (
      <div>
         <div className="text-5xl flex font-bold p-4 rounded-lg mb-5 uppercase bg-primary text-primary-foreground">
            {params.courseName}
         </div>
         <Accordion type="single" collapsible className="w-full mt-3">
            {Object.entries(data).map(([key, value]) => {
               return (
                  <AccordionItem value={key} key={key} className="border-none">
                     <AccordionTrigger className="bg-slate-200 dark:bg-slate-800 dark:text-primary pl-4 py-4">
                        {key}
                     </AccordionTrigger>
                     <AccordionContent className="mt-2">
                        {value.map((vids) => {
                           return (
                              <Button
                                 key={vids.name}
                                 variant={"outline"}
                                 className="truncate px-2 w-full flex justify-start mb-1"
                                 onClick={() =>
                                    router.push(
                                       `/secret/${params.courseName}/${vids.id}`
                                    )
                                 }
                              >
                                 {vids.name}
                              </Button>
                           );
                        })}
                     </AccordionContent>
                  </AccordionItem>
               );
            })}
         </Accordion>
      </div>
   );
};

export default CoursePage;
