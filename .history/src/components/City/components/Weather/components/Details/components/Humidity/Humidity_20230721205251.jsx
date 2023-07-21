import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";

const HumidityContainer = styled(Box)`
  text-align: center;
  opacity: 0.7;
`;

const Value= styled(Typography)`
margin-top:16px;

`

function Humidity() {
  return (
    <HumidityContainer>
      <Typography variant="h6">
        Humidity
      </Typography>
      <Value>
       58%
      </Value>
    </HumidityContainer>
  );
}
export default Humidity;
