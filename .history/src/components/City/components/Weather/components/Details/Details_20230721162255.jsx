import styled from "styled-components";
import { Box, Divider } from "@mui/material";
import Humidity from "./components/Humidity/Humidity";
import Wind from "./components/Wind/Wind";

const DetailsContainer = styled(Box)`
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
`;

const DividerLine = styled(Divider)`
  width: 2px;
  background: rgba(225, 225, 225, 0.7);
`;

function Details() {
  return (
    <DetailsContainer>
      <Humidity />
      <DividerLine />
      <Wind/>
    </DetailsContainer>
  );
}
export default Details;
