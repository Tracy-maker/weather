import Weather from "./components/Weather/Weather";
import Name from "./components/Name/Name";
import { styled } from "styled-components";
import { Container } from "@mui/material";

const CardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 64px 96px;
  background-image:url()
`;

function City() {
  return (
    <CardContainer>
      <Weather />
      <Name />
    </CardContainer>
  );
}
export default City;
