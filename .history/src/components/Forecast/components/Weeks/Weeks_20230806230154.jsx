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

function Weeks() {
  return (
    <ForeCastContainer>
      <Stack spacing={3}>
      <Typography>MON</Typography>
      <ImageIcon/>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack spacing={3}>
      <Typography>TUE</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack spacing={3}>
      <Typography>WED</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack spacing={3}>
      <Typography>THU</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack spacing={3}>
      <Typography>FRI</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
    </ForeCastContainer>
  );
}
export default Weeks;
