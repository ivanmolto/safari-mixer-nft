import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: cyan,
  },
  overrides: {
    Button: {
      raisedPrimary: {
        color: "white",
      },
    },
  },
});
export default theme;
