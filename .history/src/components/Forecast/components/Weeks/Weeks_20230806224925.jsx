import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

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
      <Stack>
      <Typography>MON</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack>
      <Typography>TUE</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack>
      <Typography>WED</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack>
      <Typography>THU</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
      <Stack>
      <Typography>FRI</Typography>
      <FutureTemperature variant="body1">19゜</FutureTemperature>
      </Stack>
    </ForeCastContainer>
  );
}
export default Weeks;
