import styled from "styled-components";
import { Box,Typography } from "@mui/material";

const OtherCitiesContainer = styled(Box)`
  padding: 15px 50px;
`;

function OtherCities() {
  return (
    <OtherCitiesContainer>
      <Typography variant="h6" >Other Cities</Typography>
    </OtherCitiesContainer>
  );
}
export default OtherCities;
