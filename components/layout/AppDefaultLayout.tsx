import { AppProps } from "next/app";
import React, { useState } from "react";
import { MENU_ITEMS } from "../data/menu";
import AppBarComponent from "./AppBarComponent";
import { AppMenu } from "./AppMenu";
import { SidebarNav } from "./SidebarNav";
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { grey, indigo, blue } from "@mui/material/colors";


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: indigo,
          divider: indigo[200],
          background: {
            default: grey[50],
            paper: grey[50],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: "#00C853",
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
  },
});



function AppDefaultLayout({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [sideBarToggle, setSideBarToggle] = useState(false);
  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  return (
    <>
      {" "}
   
          <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
          <SidebarNav
            handleDrawerToggle={handleDrawerToggle}
            isOpen={sideBarToggle}
            isDrawerOpen={sideBarToggle}
            children={<AppMenu links={MENU_ITEMS} />}
          />
          <Component {...pageProps} />
    
    </>
  );
}

export default AppDefaultLayout;
