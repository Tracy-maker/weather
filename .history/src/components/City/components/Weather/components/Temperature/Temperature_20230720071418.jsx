import { styled } from "styled-components";
import { Box } from "@mui/material";

const TemperatureNumber = styled(Box)`
  font-size: 5rem;
`;

function Temperature() {
  return <TemperatureNumber>23.66゜</TemperatureNumber>;
}
export default Temperature;
