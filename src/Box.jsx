import { BoxOnClickHandler } from "./App";

export function Box({ order, children }) {
  const handleClick = (e) => BoxOnClickHandler(e, order);

  return (
    <>
      <div
        className="hover:bg-blue-500 border border-blue-900 rounded-sm"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
}
