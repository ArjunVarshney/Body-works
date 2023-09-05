import { MouseEventHandler } from "react";
import { Button } from "./button";
import ResponseBox from "./response-box";
import SubHeading from "./sub-heading";

interface TextApiProps {
  response: string;
  onRun: MouseEventHandler<HTMLButtonElement>;
}

const TestApi: React.FC<TextApiProps> = ({ onRun, response }) => {
  return (
    <div className="relative h-full rounded-b-lg overflow-hidden">
      <div className="flex justify-between items-center pr-1">
        <Button onClick={onRun} variant="destructive" size="sm">
          Run
        </Button>
        <SubHeading title="Test Api" />
      </div>
      <ResponseBox response={response} />
    </div>
  );
};

export default TestApi;
