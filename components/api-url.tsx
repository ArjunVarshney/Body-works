import MarkdownToHTML from "@/actions/markdown-to-html";
import ApiBox from "./ui/api-box";
import TestApi from "./ui/test-api";
import qs from "query-string";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useOrigin } from "@/hooks/use-origin";

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
  const origin = useOrigin();
  const [apiUrl, setUrl] = useState(url);
  const [response, setResponse] = useState("");

  useEffect(() => {
    setUrl(origin + url);
  }, [origin]);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-full mt-6 px-2 gap-6">
      <div className="w-full">
        <ApiBox
          title={title}
          url={apiUrl}
          variant={variant}
          description={MarkdownToHTML(description)}
          parameters={parameters}
          onParameterChange={(value: Record<string, any>) => {
            const queryString = qs.stringify(value);
            setUrl(url + "?" + queryString);
          }}
        />
      </div>
      {variant === "public" && (
        <>
          <div className="border w-0" />
          <div className="w-full overflow-hidden flex flex-col gap-1">
            <TestApi
              response={response}
              onRun={async () => {
                try {
                  const response = await axios.get(apiUrl);
                  setResponse(JSON.stringify(response.data));
                  toast.success("Request successfull.");
                } catch (error) {
                  toast.error("Something went wrong.");
                }
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ApiUrl;
