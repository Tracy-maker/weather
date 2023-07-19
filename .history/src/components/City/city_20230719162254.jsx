import Weather from "./components/Weather/Weather";
import Name from "./components/Name/Name";
import { styled } from "styled-components";
import { Box, Container } from "@mui/material";
import p2 from "../../assets/background2.jpg";

const CardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 64px 96px;
  background-image: url(${p2});
  background-size: cover;
  color: white;
  position: relative;
`;

const Strip =styled(Box)`
height:18px;
background-color:rgba(0,0,0,.5);
`;


function City() {
  return (
    <CardContainer>
      <Weather />
      <Name />
      <Strip />
    </CardContainer>
  );
}
export default City;
