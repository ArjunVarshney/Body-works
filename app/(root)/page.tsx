import { Button } from "@/components/ui/button";
import { ArrowDownCircleIcon, Dumbbell } from "lucide-react";

const HomePage = () => {
   return (
      <>
         <div className="mt-3 w-full min-h-full xl:min-h-0 items-center justify-center flex flex-col xl:flex-row relative xl:items-stretch bg-foreground dark:bg-background rounded-3xl overflow-hidden px-4">
            <div className="dark text-white w-full h-full rounded-2xl z-10 flex flex-col justify-center xl:border-r-2 xl:h-[85vh] xl:pl-6 xl:bg-background transition">
               <div className="bg-black dark:bg-white w-fit p-2 rounded-lg mb-2 animate-enter delay-300">
                  <Dumbbell size={50} className="text-white dark:text-black" />
               </div>
               <span className="text-[rgb(0,185,239)] animate-enter delay-500 text-7xl sm:text-9xl xl:text-8xl font-bold font-mono ">
                  Body <br /> Works
               </span>
               <span className="animate-enter text-3xl xl:max-w-xs xl:text-2xl 2xl:max-w-md 2xl:text-3xl max-w-lg mt-4 delay-700 italic font-semibold ">
                  &quot;Not everyone can wake up every day feeling energized and
                  motivated to put in the hard work that it takes to stay
                  fit.&quot; -{" "}
                  <span className="not-italic font-normal">Arjun Varshney</span>
               </span>
            </div>
            <div className="dark min-h-full w-full bg-center bg-cover overflow-hidden bg-background shadow-edge bg-[url('/exercise.png')] opacity-50 xl:opacity-100 animate-expand duration-1000 delay-300 absolute xl:static top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0" />

            <div className="dark text-white w-full h-full rounded-2xl xl:items-center xl:justify-center flex flex-col z-10 xl:border-l-2  xl:h-[85vh] xl:bg-background">
               <div className="flex flex-col w-fit gap-y-3 mt-8">
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
         <div className="xl:border-t"></div>
      </>
   );
};

export default HomePage;
