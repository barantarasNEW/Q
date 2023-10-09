import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select as MUISelect,
} from "@mui/material";

import { select_data } from "../../data";
import { useSelect } from "./useSelect";

const Select = () => {
  const { value, onChange } = useSelect();

  return (
    <FormControl>
      <InputLabel id="select-name">Options</InputLabel>
      <MUISelect
        labelId="select-name"
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Options" />}
        multiple
      >
        {select_data.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
