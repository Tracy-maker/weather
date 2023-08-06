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
  display: flex;
  color: #696969;
`;
const DailyBox = styled(Stack)`
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

function Weeks() {
  return (
    <ForeCastContainer>
      <DailyBox spacing={3}>
        <Typography>MON</Typography>
        <ImageIcon />
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={3}>
        <Typography>TUE</Typography>
        <ImageIcon />
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={3}>
        <Typography>WED</Typography>
        <ImageIcon />
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={3}>
        <Typography>THU</Typography>
        <ImageIcon />
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
      <DailyBox spacing={3}>
        <Typography>FRI</Typography>
        <ImageIcon />
        <FutureTemperature variant="body1">19゜</FutureTemperature>
      </DailyBox>
    </ForeCastContainer>
  );
}
export default Weeks;
