import { Dumbbell } from "lucide-react";
import Link from "next/link";
import MainNav from "./main-nav";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="px-4 h-16 flex items-center border-b">
      <div className="flex items-center w-full">
        <div className="flex gap-x-6">
          <Link
            href={"/"}
            className="text-md font-semibold flex gap-x-2 py-2 px-2 items-center"
          >
            <div className="bg-black dark:bg-white p-1.5 rounded-lg">
              <Dumbbell size={20} className="text-white dark:text-black" />
            </div>
            BodyWorks
          </Link>
          <MainNav />
        </div>
        <div className="space-x-6 ml-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
