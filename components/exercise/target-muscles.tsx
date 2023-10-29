import { MuscleType } from "@/types";
import TargetMuscleCard from "./target-muscle-card";
import { Loader2, PlusCircle } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const TargetMuscles = ({
   n,
   viewMoreBtn = false,
}: {
   n?: number;
   viewMoreBtn?: boolean;
}) => {
   const router = useRouter();
   const muscles: MuscleType[] = useRequest("/api/targetmuscles").data;
   if (!n && muscles) n = muscles.length;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {muscles ? (
            muscles
               .slice(0, n)
               .map((muscle) => (
                  <TargetMuscleCard key={muscle.targetMuscle} target={muscle} />
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
