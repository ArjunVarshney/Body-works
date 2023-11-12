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
import { ScrollArea } from "../ui/scroll-area";
import Heading from "../ui/heading";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import RoutineCategories from "./routine-categories";

const FilterCards = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const removeFilters = () => {
      router.push("/exercise");
   };
   return (
      <NavigationMenu>
         <NavigationMenuList className="flex flex-wrap justify-start gap-2">
            <NavigationMenuItem>
               <NavigationMenuTrigger
                  className={cn(
                     searchParams.get("category") &&
                        "bg-muted capitalize font-semibold"
                  )}
               >
                  {searchParams.get("category") || "Category"}
               </NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                     <div className="container">
                        <Heading
                           title="Categories"
                           description="Filter on the basis of category"
                        />
                        <RoutineCategories removeFilterBtn={true} />
                     </div>
                  </ScrollArea>
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Button variant={"destructive"} onClick={removeFilters}>
                  Remove Filters
               </Button>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
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
