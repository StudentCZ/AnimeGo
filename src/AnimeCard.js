import React from 'react';
import style from './AnimeCard.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AnimeCard(props) {
  return (
    <article>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color='text.secondary' gutterBottom>
            {props.anime.title}
          </Typography>
          <Typography variant='h5' component='div'></Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            <img
              src={props.anime.images.jpg.image_url}
              alt='jikan api images'
            />
          </Typography>

          <Box>
            <Typography>{props.anime.synopsis}</Typography>
            <br />
            <Typography pr={3} style={{ display: 'inline-block' }}>
              Episodes: {props.anime.episodes}
            </Typography>
            <Typography style={{ display: 'inline-block' }}>
              Type: {props.anime.type}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size='medium'>
            <a href={props.anime.url} target='_blank' rel='noreferrer'>
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
      <figure>
        <div className={style.container}>
          <div></div>

          <div></div>
          <div className={style.flexContainer}>
            <div className={style.flexBox1}> Type: {props.anime.type}</div>
            <div className={style.flexBox1}>
              Duration: {props.anime.duration}{' '}
            </div>
            <div className={style.flexBox1}>
              {' '}
              Score: {props.anime.score}/10{' '}
            </div>
            <div className={style.flexBox1}>
              Year: {props.anime.year ? props.anime.year : 'N/A'}
            </div>
            <div className={style.flexBox1}>Rating: {props.anime.rating}</div>
            <div className={style.flexBox}>
              Genre:{' '}
              {props.anime.genres.map((ele) => {
                return `${ele.name}/`;
              })}
            </div>
          </div>
        </div>
      </figure>
    </article>
  );
}

export default AnimeCard;
