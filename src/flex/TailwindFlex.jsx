const TailFlex = () => {
  return (
    <div className="flex bg-pink-300">
      <div className="blue m-2 flex h-8  w-8 flex-auto text-pretty  rounded-md border border-solid bg-white p-5 py-5 text-justify text-blue-400">
        a
      </div>
    </div>
  );
};

const TailFlexCol = () => {
  return (
    <div className="flex flex-col">
      <div className="h-4 w-4 p-5">a</div>
      <div className="h-4 w-4 p-5">b</div>
      <div className="h-4 w-4 p-5">c</div>
      <div className="h-4 w-4 p-5">d</div>
    </div>
  );
};

export { TailFlexCol };

export default TailFlex;
