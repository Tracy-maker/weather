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
    @media screen and (min-width: 1024px){
      margin-top: 1rem;
    height: 3px;
    }
  }
  @media screen and (min-width: 1024px){
    margin-top: 16px;
    font-weight: 500;
  }
`;
function Name({name}) {
  return <CityName>{name}</CityName>;
}
export default Name;
