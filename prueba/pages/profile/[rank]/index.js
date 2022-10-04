import Link from "next/link"
import { useRouter } from "next/router"
import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

 
export default function Rank({ data }) {

    const router = useRouter()
    const { rank } = router.query
    const info = data.filter(e => e.rank == rank)
    const infoArtist =
        info.map(({ artist, followers, rank }) => {
            return (
                <Container maxWidth="sm"                 >
                    <Grid container alignItems="center"

                    >
                        <Card fixed>

                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {artist}
                                </Typography>

                                <Typography variant="body2">
                                    {artist} cuenta con {followers} seguidores
                                    <br />
                                    Ademas se posiciona en el {rank}° lugar de los artistas mas escuchados
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link href="/profile">Volver</Link></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Container >
            )

        })

    return <>
        {infoArtist}
    </>
}

Rank.getInitialProps = async () => {
    return await fetch("http://localhost:3000/api/info")
        .then(res => res.json())
        .then(response => {
            const { data } = response
            return { data }
        }
        )
}



