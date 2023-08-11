import styled from "styled-components";
import { Box, Divider } from "@mui/material";
import Item from "./components/Item/Item";

const DetailsContainer = styled(Box)`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  order: -1;
  @media screen and (min-width: 1024px) {
    padding: 0 96px;
    flex: 1;
    order: 1;
    justify-content: flex-end;
  }
`;

const DividerLine = styled(Divider)`
  width: 2px;
  background: rgba(225, 225, 225, 0.7);
`;

function Details({ humidity, wind }) {
  return (
    <DetailsContainer>
      <Item title="HUMIDITY">{`${humidity}%`}</Item>
      <DividerLine />
      <Item title="WIND">{`${wind}`}K/M</Item>
    </DetailsContainer>
  );
}
export default Details;
