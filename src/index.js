import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather defaultCity="Bradford" />
  </StrictMode>,
  rootElement
);
