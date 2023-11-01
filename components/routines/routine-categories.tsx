import { Loader2, PlusCircle } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import { BodyPartType, RoutineCategoryType } from "@/types";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import RoutineCategoryCard from "./routine-category-card";

const RoutineCategories = ({
   n,
   viewMoreBtn = false,
}: {
   n?: number;
   viewMoreBtn?: boolean;
}) => {
   const router = useRouter();
   const categories: RoutineCategoryType[] = useRequest(
      "/api/routine/category"
   ).data;
   if (!n && categories) n = categories.length;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {categories ? (
            categories
               .slice(0, n)
               .map((category) => (
                  <RoutineCategoryCard key={category.title} target={category} />
               ))
         ) : (
            <div className="min-h-[200px] flex items-center justify-center">
               <Loader2 className="animate-spin w-full min-h-[100px]" />
            </div>
         )}
         {viewMoreBtn && (
            <div className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in">
               <Button
                  className="w-full h-full rounded flex flex-col items-center justify-center gap-2 font-bold"
                  onClick={() => router.push("/routines")}
               >
                  <PlusCircle className="h-10 w-10 opacity-70" />
                  View More
               </Button>
            </div>
         )}
      </div>
   );
};

export default RoutineCategories;
