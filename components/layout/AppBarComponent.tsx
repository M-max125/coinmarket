import { AppBar, IconButton, Toolbar, Typography,Switch as ThemeSwitch, TextField } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {  useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../pages";


type AppBarProps = {
    handleDrawerToggle: () => void;
   
};

const AppBarComponent: React.FC<AppBarProps> = ({ handleDrawerToggle }) => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
                  >
                      <MenuIcon/>
          </IconButton>
          <Typography variant="subtitle2" color="inherit" component={"div"}>
            Coinmarket visualizer
                  </Typography>
                  <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
/**
 * The top App bar provides content and actions related to the current screen.
 * It's used for branding, screen titles, navigation, and actions
 */
