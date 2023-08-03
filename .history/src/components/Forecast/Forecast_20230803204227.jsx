import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Box)`
  text-align: center;
`;
const Title = styled(Typography)`
  text-align: center;
`;

const FutureTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

function Forecast() {
  return (
    <ForeCastContainer>
      <Title variant="h6">ForeCast</Title>
      <Weeks />
      <FutureTemperature variant="body1">19゜</FutureTemperature>
    </ForeCastContainer>
  );
}

export default Forecast;
