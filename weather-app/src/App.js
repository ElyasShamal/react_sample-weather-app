import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = () =>
      fetch("https://goweather.herokuapp.com/weather/Boston").then((res) =>
        res.json()
      );

    async function startFetching() {
      const weatherData = await fetchWeather();

      setWeather(weatherData);
    }
    startFetching();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Clock with react</h1>
      </header>

      <section>
        <h1>Weather</h1>
        <p>The current temperature is {weather?.temperature} degrees</p>
      </section>

      <section>
        <h2>Clock</h2>
        <p>
          The Time is <Clock />
        </p>
      </section>

      {/* <aside className="right_side">

        <header>
          <h2>Change City</h2>
          <button>X</button>
        </header>
      </aside> */}
    </div>
  );
}

export default App;
