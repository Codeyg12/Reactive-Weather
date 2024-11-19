import { useEffect, useState } from "react";
import icon from "../utils/helper";

const Location = ({ data, location }) => {
  const { name, temp, forecast } = location;

  return (
    <div className="card">
      <h3 className="card-title">Your Location's Weather</h3>
      <div className="img-container">
        <img
          className="card-img-top"
          src={icon(forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">
          The weather in {name} is {temp}°F
        </h4>
        <h5 className="card-text">It is {forecast} today</h5>
      </div>
    </div>
  );
};

export default Location;
