import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const EquipmentCard = ({
   target,
   onClick,
}: {
   target: {
      imageUrl: string;
      equipment: string;
      exerciseCount: number;
   };
   onClick?: () => void;
}) => {
   return (
      <Card
         onClick={onClick}
         className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in"
      >
         <CardHeader className="px-1.5 !pt-1.5 !pb-1 md:p-3">
            <CardTitle className="font-extrabold text-light-blue text-sm md:text-lg capitalize w-full truncate">
               {target.equipment}
            </CardTitle>
         </CardHeader>
         <CardContent className="p-1.5 md:p-3 !pt-0">
            <Image
               height={150}
               width={150}
               src={target.imageUrl}
               alt="exercise image"
               className="w-full aspect-square object-cover rounded transition group-hover:scale-[107%] group-hover:shadow group-active:scale-100"
               loading="lazy"
            />
         </CardContent>
      </Card>
   );
};

export default EquipmentCard;
