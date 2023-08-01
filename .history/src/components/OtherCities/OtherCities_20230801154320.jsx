import styled from "styled-components";
import { Stack, Typography} from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 30px 35px;
`;
const Title = styled(Typography)`
  text-align: center;
  <letter-spacing:50></letter-spacing:50>px;
`;

function OtherCities() {
  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">Other Cities</Title>
      <City />
      <City />
      <City />
    </OtherCitiesContainer>
  );
}
export default OtherCities;
