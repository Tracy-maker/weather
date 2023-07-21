import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";

const WindContainer = styled(Box)`
  text-align: center;
  opacity: 0.7;
`;

const Value = styled(Typography)`
  margin-top: 16px;
`;

function Wind() {
  return (
    <WindContainer>
      <Typography variant="h6">Wind</Typography>
      <Value>58%</Value>
    </WindContainer>
  );
}
export default Wind;
