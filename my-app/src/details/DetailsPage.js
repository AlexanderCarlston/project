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

function DetailsPage() {
  const { owner, repositoryName } = useParams()
  
  useEffect(() => {
    // TODO: Add call to get individual repository once expect fields are decided
  });

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid sx={{ py: 1 }} item xs={1} md={1} l={1}>
          <Link href="/search">Go back</Link>
        </Grid>
        <Grid item xs={11} md={11} l={11}>
          <Typography variant="h3" color="inherit">
            {/* TODO: add overflow protection */}
            Repository Details: {repositoryName}
          </Typography>
        </Grid>
      </Container>

      {/* TODO: Add overflow protection */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid item xs={12} md={12}>
          <Typography variant="h3" color="inherit">
            {/* Github Repository Lookup */}
            <List>
              <ListItem>
                <ListItemText primary="Owner:" />
                <ListItemText primary={owner} />
              </ListItem>
              <Divider />
            </List>
          </Typography>
        </Grid>
      </Container>
    </main>
  )
}

export default DetailsPage