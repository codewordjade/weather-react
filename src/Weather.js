import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
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
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong>{Math.round(weatherData.temperature)}</strong>
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
                    Humidity: <span>{weatherData.humidity}</span> %
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span> mph
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
