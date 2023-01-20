import React, { createContext, useState } from "react";

export const loginContext = createContext();
function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(true);
  return <loginContext.provider value={userDetails}>{children}</loginContext.provider>;
}

export default UserContextProvider;
