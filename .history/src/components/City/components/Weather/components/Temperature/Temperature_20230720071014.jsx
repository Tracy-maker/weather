import { styled } from "styled-components";
import { Box } from "@mui/material";

const TemperatureNumber = styled(Box)`
  font-size: 3rem;
`;

function Temperature() {
  return <TemperatureNumber>Temperature</TemperatureNumber>;
}
export default Temperature;
