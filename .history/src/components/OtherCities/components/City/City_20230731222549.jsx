import styled from "styled-components";
import { Button } from "@mui/material";

const CityList= styled(Button)`
display:flex;
background:transparent;
border:0
`;

function City(){
    return(
    <CityList>city</CityList>
    )

}
export default City