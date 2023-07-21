import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";

const Temperature = styled(Box)`
  font-size: 5rem;
`;

const Condition = styled(Box)`

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
