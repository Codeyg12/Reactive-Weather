import { useEffect, useState } from "react";
import icon from "../utils/helper";

const Location = ({ data, location }) => {
  const [city, setCity] = useState(location);
  const [errorMsg, setErrorMsg] = useState("Searching for locations...");

  useEffect(() => {
    const city = data.find(
      (el) => el.city.toLowerCase() === location.toLowerCase()
    );
    if (city === undefined) {
      setErrorMsg(`The weather for ${location} is not available`);
      return;
    }
    setCity(city);
    setErrorMsg(null);
  }, [location]);

  console.log(city);

  return (
    <div className="card">
      {errorMsg ? (
        <>
          <h3 className="card-title text-center">Location not found</h3>
          <div className="card-body">
            <h4 className="card-title">{errorMsg}</h4>
          </div>
        </>
      ) : (
        <>
          <h3 className="card-title">Your Location's Weather</h3>
          <div className="img-container">
            <img
              className="card-img-top"
              src={icon(city.forecast)}
              alt="Card image cap"
              id="icon"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              The weather in {city.city} is {city.temperature}
            </h4>
            <h5 className="card-text">It is {city.forecast} today</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default Location;
