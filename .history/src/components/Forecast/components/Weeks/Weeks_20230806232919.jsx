import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import ImageIcon from "../ImageIcons/ImageIcon";


const FutureTemperature = styled(Typography)`
  padding-left:14px;
`;
const DailyBox = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  color: #696969;
`;

function Weeks() {
  return (
    
      <DailyBox spacing={2}>
        <Typography>MON</Typography>
        <ImageIcon />
        <FutureTemperature variant="h6">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>TUE</Typography>
        <ImageIcon />
        <FutureTemperature variant="h6">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>WED</Typography>
        <ImageIcon />
        <FutureTemperature variant="h6">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>THU</Typography>
        <ImageIcon />
        <FutureTemperature variant="h6">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={2}>
        <Typography>FRI</Typography>
        <ImageIcon />
        <FutureTemperature variant="h6">19゜</FutureTemperature>
      </DailyBox>
   
  );
}
export default Weeks;
