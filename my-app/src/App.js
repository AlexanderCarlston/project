import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchPage from './search/SearchPage'

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
  
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Github Repository Lookup
          </Typography>
        </Toolbar>
      </AppBar>

      <SearchPage></SearchPage>

    </ThemeProvider>
  );
}

export default App;
