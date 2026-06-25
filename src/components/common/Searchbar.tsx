import { useRef } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
  onChange: (id: string) => void;
}

// This component represents the searchbar used throughout the app
const Searchbar = ({ onChange }: Props) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onChange(newValue);
    }, 500);
  };

  return (
    <InputBase
      sx={(theme) => ({
        maxWidth: "600px",
        minWidth: "200px",
        border: `1px solid ${theme.palette.info.main}`,
        borderRadius: "4px",
        flexGrow: 1,
      })}
      onChange={handleChange}
      data-testid="searchbar"
      inputProps={{ "data-testid": "searchbar-input" }}
      startAdornment={
        <InputAdornment
          data-testid="searchbar-icon"
          position="start"
          sx={{ marginLeft: "4px" }}
        >
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default Searchbar;
