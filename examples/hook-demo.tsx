import React, { useState } from "react";
import { BarLoader } from "../src";
import { useLoader } from "../src/useLoader";

function Current() {
  // 2nd params includes most of the existing props minus the ones extracted away, like color/loading
  const { Loader, toggleLoader, changeColor } = useLoader("BarLoader", { height: 20, width: 20 });

  return (
    <>
      <Loader />
      <button onClick={toggleLoader}>Toggle</button>
      <input onChange={(event) => changeColor(event.target.value)}></input>
    </>
  );
}

function Proposal() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState<string>();

  return (
    <>
      <BarLoader color={color} loading={loading} />
      <button onClick={() => setLoading(!loading)}>Toggle</button>
      <input onChange={(event) => setColor(event.target.value)}></input>
    </>
  );
}
