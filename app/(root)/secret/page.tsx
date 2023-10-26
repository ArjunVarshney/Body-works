"use client";

import { Button } from "@/components/ui/button";
import data from "./course-data.json";
import { useRouter } from "next/navigation";

const SecretPage = () => {
   const router = useRouter();
   return (
      <div>
         <div className="text-5xl flex font-bold p-4 rounded-lg mb-10 uppercase bg-primary text-primary-foreground">
            Courses
         </div>
         {Object.keys(data).map((course) => (
            <Button
               key={course}
               variant={"outline"}
               className="w-full flex justify-start capitalize text-lg mt-2"
               onClick={() => router.push(`/secret/${course}`)}
            >
               {course}
            </Button>
         ))}
      </div>
   );
};

export default SecretPage;
