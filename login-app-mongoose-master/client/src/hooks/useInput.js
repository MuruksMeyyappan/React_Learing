import { useState } from "react";

// custom hook
const useInput = val => {
  const [input, setInput] = useState(val);

  const handleInputChange = e => {
    if (e.target) setInput(e.target.value);
    else setInput(e);
  };

  return [input, handleInputChange];
};

export default useInput;
