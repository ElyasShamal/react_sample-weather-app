import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Clock from "./Clock";

function App() {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  });
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Boston");

  useEffect(() => {
    const fetchWeather = () =>
      fetch(`https://goweather.herokuapp.com/weather/${city}`).then((res) =>
        res.json()
      );

    async function startFetching() {
      const weatherData = await fetchWeather();

      setWeather(weatherData);
    }
    startFetching();
  }, [city]);

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

      <dialog ref={dialogRef}>
        <header>
          <h1>Change City</h1>
          <button
            className="button-btn"
            onClick={() => dialogRef.current.close()}
          >
            X
          </button>
        </header>
        <label>Change City </label>
        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option>Chigago</option>
          <option>Boston</option>
          <option>Miami</option>
          <option>North carolina</option>
        </select>
      </dialog>
    </div>
  );
}

export default App;
