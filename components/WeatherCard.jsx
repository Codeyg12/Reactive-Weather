import React from "react";
import icon from "../utils/helper";

function WeatherCard({ city, temp, forecast }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={icon(forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city}</h3>
        <h5 className="card-text">{temp}°F</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
