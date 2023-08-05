import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const ForeCastContainer = styled(Box)`
  text-align: center;
`;

const FutureTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

function Weeks() {
  return (
    <ForeCastContainer>
      <Typography>Monday</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
    </ForeCastContainer>
  );
}
export default Weeks;
