import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
