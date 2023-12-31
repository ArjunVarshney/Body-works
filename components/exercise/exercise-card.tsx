import { Badge } from "@/components/ui/badge";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { ExType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ExerciseCard = ({ ex }: { ex: ExType }) => {
   return (
      <Link href={"/exercise/" + ex.id}>
         <Card className="group hover:scale-[97%] hover:shadow-inner active:scale-100 transition animate-pop-in">
            <CardHeader>
               <CardTitle className="font-extrabold mb-2 text-light-blue text-3xl">
                  {ex.title}
               </CardTitle>
               <CardDescription className="text-primary flex gap-1 capitalize">
                  <Badge>{ex.target}</Badge>
                  <Badge>{ex.bodyPart}</Badge>
                  <Badge variant={"destructive"}>{ex.equipment}</Badge>
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Image
                  height={70}
                  width={70}
                  src={ex.gifUrl}
                  alt="exercise image"
                  className="w-full max-h-[300px] object-cover rounded-lg mb-3 transition border dark:border-none group-hover:scale-[107%] group-hover:shadow group-active:scale-100 bg-white"
                  loading="lazy"
               />
            </CardContent>
         </Card>
      </Link>
   );
};

export default ExerciseCard;
