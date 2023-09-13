import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 20px 37px;

  @media (max-width: 768px) {
    padding: 20px 20px; /* Adjust padding for smaller screens */
  }
`;

const Title = styled(Typography)`
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

function Forecast({ dailyForecast, currentCityId }) {
  return (
    <ForeCastContainer>
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
