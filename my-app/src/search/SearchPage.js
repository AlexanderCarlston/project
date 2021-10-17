import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchResultsDatagrid from "./components/SearchResultsDatagrid";
import React from 'react'
import './SearchPage.css';

function SearchPage() {
  const [repositories, setRepositories] = React.useState([])

  function getRepositiesClicked() {
    console.log('work')
  }

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="standard-basic" label="Repository Name" variant="outlined" className="search-field" />
        </Grid>
        <Grid item sx={{ py: 4 }} container sm={12} md={12} lg={12} justifyContent="center">
          <Button onClick={getRepositiesClicked} variant="contained">Contained</Button>
        </Grid>
      </Container>

      <Container maxWidth="md" spacing={4}>
        <Grid item className="results-datagrid-container">

          {/* <SearchResultsDatagrid></SearchResultsDatagrid> */}
        </Grid>
      </Container>
    </main>
  )
}





export default SearchPage;