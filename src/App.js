import City from "./components/Weather";
import OtherCities from "./components/OtherCities";
import Forecast from "./components/Forecast";
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
