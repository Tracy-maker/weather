import styled from "styled-components";
import { Box, Divider } from "@mui/material";
import Item from "./components/Item/Item";

const DetailsContainer = styled(Box)`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
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
