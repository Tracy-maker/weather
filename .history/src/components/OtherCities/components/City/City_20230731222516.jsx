import styled from "styled-components";
import { Button } from "@mui/material";

const CityList= styled(Button)`
display:flex;
`;

function City(){
    return(
    <CityList>city</CityList>
    )

}
export default City