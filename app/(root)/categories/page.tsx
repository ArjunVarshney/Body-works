"use client";

import BodyParts from "@/components/exercise/body-parts";
import Equipments from "@/components/exercise/equipments";
import TargetMuscles from "@/components/exercise/target-muscles";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Search } from "lucide-react";

const CategoryPage = () => {
   return (
      <div className="xl:border-t container">
         <SectionHeading title="Categories" />

         <div className="container !pt-2" id="target-muscles">
            <Heading
               title="Target Muscles"
               description="Filter on the basis of target muscles"
            />
            <TargetMuscles />
         </div>

         <div className="container !pt-0" id="body-parts">
            <Heading
               title="Body Parts"
               description="Filter on the basis of body parts"
            />
            <BodyParts />
         </div>

         <div className="container !pt-2" id="equipments">
            <Heading
               title="Equipments"
               description="Filter on the basis of equipments"
            />
            <Equipments />
         </div>
      </div>
   );
};

export default CategoryPage;
