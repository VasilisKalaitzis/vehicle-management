import React from "react";
import { InputAdornment, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
  onChange: (id: string) => void;
}

// This component represents the searchbar used throughout the app
const Searchbar = ({ onChange }: Props) => {
  // Create a timer ID to keep track of the setTimeout
  let timerId: NodeJS.Timeout;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Clear any previous timer and set a new one
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      // Call onChange after 1000 milliseconds (1 second)
      onChange(newValue);
    }, 500);
  };
  return (
    <InputBase
      sx={(theme) => ({
        minWidth: "400px",
        border: `1px solid ${theme.palette.info.main}`,
        borderRadius: "4px",
      })}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default Searchbar;
