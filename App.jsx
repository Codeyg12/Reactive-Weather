import React, { useState } from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("Rio de Janeiro");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form setLocation={setLocation} />
      <div className="app">
        <Location data={cities} location={location} />
        {/* Render components here */}
        {cities.map((city, index) => (
          <WeatherCard
            key={index}
            city={city.city}
            temp={city.temperature}
            forecast={city.forecast}
          />
        ))}
      </div>
    </>
  );
}

export default App;
