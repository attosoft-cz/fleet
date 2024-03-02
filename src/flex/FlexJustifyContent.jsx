import { useState } from "react";

const FlexJustifyContent = () => {
  const [itemCount, setItemCount] = useState(3);

  const addItem = () => {
    console.log(itemCount);
    setItemCount((x) => x + 1);
  };

  return (
    <div className="bg-pink-600">
      <nav>
        <ul className="flex justify-center bg-green-500">
          {Array.from({ length: itemCount }, (_, i) => (
            <li key={i}>Item {i + 1}</li>
          ))}
        </ul>
      </nav>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default FlexJustifyContent;
