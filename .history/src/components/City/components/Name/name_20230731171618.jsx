import { Box } from "@mui/material";
import styled from "styled-components";


const CityName = styled(Box)`
  font-size: 2.5rem;
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
    background-color: white;
  }
`;

function Name({name}) {
  
  return <CityName>{name}</CityName>;
}
export default Name;
