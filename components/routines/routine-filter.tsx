"use client";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Heading from "../ui/heading";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import RoutineCategories from "./routine-filter-cards";
import { useRequest } from "@/hooks/use-request";
import { Skeleton } from "../ui/skeleton";

const FilterCards = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const removeFilters = () => {
      router.push("/routines");
   };

   const filters = useRequest("/api/routine/filter");

   const navigations = [
      {
         queryKey: "category",
         name: "Category",
         heading: "Categories",
         description: "Filter on the basis of category",
         data: filters.category,
      },
      {
         queryKey: "equipment",
         name: "Equipment",
         heading: "Equipments",
         description: "Filter on the basis of equipment used",
         data: filters.equipment,
      },
      {
         queryKey: "gender",
         name: "Gender",
         heading: "Gender",
         description: "Filter on the basis of gender",
         data: filters.gender,
      },
      {
         queryKey: "duration",
         name: "Duration",
         heading: "Durations",
         description: "Filter on the basis of duration of workout",
         data: filters.duration,
      },
      {
         queryKey: "level",
         name: "Level",
         heading: "Levels",
         description: "Filter on the basis of level of workout",
         data: filters.level,
      },
      {
         queryKey: "days_per_week",
         name: "Days per Week",
         heading: "Frequency",
         description: "Filter on the basis of days per week",
         data: filters.days_per_week,
      },
      {
         queryKey: "main_goal",
         name: "Main Goal",
         heading: "Goals",
         description: "Filter on the basis of your goal",
         data: filters.main_goal,
      },
      {
         queryKey: "workout_type",
         name: "Workout Type",
         heading: "Types of Workouts",
         description: "Filter on the basis of the type of workout",
         data: filters.workout_type,
      },
   ];

   return filters ? (
      <NavigationMenu>
         <NavigationMenuList className="flex flex-wrap justify-start gap-2">
            {navigations &&
               navigations.map(
                  ({ name, queryKey, heading, description, data }) => (
                     <NavigationMenuItem key={queryKey}>
                        <NavigationMenuTrigger
                           className={cn(
                              "capitalize text-xs p-2 h- xl:h-10 xl:text-sm xl:p-3",
                              searchParams.get(queryKey) &&
                                 "bg-muted font-semibold"
                           )}
                        >
                           {searchParams.get(queryKey) || name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                           <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                              <div className="container">
                                 <Heading
                                    title={heading}
                                    description={description}
                                 />
                                 <RoutineCategories
                                    removeFilterBtn={true}
                                    data={data}
                                    queryKey={queryKey}
                                 />
                              </div>
                           </ScrollArea>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                  )
               )}
            <NavigationMenuItem>
               <Button
                  variant={"destructive"}
                  onClick={removeFilters}
                  className="text-xs p-2 h- xl:h-10 xl:text-sm xl:p-3"
               >
                  Remove Filters
               </Button>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   ) : (
      <Skeleton className="h-[60px] w-full" />
   );
};

const RoutineFilter = () => {
   return (
      <div className="container">
         <Popover>
            <PopoverTrigger className="sm:hidden py-2 px-3 border rounded-lg flex items-center justify-center gap-2">
               Filter <ChevronDown className="h-4 w-4" />
            </PopoverTrigger>
            <PopoverContent className="w-[90vw]">
               <FilterCards />
            </PopoverContent>
         </Popover>
         <div className="hidden sm:block">
            <FilterCards />
         </div>
      </div>
   );
};

export default RoutineFilter;
