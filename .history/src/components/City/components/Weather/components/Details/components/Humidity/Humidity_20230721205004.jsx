import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";

const HumidityContainer = styled(Box)`
  text-align: center;
  opacity: 0.7;
`;

function Humidity() {
  return (
    <HumidityContainer>
      <Typography variant="h6" component="h6">
        Humidity
      </Typography>
    </HumidityContainer>
  );
}
export default Humidity;
