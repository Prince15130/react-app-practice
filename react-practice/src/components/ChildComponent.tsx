// ChildComponent receives a callback function as a prop
import { memo } from "react";

/* interface ChildComponentProps {
  onButtonClick: () => void;
} */
export const ChildComponent = memo(() => {
  console.log("ChildComponent rendered");

  return (
    <div>
      <p>Child Component</p>
    </div>
  );
});
