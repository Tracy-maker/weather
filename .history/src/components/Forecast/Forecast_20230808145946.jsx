import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
`;
const Title = styled(Typography)`
  padding-bottom: 15px;
`;

const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
function Forecast({ weathers,dailyForecast}) {
  const dayInAWeek = new Date().getDay();
  const startIndex = dayInAWeek % 7;
  const forecastDays = WEEK_DAYS.slice(startIndex, startIndex + 5);

  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      <Weeks weather={weathers} forecastDays={forecastDays.dailyForecast} />
    </ForeCastContainer>
  );
}

export default Forecast;
