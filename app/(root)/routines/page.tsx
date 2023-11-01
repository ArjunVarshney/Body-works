"use client";

import RoutineCategories from "@/components/routines/routine-categories";
import Heading from "@/components/ui/heading";
import SectionHeading from "@/components/ui/section-heading";

const Routines = () => {
   return (
      <div className="container">
         <SectionHeading title="Search Through 15+ Categories" />
         <div className="container !pt-0">
            <RoutineCategories />
         </div>
      </div>
   );
};

export default Routines;
