import { Loader2 } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import EquipmentCard from "./equipment-card";
import { EquipmentType } from "@/types";

const Equipments = () => {
   const equipments: EquipmentType[] = useRequest("/api/equipments").data;
   return (
      <div className="grid grid-cols-[repeat(auto-fill,80px)] md:grid-cols-[repeat(auto-fill,150px)] gap-2 place-content-center">
         {equipments ? (
            equipments.map((equipments) => (
               <EquipmentCard key={equipments.equipment} target={equipments} />
            ))
         ) : (
            <div className="min-h-[300px] flex items-center justify-center">
               <Loader2 className="animate-spin w-full min-h-[100px]" />
            </div>
         )}
      </div>
   );
};

export default Equipments;
