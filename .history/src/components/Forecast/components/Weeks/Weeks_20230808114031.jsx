import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import ImageIcon from "../ImageIcons/ImageIcon";

const ForeCastContainer = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FutureTemperature = styled(Typography)`
  padding-left:0.8rem;
`;
const DailyBox = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  color: #696969;
`;

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

function Weeks({ weather }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;

  // Use slice to get only the next 5 days' forecasts
  const forecastDays = weather.list.slice(0, 5).map((forecast) => {
    const date = new Date(forecast.dt_txt);
    return WEEK_DAYS[(date.getDay() + startIndex) % 7];
  });

  return (
    <ForeCastContainer>
      {forecastDays.map((day, index) => (
        <DailyBox key={index} spacing={2}>
          <Typography>{day}</Typography>
          <ImageIcon weather={weather.list[index].weather[0]} />
          <FutureTemperature variant="body1">{weather.list[index].main.temp}°</FutureTemperature>
        </DailyBox>
      ))}
    </ForeCastContainer>
  );
}

export default Weeks;