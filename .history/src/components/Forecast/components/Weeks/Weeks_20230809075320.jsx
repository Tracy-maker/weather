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
  padding-left:0.5rem;
`;
const DailyBox = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  color: #696969;
`;


const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Weeks({ dailyForecast }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [
    ...WEEK_DAYS.slice(startIndex),
    ...WEEK_DAYS.slice(0, startIndex)
  ].slice(0, 5);
  return (
    <ForeCastContainer>
      {dailyForecast.slice(0, 5).map((item, index) => (
        <DailyBox key={index} spacing={2}>
          <Typography>{forecastDays[index]}</Typography>
          <ImageIcon weather={item.weather[0]} />
          <FutureTemperature variant="body1">{`${parseFloat(item.main.temp).toFixed(0)}°`}</FutureTemperature>
        </DailyBox>
      ))}
    </ForeCastContainer>
  );
}

export default Weeks;
