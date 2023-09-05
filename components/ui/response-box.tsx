import JSONtoHTML from "@/actions/json-to-html";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

interface ResponseBoxProps {
  response: string;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  return (
    <div
      className={cn(
        "text-white text-xs w-full min-h-[175px] absolute top-12 border bottom-0 overflow-auto bg-gray-950 rounded-lg p-3",
        response ? "" : "text-opacity-80",
        font.className
      )}
      dangerouslySetInnerHTML={{
        __html: JSONtoHTML(response) || "Click run to try...",
      }}
    ></div>
  );
};

export default ResponseBox;
