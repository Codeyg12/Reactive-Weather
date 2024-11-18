import icon from "../utils/helper";

const Location = ({ data, location, setLocation }) => {
  const currentCity = () => {
    const city = data.find((el) => el.city === location);
    return city;
  };

  return (
    <div className="card">
      <h3 className="card-title">Your Location's Weather</h3>
      <div className="img-container">
        <img
          className="card-img-top"
          src={icon(currentCity().forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">
          The weather in {currentCity().city} is {currentCity().temperature}
        </h4>
        <h5 className="card-text">It is {currentCity().forecast} today</h5>
      </div>
    </div>
  );
};

export default Location;
