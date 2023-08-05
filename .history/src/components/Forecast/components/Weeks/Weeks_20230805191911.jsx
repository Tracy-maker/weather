import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const ForeCastContainer = styled(Box)`
  text-align: center;
  display: flex;
`;

const FutureTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

function Weeks() {
  return (
    <ForeCastContainer>
      <Typography>MON</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      <Typography>TUE</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      <Typography>WED</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      <Typography>THU</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      <Typography>FRI</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
    </ForeCastContainer>
  );
}
export default Weeks;
