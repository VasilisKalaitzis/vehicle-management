import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    info: {
      main: grey[800],
    },
  },
  typography: {
    allVariants: {
      color: grey[800],
    },
    button: {
      textTransform: "none",
    },
  },
});
