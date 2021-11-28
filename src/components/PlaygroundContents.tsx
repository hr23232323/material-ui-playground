import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { CustomList } from "./CustomList";
import { customListItem } from "../types";

export const PlaygroundContents: React.FC<{}> = () => {
  const contentList: customListItem[] = [
    {
      itemLink: "#link",
      itemName: "Name 1",
    },
    {
      itemLink: "#link2",
      itemName: "Name 2",
    },
  ];
  return (
    <Box sx={{ display: "flex", m: 2, flexDirection: "column" }}>
      <Typography variant="h3">List of Contents</Typography>
      <CustomList listItems={contentList} />
    </Box>
  );
};
