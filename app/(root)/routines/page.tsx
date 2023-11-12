"use client";

import RoutineCategories from "@/components/routines/routine-categories";
import RoutineFilter from "@/components/routines/routine-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Routines = () => {
   const searchParams = useSearchParams();
   return (
      <div className="container">
         <SectionHeading title="Search Through 15+ Categories" />
         <div className="container !pt-0">
            <form
               className="p-2 md:p-4 flex items-center gap-2 border shadow-sm rounded-lg bg-muted"
               // onSubmit={handleSubmit}
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
      </div>
   );
};

export default Routines;
