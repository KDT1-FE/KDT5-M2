import React from "react";
import { createRoot } from "react-dom/client";
import APP from "./APP.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(<APP />);
