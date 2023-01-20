import React from "react";
import UseFetch from "./UseFetch";

function CustomHooks() {
  const data = UseFetch("https://jsonplaceholder.typicode.com/users");
  console.log(data, 'dat')
  return (
    <div>
      {data.map((res) => {
        return (
          <h4 key={res.id}>
            {res.id}.
            {res.name}
          </h4>
        );
      })}
    </div>
  );
}

export default CustomHooks;
