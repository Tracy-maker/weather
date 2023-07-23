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

const getWeather=()=>{
  const xhttp = new XHLHttpRequest()

  xhttp.onreadystatechange=function(){
    if(this.readyState===4&&this.status===200){
      console.log(this.responseText)
    }
  }

  const cityId =2158177
  const appId=''

  xhttp.open('GET',`
  https://api.openweathermap.org/data/2.5/weather?id=${2158177}&units=metric&appid=2466213f21b4b723d341e00a430a7673`)
  xhttp.send()
}

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
