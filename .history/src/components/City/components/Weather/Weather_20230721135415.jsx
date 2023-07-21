import Details from "./components/Details/Details";
import Condition from "./components/Condition/Condition";
import { styled } from "styled-components";
import { Box } from "@mui/material";



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
