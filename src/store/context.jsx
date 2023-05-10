import React from "react";
import { createContext, useState } from "react";

const PageContext = createContext();

export function PageContextProvider({children}) {
  const [value, setValue] = useState('tt1045670');
  return (
    <PageContext.Provider value={{value, setValue}}>
      {children}
    </PageContext.Provider>
  )
}

export default PageContext;