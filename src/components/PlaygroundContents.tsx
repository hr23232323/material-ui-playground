import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { CustomList } from "./CustomList";

export function PlaygroundContents() {
  return (
    <Box sx={{ display: "flex", m: 2, flexDirection: "column" }}>
      <Typography variant="h3">List of Contents</Typography>
      <CustomList />
    </Box>
  );
}
