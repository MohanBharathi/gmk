import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const memoCalculation = useMemo(() => {
    return expensiveFunction(number);
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
      <h4>calculation:{memoCalculation}</h4>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  );
}

function expensiveFunction(num) {
  for (let i = 0; i < 100000000; i++) {}
  return num;
}

export default UseMemo;
