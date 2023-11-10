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

const ExerciseFilter = () => {
   return (
      <div className="container">
         <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap justify-start gap-2">
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Equipment</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Equipments"
                              description="Filter on the basis of equipments"
                           />
                           <Equipments />
                        </div>
                     </ScrollArea>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <NavigationMenuTrigger>BodyPart</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Body Parts"
                              description="Filter on the basis of body parts"
                           />
                           <BodyParts />
                        </div>
                     </ScrollArea>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Target Muscle</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ScrollArea className="h-96 w-[85.5vw] sm:w-[89.2vw] md:w-[94.2vw] md:max-w-[705px] lg:max-w-[1350px]">
                        <div className="container">
                           <Heading
                              title="Target Muscles"
                              description="Filter on the basis of target muscles"
                           />
                           <TargetMuscles />
                        </div>
                     </ScrollArea>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Button variant={"destructive"}>Remove Filters</Button>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
};

export default ExerciseFilter;
