import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './pages/Home'
const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 568,
         md: 760,
         lg: 970,
         xl: 1200,
      }
   },
  palette: {
     background: {
        blue: '#1081e8c2',
     },
     color: {
        blue: '#1976d2',
     }
  },
  typography: {
     fontFamily: [
        "Sans-Serif",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
     ].join(",")
  },

})
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ listStyle: 'none' }} />
      <CssBaseline />
      <Home />

    </ThemeProvider>
  )
}


export default App
