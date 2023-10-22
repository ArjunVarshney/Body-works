"use client";

import { useParams } from "next/navigation";
import data from "../../course-data.json";
import Sidebar from "../../_components/sidebar";

const VidPage = () => {
   const params = useParams();
   let video;

   // @ts-ignore
   Object.entries(data[params.courseName]).forEach(([key, value]) => {
      // @ts-ignore
      value.forEach((vid: { id: string | string[] }) => {
         if (vid.id === params.vidId) {
            video = vid;
         }
      });
   });

   return (
      <>
         <div className="flex items-center justify-center">
            {/* @ts-ignore */}
            <Sidebar data={data[params.courseName]} name={params.courseName} />
            <div className="text-sm md:text-md lg:text-lg xl:text-xl flex flex-1 font-bold p-4 rounded-lg uppercase bg-primary text-primary-foreground">
               {video!.name}
            </div>
         </div>
         <div className="w-full mt-5 rounded-lg overflow-hidden">
            <iframe
               className="w-full aspect-video"
               src={video!.url}
               allow="autoplay"
               autoFocus
               allowFullScreen
            ></iframe>
         </div>
      </>
   );
};

export default VidPage;
