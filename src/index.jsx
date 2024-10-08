import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Calculator from "./Calculator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
