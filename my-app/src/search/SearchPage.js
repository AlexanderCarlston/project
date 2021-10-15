import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import './SearchPage.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
];

const rows = [

];

function SearchPage() {
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="standard-basic" label="Repository Name" variant="outlined" className="search-field" />
        </Grid>
        <Grid item sx={{ py: 4 }} container sm={12} md={12} lg={12} justifyContent="center">
          <Button className="search-button" variant="contained">Search</Button>
        </Grid>
      </Container>

      <Container maxWidth="md" spacing={4}>
        <Grid item className="results-datagrid-container">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            className="results-datagrid"
          />
        </Grid>
      </Container>
    </main>
  )
}





export default SearchPage;