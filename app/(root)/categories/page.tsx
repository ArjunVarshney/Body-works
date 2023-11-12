"use client";

import BodyParts from "@/components/exercise/body-parts";
import Equipments from "@/components/exercise/equipments";
import TargetMuscles from "@/components/exercise/target-muscles";
import RoutineCategories from "@/components/routines/routine-filter-cards";
import Heading from "@/components/ui/heading";
import SectionHeading from "@/components/ui/section-heading";
import { useRequest } from "@/hooks/use-request";

const CategoryPage = () => {
   const filters = useRequest("/api/routine/filter");

   const routineNav = [
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
   return (
      <div className="xl:border-t container">
         <SectionHeading title="Routine Categories" />
         <div className="container flex flex-col gap-5 !pt-0" id="routine-categories">
            {routineNav.map(
               ({ name, heading, description, data, queryKey }) => (
                  <>
                     <Heading title={heading} description={description} />
                     <RoutineCategories data={data} queryKey={queryKey} />
                  </>
               )
            )}
         </div>

         <SectionHeading title="Exercise Categories" />
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
