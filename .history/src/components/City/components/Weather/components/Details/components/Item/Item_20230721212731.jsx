import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";

const ItemContainer = styled(Box)`
  text-align: center;
  opacity: 0.7;
`;

const Value = styled(Typography)`
  margin-top: 16px;
`;

function Item({title,children}) =>{
  return (
    <ItemContainer>
      <Typography variant="h6">Humidity</Typography>
      <Value>58%</Value>
    </ItemContainer>
  );
}
export default Item;
