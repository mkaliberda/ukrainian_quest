import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// import DialogFormStyles from "components/ThemesStyles/DialogFormStyles";

const LightTheme = (props) => {
  // const theme = useTheme();

  const currentTheme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
};

export default LightTheme;
