import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { ExType } from "@/types";

const ExerciseCard = ({ ex }: { ex: ExType }) => {
   return (
      <Card className="group hover:scale-[102%] transition animate-pop-in">
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
               width={50}
               height={50}
               src={ex.gifUrl}
               alt="exercise image"
               className="w-full max-h-[300px] object-cover rounded-lg mb-3 group-hover:mb-5 group-hover:scale-[107%] transition"
            />
         </CardContent>
      </Card>
   );
};

export default ExerciseCard;
