import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import ImageIcon from "./path-to-your-ImageIcon-component"; // Import your ImageIcon component

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
`;

const DailyBox = styled(Stack)`
  /* Define your styles for DailyBox */
`;

const FutureTemperature = styled(Typography)`
  /* Define your styles for FutureTemperature */
`;

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Weeks({ dailyForecast }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = dayInAWeek;
  const forecastDays = WEEK_DAYS.slice(startIndex, startIndex + 5);

  return (
    <ForeCastContainer>
      {dailyForecast.slice(1, 6).map((item, index) => (
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
