import React, { useState, useCallback } from "react";
import PrintItems from "./PrintItems";

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={cssStyle}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
      ></input>
      <PrintItems calculateTable={calculateTable} />
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}

export default UseCallback;
