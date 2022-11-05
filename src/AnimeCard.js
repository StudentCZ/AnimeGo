import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function AnimeCard(props) {
  return (
    <article>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ bgcolor: 'secondary.main' }}>
            <Typography
              sx={{ fontSize: 28 }}
              color='text.secondary'
              gutterBottom
            >
              {props.anime.title}
            </Typography>
          </Box>

          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            <img
              src={props.anime.images.jpg.image_url}
              alt='jikan api images'
            />
          </Typography>

          <Box>
            <Typography sx={{ fontSize: 18 }}>
              {props.anime.synopsis}
            </Typography>
          </Box>
          <br />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Item>Episodes: {props.anime.episodes}</Item>
            <Item>Type: {props.anime.type}</Item>
            <Item>Duration: {props.anime.duration}</Item>
            <Item>Score: {props.anime.score}</Item>
            <Item>Year: {props.anime.year ? props.anime.year : 'N/A'}</Item>
            <Item>Rating: {props.anime.rating}</Item>
            <Item>
              Genre:{' '}
              {props.anime.genres.map((ele) => {
                return `${ele.name}, `;
              })}
            </Item>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='medium'>
            <a href={props.anime.url} target='_blank' rel='noreferrer'>
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </article>
  );
}

export default AnimeCard;
