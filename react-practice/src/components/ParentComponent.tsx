import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function that increments the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  //const memoizedIncrementCount = useCallback(incrementCount, [count]);

  console.log("ParentComponent rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Click me</button>

      {/* ChildComponent receives the memoized callback function */}
      <ChildComponent />
    </div>
  );
};
