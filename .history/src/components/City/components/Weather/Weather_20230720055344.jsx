import Details from "./components/Details/Details";
import Temperature from "./components/Temperature/Temperature";
import Condition from "./components/Condition/Condition"

function Weather() {
  return <div><Temperature/><Condition/><Details/>
  </div>;
}
export default Weather;
