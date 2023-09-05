"use client";

import ApiUrl from "@/components/api-url";
import Heading from "@/components/ui/heading";

interface ApiUrlProps {
  title: string;
  url: string;
  variant: "public" | "admin";
  description: string;
  type?: "route" | "search-param";
  parameters?: {
    name: string;
    type: string;
    default: number | string | undefined;
  }[];
}

const exerciseUrls: ApiUrlProps[] = [
  {
    title: "GET",
    variant: "public",
    url: "/api/exercises",
    description: `#Description\nMaking a **GET** request on this link will return an array of all the exercises which match the assigned filters.\n# SearchParams\n- **page**: For page number\n - **limit**: For number of exercises inside a page\n - **equipment**: For exercises  performed using a specific equipment, you can call the equipments api for all the equipments\n- **bodypart**: For execises performed with a specific bodypart, you can call the bodyparts api for all the bodyparts\n- **targetmuscle**: For exercises of a specific muscle, you can call the targetmuscles api for all the targetmuscles\n- **search**: For implementing search functionality in the app\n**Note**: Search will be done on the filtered exercises using the _equipment_, _bodypart_, _targetmuscle_\n#Response Type\n
    **Array of objects** containing the following entries:
    - **name**: string;
    - **title**: string;
    - **target**: string;
    - **"muscles worked"**: string;
    - **bodyPart**: string;
    - **equipment**: string;
    - **id**: string;
    - **blog**: string;
    - **images**: string[];
    - **gifUrl**: string;
    - **videos**: string[];
    - **keywords**: string[];`,
    type: "search-param",
    parameters: [
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
    ],
  },
  {
    title: "GET",
    variant: "public",
    url: "/api/exercises/<exerciseId>",
    description: `#Description\nMaking a **GET** request on this link will return an exercise which corresponds to the id.\n# Params\n- **exerciseId**: For a specific exercise with this id\n#Response Type\n
    **Object** containing the following entries:
    - **name**: string;
    - **title**: string;
    - **target**: string;
    - **"muscles worked"**: string;
    - **bodyPart**: string;
    - **equipment**: string;
    - **id**: string;
    - **blog**: string;
    - **images**: string[];
    - **gifUrl**: string;
    - **videos**: string[];
    - **keywords**: string[];`,
    type: "route",
    parameters: [
      {
        name: "exerciseId",
        type: "number",
        default: undefined,
      },
    ],
  },
];

const equipmentUrls: ApiUrlProps[] = [
  {
    title: "GET",
    variant: "public",
    url: "/api/equipments",
    description: `#Description\nMaking a **GET** request on this link will return an array of all the equipments that may be used to filter the data from the exercise api.\n#Response Type\n
    **Array of objects** containing the following entries:
    - **exerciseCount**: number
    - **equipment**: string`,
  },
];

const targetmuscleUrls: ApiUrlProps[] = [
  {
    title: "GET",
    variant: "public",
    url: "/api/targetmuscles",
    description: `#Description\nMaking a **GET** request on this link will return an array of all the target muscles that may be used to filter the data from the exercise api.\n#Response Type\n
    **Array of objects** containing the following entries:
    - **exerciseCount**: number
    - **targetMuscle**: string`,
  },
];

const bodypartUrls: ApiUrlProps[] = [
  {
    title: "GET",
    variant: "public",
    url: "/api/bodyparts",
    description: `#Description\nMaking a **GET** request on this link will return an array of all the body parts that may be used to filter the data from the exercise api.\n#Response Type\n
    **Array of objects** containing the following entries:
    - **exerciseCount**: number
    - **bodyPart**: string`,
  },
];

const DocsPage = () => {
  return (
    <div className="p-6 max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <Heading
        title="Exercises"
        description="API calls for retrieving exercises from the database"
      />
      {exerciseUrls.map((api) => (
        <ApiUrl
          key={api.url}
          title={api.title}
          variant={api.variant}
          url={api.url}
          description={api.description}
          type={api.type}
          parameters={api.parameters}
        />
      ))}
      <Heading
        title="Equipments"
        description="API calls for retrieving the list of equipments from the database"
      />
      {equipmentUrls.map((api) => (
        <ApiUrl
          key={api.url}
          title={api.title}
          variant={api.variant}
          url={api.url}
          description={api.description}
          type={api.type}
          parameters={api.parameters}
        />
      ))}
      <Heading
        title="Target muscles"
        description="API calls for retrieving the list of targetmuscles from the database"
      />
      {targetmuscleUrls.map((api) => (
        <ApiUrl
          key={api.url}
          title={api.title}
          variant={api.variant}
          url={api.url}
          description={api.description}
          type={api.type}
          parameters={api.parameters}
        />
      ))}
      <Heading
        title="Body Parts"
        description="API calls for retrieving the list of targetmuscles from the database"
      />
      {bodypartUrls.map((api) => (
        <ApiUrl
          key={api.url}
          title={api.title}
          variant={api.variant}
          url={api.url}
          description={api.description}
          type={api.type}
          parameters={api.parameters}
        />
      ))}
    </div>
  );
};

export default DocsPage;
