import styled from "styled-components";
import { Box } from "@mui/material";
import Humidity from "./components/Humidity/Humidity";

const DetailsContainer = styled(Box)`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`;

function Details() {
  return <DetailsContainer><Humidity/><DividerLine/></DetailsContainer>;
}
export default Details;
