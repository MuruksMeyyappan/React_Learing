import { useState } from "react";

// custom hook
const useCheckbox = val => {
  const [input, setInput] = useState(val);

  const handleCheckboxChange = e => {
    setInput(e.target.checked);
  };

  return [input, handleCheckboxChange];
};

export default useCheckbox;
