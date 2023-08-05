import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const ForeCastContainer = styled(Box)`
  text-align: center;
`;

function Weeks() {
  return (
    <ForeCastContainer>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
      <Typography>Monday</Typography>
    </ForeCastContainer>
  );
}
export default Weeks;
