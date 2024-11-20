import { useState } from "react";

const Form = ({ setLocation }) => {
  const [typedLocation, setTypedLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    findCityCode(typedLocation);
    setTypedLocation("");
  };

  const findCityCode = async (location) => {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${location}`
    );
    const data = await response.json();
    const city = data[0].LocalizedName;

    getWeather(data[0].Key, city);
  };

  const getWeather = async (cityCode, city) => {
    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    const weather = {
      name: city,
      imperialTemp: data[0].Temperature.Imperial.Value,
      metricTemp: data[0].Temperature.Metric.Value,
      forecast: data[0].WeatherText,
    };
    setLocation(weather);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:&nbsp;
          <input
            type="text"
            value={typedLocation}
            onChange={(e) => setTypedLocation(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
