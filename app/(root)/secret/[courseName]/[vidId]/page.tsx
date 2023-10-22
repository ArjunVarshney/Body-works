"use client";

import { useParams } from "next/navigation";
import course_data from "../../course-data.json";
import Sidebar from "../../_components/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type videoType = { id: string; name: string; url: string };

const data = course_data as {
   [key: string]: {
      [key: string]: videoType[];
   };
};

const VidPage = () => {
   // @ts-ignore
   const params: {
      courseName: string;
      vidId: string;
   } = useParams();
   const router = useRouter();

   let video: videoType;
   let nextVideo: videoType;
   let prevVideo: videoType;
   let course_module: string;

   let c = 0;
   Object.entries(data[params.courseName]).forEach(([key, value]) => {
      value.forEach((vid) => {
         if (video && c === 0) {
            nextVideo = vid;
            c++;
         }
         if (vid.id === params.vidId) {
            video = vid;
            course_module = key;
         }
         if (!video) {
            prevVideo = vid;
         }
      });
   });

   return (
      <>
         <div className="flex items-center justify-center">
            <Sidebar data={data[params.courseName]} name={params.courseName} />
            <div className="text-sm md:text-md lg:text-lg xl:text-xl flex flex-1 font-bold p-4 rounded-lg uppercase bg-primary text-primary-foreground flex-col gap-1">
               {course_module!}
            </div>
         </div>
         <div className="w-full my-5 overflow-hidden">
            <iframe
               className="w-full aspect-video border rounded-lg"
               src={video!.url}
               allow="autoplay"
               autoFocus
               allowFullScreen
            ></iframe>
         </div>
         <div className="font-bold text-sm md:text-base lg:text-lg xl:text-xl mb-4 p-3 rounded-lg bg-slate-200 dark:bg-slate-800">
            {video!.name}
         </div>
         <div className="flex justify-between">
            <Button
               disabled={!prevVideo!}
               onClick={() =>
                  router.push(`/secret/${params.courseName}/${prevVideo.id}`)
               }
            >
               <ArrowLeft className="h-4 w-4 mr-2" />
               Previous
            </Button>
            <Button
               disabled={!nextVideo!}
               onClick={() =>
                  router.push(`/secret/${params.courseName}/${nextVideo.id}`)
               }
            >
               Next
               <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
         </div>
      </>
   );
};

export default VidPage;
