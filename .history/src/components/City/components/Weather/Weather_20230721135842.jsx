import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";

const Temperature = styled(Box)`
  font-size: 5rem;
`;

const Condition = styled(Box)`
text-align:center;
font-size:1.5rem;
letter-spacing:5px;
margin-top: 0.25rem
color:rgb(255 255 255/70%);
`;


function Weather() {
  return (
    <div>
      <Temperature>23.66゜</Temperature>
      <Condition />
      <Details />
    </div>
  );
}
export default Weather;
