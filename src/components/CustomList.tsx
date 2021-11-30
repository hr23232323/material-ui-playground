import React from "react";
import { customListItem } from "../types";

import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type CustomListProps = {
  listItems: customListItem[];
};

export const CustomList: React.FC<CustomListProps> = ({ listItems }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listItems.map((item, i) => {
            return (
              <ListItem disablePadding key={i}>
                <ListItemButton component="a" href={item.itemLink}>
                  <ListItemText primary={item.itemName} sx={{color: "primary.main"}} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
