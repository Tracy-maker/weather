import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
`;

const Title = styled(Typography)`
  padding-bottom: 15px;
`;

function Forecast({ dailyForecast, currentCityId }) {
  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      {dailyForecast.map(
        ({ id, weather: [weather], main: { temp: temperature } }) => {
          if (currentCityId === id) {
            return null; // Skip rendering for the current city
          }
        }
      )}
      return <Weeks key={id} dailyForecast={dailyForecast} />; 
    </ForeCastContainer>
  );
}

export default Forecast;
