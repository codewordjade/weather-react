import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather />
  </StrictMode>,
  rootElement
);
