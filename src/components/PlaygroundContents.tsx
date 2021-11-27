import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { CustomList } from "./CustomList";

export const PlaygroundContents: React.FC<{}> = () => {
  const contentList = ["Hello", "this", "is", "a", "custom", "list"];
  return (
    <Box sx={{ display: "flex", m: 2, flexDirection: "column" }}>
      <Typography variant="h3">List of Contents</Typography>
      <CustomList listItems={contentList} />
    </Box>
  );
};
