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
  display: flex;
  justify-content: center;
  align-items:center;
  height:100vh;
  background-image: url(https://wallpaperaccess.com/full/2629319.png);
  background-repeat:repeat;
  background-size:auto;
`;

const ShowCard=styled(Card)`
width:800px;
height:600px;
background-color:white;
bi

`;

function App() {
  return (
    <BackgroundCard>
      <ShowCard>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;