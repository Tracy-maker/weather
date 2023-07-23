import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useState } from "react";

const Temperature = styled(Box)`
  font-size: 5rem;
`;

const Condition = styled(Box)`
text-align:center;
font-size:1.5rem;
letter-spacing:5px;
margin-top: 0.25rem;
color:rgb(255,255,255,0.7);
`;

function Weather() {
const [temperature,setTemperature]=useState();
const [condition,setCondition]=useState();

  return (
    <div>
      <Temperature>{`${temperature}゜`}</Temperature>
      <Condition>{condition}</Condition>
      <Details />
    </div>
  );
}
export default Weather;
