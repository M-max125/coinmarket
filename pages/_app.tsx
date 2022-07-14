import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { CoinMarketCapProvider } from "../context/context";
import {
  PaletteMode,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import React from "react";
import { MENU_ITEMS } from "../components/data/menu";
import AppBarComponent from "../components/layout/AppBarComponent";
import { AppMenu } from "../components/layout/AppMenu";
import { SidebarNav } from "../components/layout/SidebarNav";
import { GunProvider } from "../context/gunContext";

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

function MyApp({ Component, pageProps }: AppProps) {
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
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_SERVER!}
        appId={process.env.NEXT_PUBLIC_APP_ID!}
      >
        <GunProvider>
          <CoinMarketCapProvider>
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
                <Component {...pageProps} />
              </ThemeProvider>
            </ColorModeContext.Provider>
          </CoinMarketCapProvider>
        </GunProvider>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
