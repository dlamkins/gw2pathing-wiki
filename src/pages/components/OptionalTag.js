import Chip from "@mui/material/Chip";
import React from "react";
import { lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const optionalTheme = createTheme({
    palette: {
        primary: lightBlue,
    }
});

export default function OptionalTag() {
  return (
    <ThemeProvider theme={optionalTheme}>
        <Chip label="Optional" color="primary" size="small" variant="outlined"/>
    </ThemeProvider>
  )
}

