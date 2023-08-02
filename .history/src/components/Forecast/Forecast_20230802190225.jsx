import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

const ForeCastContainer = styled(Stack)`

`;
const Title = styled(Typography)`
  text-align: center;
`;



function Forecast () {
 

  return (
    <ForeCastContainer spacing={1}>
      <Title variant="h6">ForeCast</Title>
  
   
    </ForeCastContainer>
  );
}




export default Forecast;
