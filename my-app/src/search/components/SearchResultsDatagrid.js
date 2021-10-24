import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'language', headerName: 'Language', width: 200 },
  { field: 'stargazers_count', headerName: 'Stars', width: 200 },
];

function SearchResultsDatagrid(props) {
  const repositories = props.repositories ? props.repositories : []

  // Only if there are repositories
  function handleColumnClick(event) {
    if(repositories.length === 0) {return}
    console.log(event)
  }

  return (
    <DataGrid
      rows={repositories}
      columns={columns}
      autoPageSize={true}
      className="results-datagrid"
      onColumnHeaderClick={handleColumnClick}
    />
  )
}

export default SearchResultsDatagrid