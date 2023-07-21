import Details from "./components/Details/Details";
import Temperature from "./components/Temperature/Temperature";
import Condition from "./components/Condition/Condition";



const Temperature = styled(Box)`
  font-size: 5rem;
`;
function Weather() {
  return (
    <div>
      <Temperature>23.66゜</Temperature>
      <Condition />
      <Details />
    </div>
  );
}
export default Weather;
