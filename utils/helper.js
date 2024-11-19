import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import temp from '../assets/Temp.svg'
import snowy from '../assets/Snowy.svg'

const icon = (forecast) => {
  forecast = forecast.toLowerCase();
  switch (true) {
    case forecast.includes("sunny"):
      return sunny;
    case forecast.includes("rainy"):
      return rainy;
    case forecast.includes("partly cloudy"):
      return partlyCloudy;
    case forecast.includes("cloudy"):
      return cloudy;
      case forecast.includes("snowy"):
        return snowy;
    default:
      return temp;
  }
};

export default icon;
