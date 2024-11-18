import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

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

export default icon;
