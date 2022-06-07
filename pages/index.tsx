import { PaletteMode } from "@mui/material";
import { grey, indigo, blue } from "@mui/material/colors";
import type { NextPage } from "next";
import { SidebarNav } from "../components/layout/SidebarNav";
import AppBarComponent from "../components/layout/AppBarComponent";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppMenu } from "../components/layout/AppMenu";
import { MENU_ITEMS } from "../components/data/menu";
import React from "react";
import CoinMarketTrending from "../components/trending/CoinMarketTrending";

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

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const Home: NextPage = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [sideBarToggle, setSideBarToggle] = React.useState(false);

  //TOGGLE STATE FOR SIDEBAR
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
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
          <SidebarNav
            handleDrawerToggle={handleDrawerToggle}
            isOpen={sideBarToggle}
            isDrawerOpen={sideBarToggle}
            children={<AppMenu links={MENU_ITEMS} />}
          />
          <CoinMarketTrending />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Home;
