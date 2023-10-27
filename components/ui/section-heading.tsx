interface SectionHeadingProps {
   title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
   return (
      <div className="p-2">
            <h2 className="text-7xl font-bold tracking-tight">{title}</h2>
      </div>
   );
};

export default SectionHeading;
