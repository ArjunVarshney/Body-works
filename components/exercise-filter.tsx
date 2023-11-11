import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Equipments from "./exercise/equipments";
import BodyParts from "./exercise/body-parts";
import TargetMuscles from "./exercise/target-muscles";
import { ScrollArea } from "./ui/scroll-area";
import Heading from "./ui/heading";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const ExerciseFilter = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const removeFilters = () => {
      router.push("/exercise");
   };

   return (
      <div className="container">
         <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap justify-start gap-2">
               <NavigationMenuItem>
                  <NavigationMenuTrigger
                     className={cn(
                        searchParams.get("equipment") &&
                           "bg-muted capitalize font-semibold"
                     )}
                  >
                     {searchParams.get("equipment") || "Equipment"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Equipments"
                              description="Filter on the basis of equipments"
                           />
                           <Equipments removeFilterBtn={true} />
                        </div>
                     </ScrollArea>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <NavigationMenuTrigger
                     className={cn(
                        searchParams.get("bodypart") &&
                           "bg-muted capitalize font-semibold"
                     )}
                  >
                     {searchParams.get("bodypart") || "Body Part"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Body Parts"
                              description="Filter on the basis of body parts"
                           />
                           <BodyParts removeFilterBtn={true} />
                        </div>
                     </ScrollArea>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <NavigationMenuTrigger
                     className={cn(
                        searchParams.get("targetMuscle") &&
                           "bg-muted capitalize font-semibold"
                     )}
                  >
                     {searchParams.get("targetMuscle") || "Target Muscle"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Target Muscles"
                              description="Filter on the basis of target muscles"
                           />
                           <TargetMuscles removeFilterBtn={true} />
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
      </div>
   );
};

export default ExerciseFilter;
