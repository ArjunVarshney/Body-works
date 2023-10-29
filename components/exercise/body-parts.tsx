import { Loader2 } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import BodyPartsCard from "./body-part-card";
import { BodyPartType } from "@/types";

const BodyParts = () => {
   const bodyParts: BodyPartType[] = useRequest("/api/bodyparts").data;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {bodyParts ? (
            bodyParts.map((bodyParts) => (
               <BodyPartsCard key={bodyParts.bodyPart} target={bodyParts} />
            ))
         ) : (
            <div className="min-h-[300px] flex items-center justify-center">
               <Loader2 className="animate-spin w-full min-h-[100px]" />
            </div>
         )}
      </div>
   );
};

export default BodyParts;
