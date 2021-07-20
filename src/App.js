import React from "react";
import Weather from "./Weather";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bradford" />

        <footer>
          This project was coded by Jade Knowles and is
          <a href="https://github.com/codewordjade/weather-react">
            open-sourced on Github
          </a>{" "}
          and{""}
          <a href="https://clever-galileo-0aa257.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
