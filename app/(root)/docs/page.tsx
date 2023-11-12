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
      placeholder: string;
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
            placeholder: "eg. 0",
         },
         {
            name: "limit",
            type: "number",
            default: 10,
            placeholder: "eg. 10",
         },
         {
            name: "equipment",
            type: "text",
            default: undefined,
            placeholder: "eg. kettlebell",
         },
         {
            name: "bodypart",
            type: "text",
            default: undefined,
            placeholder: "eg. waist",
         },
         {
            name: "targetMuscle",
            type: "text",
            default: undefined,
            placeholder: "eg. abs",
         },
         {
            name: "search",
            type: "text",
            default: undefined,
            placeholder: "eg. curl",
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
            placeholder: "eg. 2567",
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

const routineUrls: ApiUrlProps[] = [
   {
      title: "GET",
      variant: "public",
      url: "/api/routine",
      description: `#Description\nMaking a **GET** request on this link will return an array of all the routines which match the assigned filters.\n# SearchParams\n
      - **page**: For page number\n
      - **limit**: For number of workout routines inside a page\n
      - **equipment**: For workout routines  performed using a specific equipment\n
      - **category**: For workout routines in a category, you can call the categories api for all the bodyparts\n
      - **gender**: For workout routines of a specific gender\n
      - **duration**: For workout routines with specific duration (eg:- 4 weeks)
      - **level**: For workout routines for people of different levels (eg:- beginner, intermediate)
      - **days&lowbar;per&lowbar;week** - For workout routines with specific days per week
      - **main&lowbar;goal** - For workout routines with a specific main goal.
      - **workout&lowbar;type** - For workout routines with a specific type
      - **search**: For implementing search functionality in the app.`,
      type: "search-param",
      parameters: [
         {
            name: "page",
            type: "number",
            default: 0,
            placeholder: "eg. 0",
         },
         {
            name: "limit",
            type: "number",
            default: 10,
            placeholder: "eg. 10",
         },
         {
            name: "equipment",
            type: "text",
            default: undefined,
            placeholder: "eg. barbell",
         },
         {
            name: "category",
            type: "text",
            default: undefined,
            placeholder: "eg. cardio",
         },
         {
            name: "gender",
            type: "text",
            default: undefined,
            placeholder: "eg. male",
         },
         {
            name: "duration",
            type: "text",
            default: undefined,
            placeholder: "eg. 4 weeks",
         },
         {
            name: "level",
            type: "text",
            default: undefined,
            placeholder: "eg. beginner",
         },
         {
            name: "day_per_week",
            type: "number",
            default: undefined,
            placeholder: "eg. 4",
         },
         {
            name: "main_goal",
            type: "number",
            default: undefined,
            placeholder: "eg. Lose Fat",
         },
         {
            name: "workout_type",
            type: "number",
            default: undefined,
            placeholder: "eg. split",
         },
         {
            name: "search",
            type: "text",
            default: undefined,
            placeholder: "",
         },
      ],
   },
   {
      title: "GET",
      variant: "public",
      url: "/api/routine/<routineId>",
      description: `#Description\nMaking a **GET** request on this link will return an routine which corresponds to the id.\n# Params\n- **routineId**: For a specific routine with this`,
      type: "route",
      parameters: [
         {
            name: "routineId",
            type: "number",
            default: undefined,
            placeholder: "eg. 46",
         },
      ],
   },
];

const routineFilterUrls: ApiUrlProps[] = [
   {
      title: "GET",
      variant: "public",
      url: "/api/routine/filter",
      description: `#Description\nMaking a **GET** request on this link will return an object of all the routine fitlers that may be used to filter the data from the routines api.`,
   },
];

const posterUrls: ApiUrlProps[] = [
   {
      title: "GET",
      variant: "public",
      url: "/api/poster",
      description: `#Description\nMaking a **GET** request on this link will return an array of all the posters which match the assigned filters.\n# SearchParams\n
      - **page**: For page number\n
      - **limit**: For number of workout posters inside a page\n
      - **type**: For different types of posters (choose from 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;["strength", "cardio", "Hiit", "combat", "stretching", "yoga", "wellness"]
         )\n
      - **focus**: For focus of the poster (choose from 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;["fullbody", "upperbody", "lowerbody", "abs"]
         )\n
      - **difficulty**: For workouts with different difficulties(choose from 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;["light", "easy", "normal", "hard", "advanced"]
         )\n
      - **search**: For implementing search functionality in the app.`,
      type: "search-param",
      parameters: [
         {
            name: "page",
            type: "number",
            default: 0,
            placeholder: "eg. 0",
         },
         {
            name: "limit",
            type: "number",
            default: 10,
            placeholder: "eg. 10",
         },
         {
            name: "type",
            type: "text",
            default: undefined,
            placeholder: "eg. Strength",
         },
         {
            name: "focus",
            type: "text",
            default: undefined,
            placeholder: "eg. Fullbody",
         },
         {
            name: "difficulty",
            type: "text",
            default: undefined,
            placeholder: "eg. normal",
         },
         {
            name: "search",
            type: "text",
            default: undefined,
            placeholder: "",
         },
      ],
   },
   {
      title: "GET",
      variant: "public",
      url: "/api/poster/<posterId>",
      description: `#Description\nMaking a **GET** request on this link will return an poster which corresponds to the id.\n# Params\n- **posterId**: For a specific poster with this`,
      type: "route",
      parameters: [
         {
            name: "posterId",
            type: "text",
            default: undefined,
            placeholder: "eg. mean-abs-workout",
         },
      ],
   },
];

const DocsPage = () => {
   return (
      <div className="container">
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
         <Heading
            title="Routines"
            description="API calls for retrieving the list of all Routines from the database"
         />
         {routineUrls.map((api) => (
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
            title="Routine-Filters"
            description="API calls for retrieving the list of routine-categories from the database"
         />
         {routineFilterUrls.map((api) => (
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
            title="Posters"
            description="API calls for retrieving the list of all Posters from the database"
         />
         {posterUrls.map((api) => (
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
