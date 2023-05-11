//import React from "react";
import { useState, createContext } from 'react';

const Context = createContext('');

export function MyContext({ children }) {
  const [value, setValue] = useState('tt4520988');
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
}

export default Context;
