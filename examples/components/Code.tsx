import * as React from "react";

const text = ["yarn add react-spinners", "npm install react-spinners --save"];

function Code() {
  const [index, setIndex] = React.useState(0);

  const updateIndex = () => {
    setIndex(index === 0 ? 1 : 0);
  };

  return <span onClick={updateIndex}>{text[index]}</span>;
}

export default Code;
