import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import { useEffect } from 'react'; 
import React from 'react'
import { Octokit } from "@octokit/core"
const octokit = new Octokit()

// The results should show: name (done), description (done), number of stars(done), language(done), owners name(done)
function DetailsPage() {
  const { owner, repositoryName } = useParams()
  const [currentRepo, setCurrentRepo] = React.useState({})

  useEffect(() => {
    // TODO: Add call to get individual repository once expect fields are decided
    async function getRepositoryInfo() {
      let result = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: owner,
        repo: repositoryName
      })

      console.log(result.data, result.data.description)
      setCurrentRepo(result && result.data ? result.data : {})
    }

    getRepositoryInfo()
  }, [owner, repositoryName]);

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid sx={{ py: 1 }} item xs={1} md={1} l={1}>
          <Link href="/search">Go back</Link>
        </Grid>
        <Grid item xs={11} md={11} l={11}>
          <Typography variant="h3" color="inherit">
            {/* TODO: add overflow protection */}
            Repository Details:
          </Typography>
        </Grid>
      </Container>

      {/* TODO: Add overflow protection */}
      <Container sx={{ py:0 }} maxWidth="md">
        <Grid item xs={12} md={12}>
          <Typography variant="h3" color="inherit">
            {/* Github Repository Lookup */}
            <List>
              <ListItem>
                <ListItemText primary="Owner:" />
                <ListItemText primary={owner} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Name:" />
                <ListItemText primary={repositoryName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stars:" />
                <ListItemText primary={currentRepo?.stargazers_count} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Language:" />
                <ListItemText primary={currentRepo?.language} />
              </ListItem>
              <Divider/>
            </List>
          </Typography>
        </Grid>
        <Grid item xs={11} md={11} l={11}>
          <Typography variant="h5" color="grey">
            {/* TODO: add overflow protection */}
            Repository Description: "{currentRepo?.description}"
          </Typography>
        </Grid>
      </Container>
    </main>
  )
}

export default DetailsPage