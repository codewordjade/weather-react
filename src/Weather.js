import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
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
            <WeatherInfo data={weatherData} />
          </div>
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
