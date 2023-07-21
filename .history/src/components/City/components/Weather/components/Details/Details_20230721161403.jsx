import styled from "styled-components";
import { Box } from "@mui/material";

const DetailsContainer = styled(Box)`
  margin-top: 32px;
  display:flex;
  justify-content:space-between;
`;

function Details() {
  return <DetailsContainer>Details</DetailsContainer>;
}
export default Details;
