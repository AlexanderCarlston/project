import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchResultsDatagrid from "./components/SearchResultsDatagrid";
import React from 'react'
import './SearchPage.css';
import { Octokit } from "@octokit/core"

const octokit = new Octokit()

function SearchPage() {
  const [repositories, setRepositories] = React.useState([])
  const [inputString, setInputString] = React.useState("")

  async function handleKeyPress(event) {
    if(event.key === 'Enter'){
      let result = await octokit.request('GET /search/repositories', {
        q: inputString,
        per_page: 100
      })

      console.log(result)
      setRepositories(result.data.items)
    }
  }

  const onChange = (event) => {
    setInputString(event.target.value);
  }

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid item xs={12} md={12}>
          <TextField id="standard-basic" label="Repository Name" variant="outlined" className="search-field" onKeyPress={handleKeyPress} value={inputString} onChange={onChange}/>
        </Grid>
      </Container>

      <Container maxWidth="md" spacing={4}>
        <Grid item className="results-datagrid-container">

          <SearchResultsDatagrid repositories={repositories}></SearchResultsDatagrid>
        </Grid>
      </Container>
    </main>
  )
}

export default SearchPage;