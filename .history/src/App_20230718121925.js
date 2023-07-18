import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/city";
import OtherCities from "./components/OtherCities/otherCities";
import Forecast from "./components/Forecast/forecast";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

const BackgroundCard = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-image: url(https://wallpaperaccess.com/full/2629319.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-left:0px
`;

const ShowCard = styled(Card)`
  width: 800px;
  height: 600px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 /50%);
`;

function App() {
  return (
    <BackgroundCard>
      <ShowCard>
        <CardActionArea>
          <City />
          <CardContent>
            <OtherCities />
            <Forecast />
          </CardContent>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;
