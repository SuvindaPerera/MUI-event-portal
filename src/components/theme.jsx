import * as React from 'react';
import { blue, red } from '@mui/material/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import { createTheme,colors,ThemeProvider, styled, Button } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: orange[500],

//     },
//     secondary: {
//         main: "#00ADB5"
//     }
//   },
// });


const theme = createMuiTheme({
    palette: {
      primary: red,
    },
  });


function App() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>;
}