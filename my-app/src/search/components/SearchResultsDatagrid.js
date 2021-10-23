import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'stars', headerName: 'stars', width: 120 },
];

const rows = [

];

function SearchResultsDatagrid(props) {
  const repositories = props.repositories ? props.repositories : []

  return (
    <DataGrid
      rows={repositories}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      className="results-datagrid"
    />
  )
}

export default SearchResultsDatagrid