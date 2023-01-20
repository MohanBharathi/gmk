import React from "react";
import Main from "./Main";
import UserContextProvider from "./userContextProvider";


function UseContext() {
  return (
    <UserContextProvider>
        <Main />
    </UserContextProvider>
  );
}

export default UseContext;
