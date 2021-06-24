import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type a city name"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-light"
                  />
                  <button className="btn btn-light">current</button>
                </div>
              </div>
            </form>
            <h1>Leeds</h1>
            <ul>
              <li>
                Last updated <span>Today</span>
              </li>
              <li>description</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src="#" alt="#" className="float-left" />
                  <div className="float-left">
                    <strong>{temperature}</strong>
                    <span className="units">
                      <a href="/" className="active">
                        °C
                      </a>{" "}
                      |<a href="/">°F</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span>23</span> %
                  </li>
                  <li>
                    Wind: <span>12</span> mph
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/codewordjade/Vanilla-weather-app"
              target="blank"
            >
              Open-Source code
            </a>
            by Jade Knowles
          </small>
        </div>
      </div>
    );
  } else {
    const apiKey = "ebca13eec4bcc9a4c9201fa605468205";
    let city = "Leeds";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
