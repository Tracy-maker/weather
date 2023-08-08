import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
`;
const Title = styled(Typography)`
  padding-bottom: 15px;
`;


function Forecast({dailyForecast }) {
  
  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      <Weeks dailyForecast={dailyForecast}  />
    </ForeCastContainer>
  );
}

export default Forecast;
