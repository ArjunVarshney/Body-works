import { cn } from "@/lib/utils";

interface SectionHeadingProps {
   title: string;
   className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
   title,
   className,
}) => {
   return (
      <div className={cn("px-4 py-10 animate-enter duration-300", className)}>
         <h2 className="text-5xl md:text-7xl font-bold tracking-tight pb-4 inline underline">
            {title}
         </h2>
      </div>
   );
};

export default SectionHeading;
