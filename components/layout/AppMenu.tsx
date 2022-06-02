import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  SvgIconTypeMap,
  TextField,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};
export type AppMenuMapper = {
  label: string;
  icon: IconType;
};

type AppMenuLinksProps = {
  links: AppMenuMapper[];
  menuClickHandler?: () => void;
};

export const AppMenu: React.FC<AppMenuLinksProps> = ({
  links,
  menuClickHandler,
}) => {
  return (
    <div>
      <MenuList>
        {links.map((link, id) => (
          <MenuItem key={id} onClick={() => menuClickHandler}>
            <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
            <ListItemText>{link.label}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem>
        <ListItemIcon><SearchIcon fontSize="small"/></ListItemIcon>
          <TextField id="standard-basic" label="Search" variant="standard" />
        </MenuItem>
      </MenuList>
    </div>
  );
};
