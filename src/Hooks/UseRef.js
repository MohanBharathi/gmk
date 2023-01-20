// import React, { useEffect, useRef, useState } from "react";

// function UseRef() {
//   const [name, setName] = useState("");
//   const count = useRef(0);

//   useEffect(() =>{count.current = count.current + 1});

//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)}></input>
//       <h2>Name:{name}</h2>
//       <h2>Renders:{count.current}</h2>
//     </div>
//   );
// }

// export default UseRef;

import React, { useRef } from "react";

function UseRef() {
  const inputElement = useRef();
  const handleClick = () => {
    inputElement.current.style.width = "300px";
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default UseRef;
