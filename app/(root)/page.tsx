"use client";

import BodyParts from "@/components/exercise/body-parts";
import Equipments from "@/components/exercise/equipments";
import Exercises from "@/components/exercise/exercises";
import TargetMuscles from "@/components/exercise/target-muscles";
import RoutineCategories from "@/components/routines/routine-categories";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import SectionSubHeading from "@/components/ui/section-sub-heading";
import { useRequest } from "@/hooks/use-request";
import {
   ArrowDownCircleIcon,
   ArrowRightCircle,
   Dumbbell,
   Loader2,
   Search,
} from "lucide-react";
import { Fragment } from "react";

const HomePage = () => {
   const muscles = useRequest("/api/targetmuscles").data;
   return (
      <>
         <div className="max-w-3xl lg:max-w-none xl:max-w-[1400px] mx-auto w-full min-h-full xl:min-h-0 items-center justify-center flex flex-col xl:flex-row relative xl:items-stretch xl:bg-foreground dark:bg-background rounded-3xl px-5 sm:px-10 xl:px-0 border-4 border-t-0 border-b-0 border-background">
            <div className="w-full h-full rounded-2xl z-10 flex flex-col justify-center xl:border-r-2 xl:h-[85vh] xl:pl-8 xl:bg-background transition pt-8">
               <div className="bg-black dark:bg-white w-fit h-fit p-2 mb-2 opacity-0 animate-enter fill-mode-forwards delay-300 rounded-lg">
                  <Dumbbell size={50} className="text-white dark:text-black" />
               </div>
               <span className="text-light-blue opacity-0 animate-enter fill-mode-forwards delay-500 text-7xl sm:text-9xl xl:text-8xl font-bold font-mono ">
                  Body <br /> Works
               </span>
               <span className="opacity-0 text-3xl animate-enter fill-mode-forwards lg:max-w-[400px] xl:max-w-xs xl:text-2xl 2xl:max-w-sm max-w-lg mt-4 delay-700 italic font-semibold">
                  &quot;Not everyone can wake up every day feeling energized and
                  motivated to put in the hard work that it takes to stay
                  fit.&quot; -{" "}
                  <span className="not-italic font-normal">Arjun Varshney</span>
               </span>
            </div>

            <div className="hidden lg:block dark min-h-full w-full bg-center bg-cover overflow-hidden bg-background shadow-edge bg-[url('/exercise.webp')] opacity-30 lg:opacity-100 xl:animate-expand duration-1000 delay-300 absolute xl:static top-[50%] left-[50%] lg:left-[100%] -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0" />

            <div className="w-full h-full xl:items-center xl:justify-center flex flex-col z-10 xl:border-l-2 xl:h-[85vh] xl:bg-background rounded-2xl">
               <div className="flex flex-col w-fit gap-y-3 mt-8 pb-20">
                  <div className="flex gap-x-2">
                     <Button variant={"outline"} size={"lg"}>
                        Sign In
                     </Button>
                     <Button size={"lg"}>Log In</Button>
                  </div>
                  <Button size={"lg"}>Explore</Button>
                  <button className="hidden opacity-70 xl:flex mt-20 animate-bounce duration-50 justify-center items-center w-full">
                     <ArrowDownCircleIcon size={70}></ArrowDownCircleIcon>
                  </button>
               </div>
            </div>
         </div>
         <div className="xl:border-t bg-primary-foreground">
            <div className="container !py-10 w-full flex items-center justify-center">
               <Button
                  size={"lg"}
                  className="font-bold text-sm sm:text-xl md:text-3xl py-6 sm:py-10 pr-16 md:pr-20 flex gap-3 relative animate-pop-in hover:scale-95 active:scale-100 transition"
               >
                  Plan Your Workout
                  <ArrowRightCircle className="animate-pulse-right absolute right-7 md:h-8 md:w-8" />
               </Button>
            </div>
         </div>
         <div className="container">
            <SectionHeading title="Search For Exercises" />
            <form className="p-2 md:p-4 flex items-center gap-2 border shadow-sm rounded-lg bg-muted">
               <Input
                  type="text"
                  placeholder="Search"
                  className="text-xl py-6"
               />
               <Button type="submit" variant={"ghost"}>
                  <Search />
               </Button>
            </form>
            <div className="container">
               <Heading
                  title="Body Parts"
                  description="Filter on the basis of body parts"
               />
               <BodyParts n={5} viewMoreBtn={true} />
            </div>
            <div className="container !py-0">
               <Heading
                  title="Target Muscles"
                  description="Filter on the basis of target muscles"
               />
               <TargetMuscles n={5} viewMoreBtn={true} />
            </div>
            <div className="container !py-0">
               <Heading
                  title="Equipments"
                  description="Filter on the basis of equipments"
               />
               <Equipments n={5} viewMoreBtn={true} />
            </div>
         </div>
         <div className="container">
            <SectionHeading title="500+ Workout routines" />
            <div className="container !pt-0">
               <Heading
                  title="Routine Categories"
                  description="Filter on the basis of various categories"
               />
               <RoutineCategories n={8} viewMoreBtn={true} />
            </div>
            <div className="container !py-10 mt-10 w-full flex items-center justify-center bg-primary-foreground rounded border shadow">
               <Button
                  size={"lg"}
                  className="font-bold text-sm sm:text-xl md:text-3xl py-6 sm:py-10 pr-16 md:pr-20 flex gap-3 relative animate-pop-in hover:scale-95 active:scale-100 transition"
               >
                  OR Create Your Own
                  <ArrowRightCircle className="animate-pulse-right absolute right-7 md:h-8 md:w-8" />
               </Button>
            </div>
         </div>
         <div className="container">
            <SectionHeading title="Popular Exercises" />
            {muscles ? (
               muscles
                  .slice(0, 5)
                  .map(({ targetMuscle }: { targetMuscle: string }) => {
                     return (
                        <Fragment key={targetMuscle}>
                           <SectionSubHeading title={targetMuscle} />
                           <Exercises limit={3} targetMuscle={targetMuscle} />
                        </Fragment>
                     );
                  })
            ) : (
               <div className="min-h-[300px] flex items-center justify-center">
                  <Loader2 className="animate-spin w-full min-h-[100px]" />
               </div>
            )}
            <div className="flex w-full justify-center mt-10">
               <Button variant={"outline"}>Load More</Button>
            </div>
         </div>
      </>
   );
};

export default HomePage;
