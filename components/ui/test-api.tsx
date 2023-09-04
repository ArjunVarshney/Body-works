import { Button } from "./button";
import ResponseBox from "./response-box";
import SubHeading from "./sub-heading";

const TestApi = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center pr-1">
        <Button variant="destructive" size="sm">
          Run
        </Button>
        <SubHeading title="Test Api" />
      </div>
      <ResponseBox />
    </>
  );
};

export default TestApi;
