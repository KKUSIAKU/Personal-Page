import React from "react";

// should not have child
// should render a single p component
// should contain only text 
// props text require

const Text = ({text}) => {
  return (
    <p>{text}</p>
  );
};

export default Text;