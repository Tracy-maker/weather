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
  const forecastDays = WEEK_DAYS.slice(startIndex, startIndex + 5);

  console.log(forecastDays);
  
  // ... (rest of your code)
}

  return (
    <ForeCastContainer>
      <DailyBox spacing={2}>
        <Typography>MON</Typography>
        <ImageIcon weather={weather}/>
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>TUE</Typography>
        <ImageIcon weather={weather}/>
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>WED</Typography>
        <ImageIcon weather={weather}/>
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>THU</Typography>
        <ImageIcon weather={weather}/>
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>FRI</Typography>
        <ImageIcon weather={weather}/>
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
    </ForeCastContainer>
  );
}
export default Weeks;
