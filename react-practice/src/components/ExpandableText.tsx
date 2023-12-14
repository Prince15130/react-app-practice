import { useState } from "react";

interface ExpandableTextProps {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: ExpandableTextProps) => {
  const [isExpanded, setisExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  return (
    <>
      <p>{isExpanded ? children : children.slice(0, maxChars) + "..."}</p>
      <button
        className="btn  btn-secondary"
        onClick={() => setisExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
