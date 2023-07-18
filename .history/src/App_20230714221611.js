import City from "./components/City/city";
import OtherCities from "./components/OtherCities/otherCities";
import Forecast from "./components/Forecast/forecast";
const App = () => (
  <div>
    <City />
    <div>
      <OtherCities />
      <Forecast />
    </div>
  </div>
);

export default App;
