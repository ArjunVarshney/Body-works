"use client";

import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SidebarProps {
   data: {
      [key: string]: {
         name: string;
         url: string;
         id: string;
      }[];
   };
   name: string;
}

const Sidebar = ({ data, name }: SidebarProps) => {
   const router = useRouter();

   return (
      <Sheet>
         <SheetTrigger>
            <Menu className="h-full w-full p-6 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-lg" />
         </SheetTrigger>
         <SheetContent side={"left"} className="overflow-y-auto scrollbar">
            <SheetHeader>
               <SheetTitle className="font-bold text-2xl">Contents</SheetTitle>
            </SheetHeader>
            <Accordion type="single" collapsible className="w-full mt-3">
               {Object.entries(data).map(([key, value]) => {
                  return (
                     <AccordionItem
                        value={key}
                        key={key}
                        className="border-none"
                     >
                        <AccordionTrigger className="bg-slate-200 truncate text-xs md:text-sm dark:bg-slate-800 dark:text-primary pl-4 py-4">
                           {key}
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                           {value.map((vids) => {
                              return (
                                 <Button
                                    key={vids.name}
                                    variant={"outline"}
                                    className="truncate px-2 w-full flex justify-start mb-1"
                                    onClick={() =>
                                       router.push(`/secret/${name}/${vids.id}`)
                                    }
                                 >
                                    {vids.name.length > 4
                                       ? vids.name.substring(4)
                                       : vids.name}
                                 </Button>
                              );
                           })}
                        </AccordionContent>
                     </AccordionItem>
                  );
               })}
            </Accordion>
         </SheetContent>
      </Sheet>
   );
};

export default Sidebar;
