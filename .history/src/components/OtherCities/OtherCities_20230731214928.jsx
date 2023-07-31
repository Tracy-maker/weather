import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Box)`
  padding: 10px 45px;
`;

function OtherCities() {
  return (
    <OtherCitiesContainer>
      <Typography variant="h6">Other Cities</Typography>
      <City />
      <City />
      <City />
    </OtherCitiesContainer>
  );
}
export default OtherCities;
