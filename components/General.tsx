import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export default function General() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-5 h-full w-full rounded-r-lg p-4">
      <h1 className="font-semibold text-xl">General</h1>
      <h2 className="text-lg">Login</h2>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-sm opacity-75">Start Chat App at Login</p>
        <FormControlLabel
          checked={checked}
          value="bottom"
          control={
            <Switch
              color="primary"
              size="small"
              onClick={() => setChecked(!checked)}
            />
          }
          label={checked ? "On" : "Off"}
          labelPlacement="start"
        />
      </div>
    </div>
  );
}
