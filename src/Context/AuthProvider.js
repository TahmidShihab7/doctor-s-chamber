import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
//create context

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // call firebase as a context
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
