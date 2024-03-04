import Chip from "@mui/material/Chip";
import React from "react";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const optionalTheme = createTheme({
    palette: {
        primary: red,
    }
});

export default function OptionalTag() {
  return (
    <ThemeProvider theme={optionalTheme}>
        <Chip label="Read-Only" color="primary" size="small" variant="outlined"/>
    </ThemeProvider>
  )
}