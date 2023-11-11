"use client";

import markdown from "@wcj/markdown-to-html";
import BodyPartsCard from "@/components/exercise/body-part-card";
import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/heading";
import SectionHeading from "@/components/ui/section-heading";
import { useRequest } from "@/hooks/use-request";
import { BodyPartType, EquipmentType, MuscleType } from "@/types";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import {
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import TargetMuscleCard from "@/components/exercise/target-muscle-card";
import EquipmentCard from "@/components/exercise/equipment-card";

const ExercisePage = ({ params }: { params: { exerciseId: string } }) => {
   const router = useRouter();
   const exercise = useRequest("/api/exercises/" + params.exerciseId);
   const bodyParts = useRequest("/api/bodyparts").data;
   const bodyPart =
      bodyParts &&
      bodyParts.filter(
         (part: BodyPartType) => part.bodyPart === exercise.bodyPart
      )[0];
   const targetMuscles = useRequest("/api/targetmuscles").data;
   const muscle =
      targetMuscles &&
      targetMuscles.filter(
         (part: MuscleType) => part.targetMuscle === exercise.target
      )[0];
   const equipments = useRequest("/api/equipments").data;
   const equipment =
      equipments &&
      equipments.filter(
         (part: EquipmentType) => part.equipment === exercise.equipment
      )[0];

   function handleEquipmentClick(): void {
      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            equipment: exercise.equipment,
         },
      });
      router.push(url);
   }

   function handleTargetClick(): void {
      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            targetMuscle: exercise.target,
         },
      });
      router.push(url);
   }

   function handleBodyPartClick(): void {
      const url = queryString.stringifyUrl({
         url: "/exercise",
         query: {
            bodypart: exercise.bodyPart,
         },
      });
      router.push(url);
   }

   return (
      <div className="container">
         <div className="flex flex-col-reverse lg:flex-row gap-3 container !py-0">
            <div className="w-full lg:w-[70%] flex flex-col justify-between">
               <SectionHeading title={exercise.title} className="py-0 pt-2" />
               <div className="container flex gap-2">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger>
                           <Badge
                              className="capitalize px-3 py-2 text-md cursor-pointer"
                              onClick={handleTargetClick}
                           >
                              {exercise.target}
                           </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="p-0">
                           <TargetMuscleCard
                              target={muscle}
                              onClick={() => handleTargetClick()}
                           />
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger>
                           <Badge
                              variant={"destructive"}
                              className="capitalize px-3 py-2 text-md cursor-pointer"
                              onClick={handleEquipmentClick}
                           >
                              {exercise.equipment}
                           </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="p-0">
                           <EquipmentCard
                              target={equipment}
                              onClick={() => handleEquipmentClick()}
                           />
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
               <div className="border p-5 pt-2.5 rounded-lg">
                  <Heading title="Keywords" />
                  <div className="flex flex-wrap gap-2">
                     {exercise.keywords &&
                        exercise.keywords.map((keyword: string) => (
                           <Badge className="text-sm lg:text-md" key={keyword}>
                              {keyword}
                           </Badge>
                        ))}
                  </div>
               </div>
            </div>
            <Image
               height={70}
               width={70}
               src={exercise.gifUrl}
               alt="exercise image"
               className="w-full lg:max-w-[400px] aspect-square rounded-lg border"
               loading="lazy"
            />
         </div>
         <div className="container capitalize flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row justify-between gap-5 border p-5 rounded-lg animate-enter">
               <div className="flex-1">
                  <Heading title="Muscles Worked" />
                  <div
                     className="markdown-content"
                     dangerouslySetInnerHTML={{
                        __html: markdown(exercise["muscles worked"]),
                     }}
                  ></div>
               </div>
               <div className="sm:max-w-[200px] md:max-w-none">
                  {bodyPart && (
                     <BodyPartsCard
                        target={bodyPart}
                        onClick={() => handleBodyPartClick()}
                     />
                  )}
               </div>
            </div>
            <div className="container border rounded-lg">
               <Heading title="Images" />
               <div className="flex flex-wrap gap-5 pt-2">
                  {exercise.images &&
                     exercise.images.map((image: string) => (
                        <Image
                           key={image}
                           height={300}
                           width={300}
                           src={image}
                           alt="exercise image"
                           className="object-cover rounded-lg border h-[150px] w-auto"
                           loading="lazy"
                        />
                     ))}
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-5 border p-5 rounded-lg animate-enter">
               <div className="flex-1">
                  <Heading title="Details" />
                  <div
                     className="markdown-content"
                     dangerouslySetInnerHTML={{
                        __html: markdown(exercise.blog),
                     }}
                  />
               </div>
            </div>
            <div className="container border p-5 rounded-lg">
               <Heading title="Videos" />
               <div className="flex flex-wrap gap-5">
                  {exercise.videos &&
                     exercise.videos.map((video: string) => (
                        <ReactPlayer
                           key={video}
                           url={video}
                           width={"220px"}
                           height={""}
                           style={{
                              aspectRatio: "16 / 9",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "var(--radius)",
                              overflow: "hidden",
                           }}
                           controls={true}
                           light={true}
                        />
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ExercisePage;
