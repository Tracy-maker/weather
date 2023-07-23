import { Box } from "@mui/material";
import styled from "styled-components";

const CityName = styled(Box)`
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
  color:#B0C4DE;

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: black;
  }
`;

function Name() {
  return <CityName>Melbourne</CityName>;
}
export default Name;
