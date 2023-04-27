//import React from "react";
import { useState, createContext } from 'react';

const context = createContext('tt4520988');

export function MyContext({ children }) {
  const [value, setValue] = useState('');
  return (
    <context.Provider value={{ value, setValue }}>{children}</context.Provider>
  );
}

export default context;
