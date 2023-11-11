import { Loader2, PlusCircle, X } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import EquipmentCard from "./equipment-card";
import { EquipmentType } from "@/types";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import queryString from "query-string";

const Equipments = ({
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

   const handleClick = (equipment?: string) => {
      const queries: any = {};
      searchParams.forEach((value, key) => {
         queries[key] = value;
      });

      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            ...queries,
            equipment: equipment || undefined,
         },
      });
      router.push(url, { scroll: false });
   };

   const equipments: EquipmentType[] = useRequest("/api/equipments").data;
   if (!n && equipments) n = equipments.length;
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
         {equipments ? (
            equipments.slice(0, n).map((equipments) => (
               <EquipmentCard
                  onClick={() => {
                     handleClick(equipments.equipment);
                  }}
                  key={equipments.equipment}
                  target={equipments}
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
                  onClick={() => router.push("/categories#equipments")}
               >
                  <PlusCircle className="h-10 w-10 opacity-70" />
                  View More
               </Button>
            </div>
         )}
      </div>
   );
};

export default Equipments;
