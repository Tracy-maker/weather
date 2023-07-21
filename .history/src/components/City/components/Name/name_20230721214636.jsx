import { Box } from "@mui/material";
import styled from "styled-components";


const CityName=styled(Box)`
font-size:2rem;
font-weight:500;
position:relative;

`

function Name(){
    return(<CityName>Melbourne</CityName>)
}
export default Name;