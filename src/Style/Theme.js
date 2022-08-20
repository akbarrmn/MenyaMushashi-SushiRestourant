import { createTheme } from "@mui/material";

export const Theme = createTheme({
    breakpoints:{
      values:{
        xs:300,
        sm:400,
        md:600,
        lg:1200,
        xl:1440
      }
    },
    typography:{
      fontFamily:"Inter, sans-serif",
      button:{
        textTransform:'none'
      }
    },
    palette:{
      primary: {
        main: '#1C1C1C',
        light: '#2b2b2b',
        dark: '#171717',
        contrastText: '#fff'
      },
      background:{
        paper: '#fff',
        purple: '#7126B5'
      },
      action: {
        disabled: '#fff'
      }
    }
});