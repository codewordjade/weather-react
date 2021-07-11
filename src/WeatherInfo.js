import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
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
  );
}
