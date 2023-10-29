import { MuscleType } from "@/types";
import TargetMuscleCard from "./target-muscle-card";
import { Loader2 } from "lucide-react";
import { useRequest } from "@/hooks/use-request";

const TargetMuscles = () => {
   const muscles: MuscleType[] = useRequest("/api/targetmuscles").data;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {muscles ? (
            muscles.map((muscle) => (
               <TargetMuscleCard key={muscle.targetMuscle} target={muscle} />
            ))
         ) : (
            <div className="min-h-[300px] flex items-center justify-center">
               <Loader2 className="animate-spin w-full min-h-[100px]" />
            </div>
         )}
      </div>
   );
};

export default TargetMuscles;
