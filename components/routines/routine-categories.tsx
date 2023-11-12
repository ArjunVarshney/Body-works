import { Loader2, PlusCircle, X } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import { BodyPartType, RoutineCategoryType } from "@/types";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import RoutineCategoryCard from "./routine-category-card";
import queryString from "query-string";

const RoutineCategories = ({
   n,
   removeFilterBtn = false,
   viewMoreBtn = false,
}: {
   n?: number;
   removeFilterBtn?: boolean;
   viewMoreBtn?: boolean;
}) => {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const router = useRouter();
   const categories: RoutineCategoryType[] = useRequest(
      "/api/routine/category"
   ).data;

   const handleClick = (targetmuscle?: string) => {
      const queries: any = {};
      searchParams.forEach((value, key) => {
         queries[key] = value;
      });

      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            ...queries,
            targetMuscle: targetmuscle || undefined,
         },
      });
      router.push(url, { scroll: false });
   };

   if (!n && categories) n = categories.length;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {removeFilterBtn && (
            <div className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in">
               <Button
                  className="w-full h-full rounded flex flex-col items-center justify-center gap-2 font-bold"
                  variant={"destructive"}
                  onClick={() => handleClick()}
               >
                  <X className="h-10 w-10 opacity-70" />
                  Remove Filter
               </Button>
            </div>
         )}
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
                  onClick={() => router.push("/categories#routine-categories")}
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
