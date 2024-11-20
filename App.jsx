import React, { useState } from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState({
    name: "New York",
    imperialTemp: 70,
    metricTemp: 21,
    forecast: "Sunny",
  });
  const [allWeather, setAllWeather] = useState(false);

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      {!allWeather && <Form setLocation={setLocation} />}
      <div className="app">
        {/* Render components here */}
        {allWeather ? (
          <>
            {cities.map((city, index) => (
              <WeatherCard
                key={index}
                city={city.city}
                temp={city.temperature}
                forecast={city.forecast}
              />
            ))}
          </>
        ) : (
          <Location data={cities} location={location} />
        )}
      </div>
      <div className="img-container">
        <button onClick={() => setAllWeather(!allWeather)}>
          {!allWeather ? "Show" : "Hide"} All Weather
        </button>
      </div>
    </>
  );
}
{
  cities.map((city, index) => (
    <WeatherCard
      key={index}
      city={city.city}
      temp={city.temperature}
      forecast={city.forecast}
    />
  ));
}

export default App;
