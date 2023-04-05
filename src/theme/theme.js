import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#334155",
      paper: "#94a3b8",
    },
  },
  typography: {
    subtitle1: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
    },
    body1: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontWeight: "bolder",
    },
    caption: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    button: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
      textTransform: "lowercase",
    },
  },
});
