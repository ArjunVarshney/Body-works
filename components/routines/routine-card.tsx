import { Badge } from "@/components/ui/badge";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { RoutineType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ExerciseCard = ({ routine }: { routine: RoutineType }) => {
   return (
      <Link href={"/routines/" + routine.id}>
         <Card className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in">
            <CardHeader>
               <CardTitle className="font-extrabold mb-2 text-light-blue text-3xl">
                  {routine.routine.routine_title}
               </CardTitle>
               <CardDescription className="text-primary flex gap-1 capitalize">
                  {routine.routine.routine_description}
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Image
                  height={300}
                  width={300}
                  src={routine.routine.routine_imageUrl}
                  alt="exercise image"
                  className="w-full max-h-[300px] aspect-square object-cover rounded-lg mb-3 transition border dark:border-none group-hover:scale-[107%] group-hover:shadow group-active:scale-100 bg-white"
                  loading="lazy"
               />
            </CardContent>
         </Card>
      </Link>
   );
};

export default ExerciseCard;
