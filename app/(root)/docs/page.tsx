"use client";

import ApiUrl from "@/components/api-url";
import Heading from "@/components/ui/heading";
import { useOrigin } from "@/hooks/use-origin";

const DocsPage = () => {
  const origin = useOrigin();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Heading title="Hello" description="This is some description" />
      <ApiUrl
        title="GET"
        variant="public"
        url={`${origin}/api/exercises`}
        description={`#Description\nMaking a **GET** request on this link will return an array of all the exercises.\n# SearchParams\n- **page**: For page number\n - **limit**: For number of exercises inside a page\n - **equipment**: For exercises  performed using a specific equipment\n- **bodypart**: For execises performed with a specific bodypart\n- **targetmuscle**: For exercises of a specific muscle\n- **search**: For implementing search functionality in the app\n**Note**: Search will be done on the filtered exercises using the _equipment_, _bodypart_, _targetmuscle_`}
        parameters={[
          {
            name: "page",
            type: "number",
            default: 0,
          },
          {
            name: "limit",
            type: "number",
            default: 10,
          },
          {
            name: "equipment",
            type: "text",
            default: undefined,
          },
          {
            name: "bodypart",
            type: "text",
            default: undefined,
          },
          {
            name: "targetmuscle",
            type: "text",
            default: undefined,
          },
          {
            name: "search",
            type: "text",
            default: undefined,
          },
        ]}
      />
    </div>
  );
};

export default DocsPage;
