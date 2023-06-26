import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [data, setData] = useState([]);

  const globalStates = {
    data,
    setData,
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
