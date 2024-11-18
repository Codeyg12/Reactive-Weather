import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

function WeatherCard({ city, temp, forecast }) {
  const icon = (forecast) => {
    forecast = forecast.toLowerCase();
    switch (forecast) {
      case "sunny":
        return sunny;
      case "rainy":
        return rainy;
      case "partly cloudy":
        return partlyCloudy;
      case "cloudy":
      case "snowy":
        return cloudy;
      default:
        break;
    }
  };
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
        <h5 className="card-text">{temp}</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
