import styled from "styled-components";
import { Stack, Typography} from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 30px 35px;
`;
const Title = styled(Typography)`
  text-align: center;
`;

const Cities=[
  {id:0,name:'Sydeny',temperature:'17'},
  {id:1,name:'Brisbane',temperature:'20'},
  {id:2,name:'Perth',temperature:'20'}
]

function OtherCities() {
  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
     {Cities.map(({id,name,temperature})=>(<City key={id} name={name} temperature={temperature}))}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
