//import React from "react";
import { useState, createContext } from 'react';

const context = createContext('');

export function MyContext({ children }) {
  const [value, setValue] = useState('tt4520988');
  return (
    <context.Provider value={{ value, setValue }}>{children}</context.Provider>
  );
}

export default context;
