import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
  @media screen and (min-width: 1024px){
    padding: 20px 35px;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const Title = styled(Typography)`
  padding-bottom: 15px;
`;

function Forecast({ dailyForecast, currentCityId }) {
  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      {dailyForecast.forEach(( id ) => {
        if (currentCityId === id) {
          return null; 
        }
      })}
      <Weeks dailyForecast={dailyForecast} />
    </ForeCastContainer>
  );
}

export default Forecast;
