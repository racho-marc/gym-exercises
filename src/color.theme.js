import { createTheme, ThemeProvider } from '@mui/material/styles';
const font = "'Josefin Sans', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      light: '#f79494',
      main: '#FF2625',
      dark: '#de0020',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#614141',
      main: '#3A1212',
      dark: '#280c0c',
      contrastText: '#FFFFFF',
    },
  },
});

export default function Palette({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}