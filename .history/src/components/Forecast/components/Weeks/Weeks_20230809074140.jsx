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


const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Weeks({ dailyForecast }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = dayInAWeek;
  const forecastDays = WEEK_DAYS.slice(startIndex, startIndex + 5);

  return (
    <ForeCastContainer>
      {dailyForecast.slice(2, 6).map((item, index) => (
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
