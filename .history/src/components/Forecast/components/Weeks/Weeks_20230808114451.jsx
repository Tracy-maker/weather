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

  // Check if weather.list exists and is an array before using slice
  const forecastDays = Array.isArray(weather.list)
    ? weather.list.slice(0, 5).map((forecast) => {
        const date = new Date(forecast.dt_txt);
        return WEEK_DAYS[(date.getDay() + startIndex) % 7];
      })
    : [];

  return (
    <ForeCastContainer>
      {forecastDays.map((day, index) => {
        const forecast = weather.list[index];
        return (
          <DailyBox key={index} spacing={2}>
            <Typography>{day}</Typography>
            <ImageIcon weather={forecast.weather[0]} />
            <FutureTemperature variant="body1">{forecast.main.temp}°</FutureTemperature>
          </DailyBox>
        );
      })}
    </ForeCastContainer>
  );
}

export default Weeks;
