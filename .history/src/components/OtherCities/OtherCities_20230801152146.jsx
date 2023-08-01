import styled from "styled-components";
import { Stack,Typography } from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 30px 35px;
`;

function OtherCities() {
  return (
    <OtherCitiesContainer spacing={1}>
      <Typography variant="h6" >Other Cities</Typography>
      <City/>
      <City/>
      <City/>
    </OtherCitiesContainer>
  );
}
export default OtherCities;
