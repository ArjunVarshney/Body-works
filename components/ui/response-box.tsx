import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { jsontohtml } from "jsontohtml-render";

const font = Inter({ subsets: ["latin"] });

interface ResponseBoxProps {
  response: any;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  const jsontohtmlClose = (element: HTMLElement) => {
    console.log(element);
  };

  return (
    <div
      className={cn(
        "text-white text-xs w-full min-h-[150px] absolute top-12 border bottom-0 overflow-auto bg-gray-950 rounded-lg p-3",
        response ? "" : "text-opacity-80",
        font.className
      )}
      dangerouslySetInnerHTML={{
        __html: response
          ? jsontohtml(response, {
              colors: {
                background: "transparent",
              },
              space_from_left: "50px",
              line_numbers: { space_from_left: "20px" },
              retractors: { space_from_left: "30px" },
            })
          : "Click run to try...",
      }}
    ></div>
  );
};

export default ResponseBox;
