import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 35px;

  @media (max-width: 768px) {
    padding: 20px 20px; 
  }
`;

const Title = styled(Typography)`
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

function Forecast({ dailyForecast, currentCityId }) {
  return (
    <ForeCastContainer spacing={1}>
      <Title variant="h6">FORECAST</Title>
      {dailyForecast.forEach((id) => {
        if (currentCityId === id) {
          return null;
        }
      })}
      <Weeks dailyForecast={dailyForecast} />
    </ForeCastContainer>
  );
}

export default Forecast;
