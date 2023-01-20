import React, { useState,useEffect } from "react";

function UseFetch() {
  const [responses, setResponses] = useState([]);

  useEffect((url) => {
    console.log(url , 'lll')
    fetch(url)
      .then((res) => res.json)
      .then((data) => setResponses(data));
  },[]);
  return responses;
}

export default UseFetch;
