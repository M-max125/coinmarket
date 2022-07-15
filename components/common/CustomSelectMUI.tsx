import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomSelectMUI: React.FC<{
  itemsList: string[];
  handleChange: (event: SelectChangeEvent) => void;
  itemValueName: string;
  inputLabel: string;
}> = (props) => {
  return (
    <div>
      {" "}
      <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {props.inputLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.itemValueName}
          onChange={props.handleChange}
          MenuProps={MenuProps}
        >
          {props.itemsList.map((name) => (
            <MenuItem key={name} value={name}>
              <div className="flex items-center">
                {" "}
                <Checkbox checked={props.itemValueName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelectMUI;
