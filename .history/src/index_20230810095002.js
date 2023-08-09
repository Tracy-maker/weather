import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat', 
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
