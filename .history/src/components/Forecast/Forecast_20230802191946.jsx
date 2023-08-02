import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ForeCastContainer = styled(Box)`

`;
const Title = styled(Typography)`
  text-align: center;
`;

const Week = styled(Typography)`
  text-align: center;
`;


function Forecast () {
 

  return (
    <ForeCastContainer>
      <Title variant="h6">ForeCast</Title>
   
    </ForeCastContainer>
  );
}




export default Forecast;
