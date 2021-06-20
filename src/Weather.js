import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Leeds",
    date: "Monday 08:00",
    description: "Mostly Sunny",
    temperature: 8,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 30,
    wind: 10,
  };
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
                <input type="submit" value="search" className="btn btn-light" />
                <button className="btn btn-light">current</button>
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated <span>{weatherData.date}</span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
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
            href="https://github.com/codewordjade/weather-react"
            target="blank"
          >
            Open-Source code
          </a>
          by Jade Knowles
        </small>
      </div>
    </div>
  );
}
