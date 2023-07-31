import styled from "styled-components";
import { Box } from "@mui/material";

const OtherCitiesContainer = styled(Box)`
  padding: 27px 50px;
`;

function OtherCities() {
  return <OtherCitiesContainer><Typography>OtherCities</Typography></OtherCitiesContainer>;
}
export default OtherCities;
