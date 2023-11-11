import { MuscleType } from "@/types";
import TargetMuscleCard from "./target-muscle-card";
import { Loader2, PlusCircle, X } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const TargetMuscles = ({
   n,
   removeFilterBtn = false,
   viewMoreBtn = false,
}: {
   n?: number;
   removeFilterBtn?: boolean;
   viewMoreBtn?: boolean;
}) => {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

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

   const muscles: MuscleType[] = useRequest("/api/targetmuscles").data;
   if (!n && muscles) n = muscles.length;
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
         {muscles ? (
            muscles
               .slice(0, n)
               .map((muscle) => (
                  <TargetMuscleCard
                     onClick={() => handleClick(muscle.targetMuscle)}
                     key={muscle.targetMuscle}
                     target={muscle}
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
                  onClick={() => router.push("/categories#target-muscles")}
               >
                  <PlusCircle className="h-10 w-10 opacity-70" />
                  View More
               </Button>
            </div>
         )}
      </div>
   );
};

export default TargetMuscles;
