import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { PlaygroundContents } from "./PlaygroundContents";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PlaygroundContents />
    </ThemeProvider>
  );
}

export default App;
