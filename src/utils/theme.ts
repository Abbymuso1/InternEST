import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#FDAB76',
      main: '#FA541C',
      dark: '#B3200E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: "#754FFE",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
