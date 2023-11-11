import { Loader2, PlusCircle, X } from "lucide-react";
import { useRequest } from "@/hooks/use-request";
import BodyPartsCard from "./body-part-card";
import { BodyPartType } from "@/types";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const BodyParts = ({
   n,
   removeFilterBtn = false,
   viewMoreBtn = false,
}: {
   n?: number;
   removeFilterBtn?: boolean;
   viewMoreBtn?: boolean;
}) => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const handleClick = (bodyPart?: string) => {
      const queries: any = {};
      searchParams.forEach((value, key) => {
         queries[key] = value;
      });

      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            ...queries,
            bodypart: bodyPart || undefined,
         },
      });
      router.push(url, { scroll: false });
   };

   const bodyParts: BodyPartType[] = useRequest("/api/bodyparts").data;
   if (!n && bodyParts) n = bodyParts.length;
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
         {bodyParts ? (
            bodyParts.slice(0, n).map((bodyParts) => (
               <BodyPartsCard
                  onClick={() => {
                     handleClick(bodyParts.bodyPart);
                  }}
                  key={bodyParts.bodyPart}
                  target={bodyParts}
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
                  onClick={() => router.push("/categories#body-parts")}
               >
                  <PlusCircle className="h-10 w-10 opacity-70" />
                  View More
               </Button>
            </div>
         )}
      </div>
   );
};

export default BodyParts;
