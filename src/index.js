import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather defaultCity="Bradford" />
  </StrictMode>,
  rootElement
);
