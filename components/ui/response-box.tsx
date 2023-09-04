interface ResponseBoxProps {
  response?: string;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  return (
    <div className="h-full w-full min-h-[100px] lg:max-h-none max-h-[150px] overflow-y-auto border bg-gray-950 text-white rounded-lg px-2 py-1">
      ResponseBox
    </div>
  );
};

export default ResponseBox;
