import MarkdownToHTML from "@/actions/markdown-to-html";
import ApiBox from "./ui/api-box";
import TestApi from "./ui/test-api";

interface ApiUrlProps {
  title: string;
  url: string;
  variant: "public" | "admin";
  description: string;
  parameters: {
    name: string;
    type: string;
    default: number | string | undefined;
  }[];
}

const ApiUrl: React.FC<ApiUrlProps> = ({
  title,
  url,
  variant,
  description,
  parameters,
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-6 px-2 gap-6">
      <div className="w-full">
        <ApiBox
          title={title}
          url={url}
          variant={variant}
          description={MarkdownToHTML(description)}
          parameters={parameters}
        />
      </div>
      <div className="border w-0" />
      <div className="w-full flex flex-col gap-1">
        <TestApi />
      </div>
    </div>
  );
};

export default ApiUrl;
