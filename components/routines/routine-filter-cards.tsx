import { Loader2, PlusCircle, X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import RoutineCategoryCard from "./routine-category-card";
import queryString from "query-string";

interface RoutineFilterProps {
   n?: number;
   removeFilterBtn?: boolean;
   viewMoreBtn?: boolean;
   data: {
      title: string;
      nRoutines: number;
      imageUrl?: string;
   }[];
   queryKey: string;
}

const RoutineFilter = ({
   n,
   removeFilterBtn = false,
   viewMoreBtn = false,
   data,
   queryKey,
}: RoutineFilterProps) => {
   const searchParams = useSearchParams();
   const router = useRouter();

   const handleClick = (val?: string) => {
      const queries: any = {};
      searchParams.forEach((value, key) => {
         queries[key] = value;
      });

      const url = queryString.stringifyUrl({
         url: "/routines",
         query: {
            ...queries,
            [queryKey]: val || undefined,
         },
      });
      router.push(url, { scroll: false });
   };

   if (!n && data) n = data.length;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {removeFilterBtn && (
            <div className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in">
               <Button
                  className="w-full h-full rounded flex flex-col items-center justify-center gap-2 font-bold"
                  variant={"destructive"}
                  onClick={() => handleClick()}
               >
                  {data && data[0].imageUrl && (
                     <X className="h-10 w-10 opacity-70" />
                  )}
                  Remove Filter
               </Button>
            </div>
         )}
         {data ? (
            data
               .slice(0, n)
               .map((category) => (
                  <RoutineCategoryCard
                     key={category.title}
                     target={category}
                     onClick={() => handleClick(category.title)}
                  />
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
                  {data && data[0].imageUrl && (
                     <PlusCircle className="h-10 w-10 opacity-70" />
                  )}
                  View More
               </Button>
            </div>
         )}
      </div>
   );
};

export default RoutineFilter;
