import styled from "styled-components";
import { Box, Divider } from "@mui/material";
import Item from "./components/Item/Item";

const DetailsContainer = styled(Box)`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`;

const DividerLine = styled(Divider)`
  width: 2px;
  background: rgba(225, 225, 225, 0.7);
`;

function Details() {
  return (
    <DetailsContainer>
      <Item title="HUMIDITY">57%</Item>
      <DividerLine />
      <Item title="WIND">3.6K/M</Item>
    </DetailsContainer>
  );
}
export default Details;
