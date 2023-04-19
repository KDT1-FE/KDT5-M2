import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/styles/GlobalStyle";
import theme from "./lib/styles/colors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
