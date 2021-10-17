import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
];

const rows = [

];

function SearchResultsDatagrid() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      className="results-datagrid"
    />
  )
}

export default SearchResultsDatagrid