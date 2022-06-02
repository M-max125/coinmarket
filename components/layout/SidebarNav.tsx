import React from "react";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DRAWER_WIDTH = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const SidebarNav: React.FC<{
  isOpen: boolean | undefined;
  handleDrawerToggle: () => void;
  isDrawerOpen: boolean;
  children: React.ReactNode;
}> = (props) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography
              variant="subtitle2"
              color="inherit"
              component={"div"}
              align="left"
            >
              Coinmarket visualiser
            </Typography>
          </LogoStyled>
          <IconButton onClick={props.handleDrawerToggle}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
              </DrawerHeader>
              <Divider />
              {props.children}
      </Drawer>
    </>
  );
};
