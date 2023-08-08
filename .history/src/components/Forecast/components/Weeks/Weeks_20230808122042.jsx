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
  margin-right: 1rem;
  color: #696969;
`;


function Weeks({ weather,temperature,forecastDays }) {


  return (
    <ForeCastContainer>
      {forecastDays.map((day, index) => (
        <DailyBox key={index} spacing={2}>
          <Typography>{day}</Typography>
          <ImageIcon weather={weather} />
          <FutureTemperature variant="body1">{`${parseFloat(temperature).toFixed(0)}゜`}</FutureTemperature>
        </DailyBox>
      ))}
    </ForeCastContainer>
  );
}

export default Weeks;
