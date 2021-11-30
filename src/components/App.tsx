import React from "react";
import "./App.css";
import { PlaygroundContents } from "./PlaygroundContents";
import { theme } from './theme'

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PlaygroundContents />
    </ThemeProvider>
  );
};
