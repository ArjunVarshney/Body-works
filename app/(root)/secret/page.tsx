import { Button } from "@/components/ui/button";
import Link from "next/link";

const SecretPage = () => {
   return (
      <div className="p-6 max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto">
         <div className="flex justify-between space-x-5">
            <Button
               className="min-h-[80vh] w-full text-3xl border-8 border-primary"
               variant={"outline"}
            >
               <Link
                  href={
                     "https://drive.google.com/drive/folders/1sQWnV8eE8MTaYlfOGNLE_Y5fXjHHLIfA?usp=sharing"
                  }
                  target="_blank"
                  className="h-full w-full grid place-items-center"
               >
                  Tensorflow
               </Link>
            </Button>
            <Button
               className="min-h-[80vh] w-full text-3xl border-8 border-primary"
               variant={"outline"}
            >
               <Link
                  href={
                     "https://drive.google.com/drive/folders/1M_7Z2wXyCdKfe5k_PgF9oACazyKbPdIn?usp=drive_link"
                  }
                  target="_blank"
                  className="h-full w-full grid place-items-center"
               >
                  Pytorch
               </Link>
            </Button>
         </div>
      </div>
   );
};

export default SecretPage;
