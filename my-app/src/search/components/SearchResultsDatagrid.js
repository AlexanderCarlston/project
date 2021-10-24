import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from "react-router-dom";

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'language', headerName: 'Language', width: 200 },
  { field: 'stargazers_count', headerName: 'Stars', width: 200 },
];

function SearchResultsDatagrid(props) {
  const repositories = props.repositories ? props.repositories : []
  let history = useHistory();

  // Only if there are repositories
  function handleRowClick(event) {
    if(repositories.length === 0) {return}
    console.log(event, event.row.url)
    history.push(`/details/${event.row.full_name}`,)
  }

  return (
    <DataGrid
      rows={repositories}
      columns={columns}
      autoPageSize={true}
      className="results-datagrid"
      onRowClick={handleRowClick}
      loading={props.loading}
    />
  )
}

export default SearchResultsDatagrid