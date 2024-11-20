import { useState } from "react";
import icon from "../utils/helper";

const Location = ({ location }) => {
  const [isMetric, setIsMetric] = useState(false);
  const { name, imperialTemp, metricTemp, forecast } = location;

  return (
    <div className="card">
      <h3 className="card-title">{name}'s Weather</h3>
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
          The weather in {name} is{" "}
          {isMetric ? `${metricTemp}°C ` : `${imperialTemp}°F`}
        </h4>
        <h5 className="card-text">It is {forecast} today</h5>
      </div>
      <button onClick={() => setIsMetric(!isMetric)}>
        To {isMetric ? "°F" : "°C"}
      </button>
    </div>
  );
};

export default Location;
