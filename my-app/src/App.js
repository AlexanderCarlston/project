import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchPage from './search/SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DetailsPage from "./details/DetailsPage"

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Github Repository Lookup
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Redirect to="/search"></Redirect>
          </Route>
          <Route path='/search'>
            <SearchPage></SearchPage>
          </Route>
          <Route path='/details/:owner/:repositoryName'>
            <DetailsPage></DetailsPage>
          </Route>
        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
