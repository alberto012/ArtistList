
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import Link from 'next/link';
import * as React from 'react';
import data from "../../data/data.json"


export default function Profile() {
  return (
    <Container  maxWidth="lg" sx={{backgroundColor: teal[50]}}>
      <Link href="/"><Button
        
        variant="contained"
        color="success"
        sx={{ mt: 1, mb: 1 }}>Volver</Button></Link>

      
      <Box>

        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
                Lista
              </Typography>
              </Toolbar>
              <Typography variant="subtitle1" color="text.secondary">
                {data.map((row) => (
                  <Link href={`/profile/${row.rank}`}>
                    <CardActionArea component="a" href="#">

                      {row.artist}
                    </CardActionArea>
                  </Link>




                ))}
              </Typography>

            </CardContent>

            {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          /> */}
          </Card>
        </Grid>
      </Box>
    </Container>

  );
}
