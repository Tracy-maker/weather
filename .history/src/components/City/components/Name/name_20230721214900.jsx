import { Box } from "@mui/material";
import styled from "styled-components";

const CityName = styled(Box)`
  font-size: 2rem;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
  
  }
`;

function Name() {
  return <CityName>Melbourne</CityName>;
}
export default Name;
