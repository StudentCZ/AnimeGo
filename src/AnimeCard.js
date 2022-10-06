import React from 'react';
import style from './AnimeCard.module.css';

function AnimeCard(props) {
  return (
    <article>
      <figure>
        <div className={style.container}>
          <a href={props.anime.url} target='_blank' rel='noreferrer'>
            <span>{props.anime.url}</span>
          </a>
          <div>
            <a
              className={style.titleLink}
              href={props.anime.url}
              target='_blank'
              rel='noreferrer'
            >
              <h2 className={style.cardsText}>{props.anime.title}</h2>
            </a>
          </div>
          <div>
            <img
              src={props.anime.images.jpg.image_url}
              alt='jikan api images'
            />
          </div>
          <div>
            <p>{props.anime.synopsis}</p>
          </div>
          <div className={style.flexContainer}>
            <div className={style.flexBox1}>
              Episodes: {props.anime.episodes}{' '}
            </div>
            <div className={style.flexBox1}> Type: {props.anime.type}</div>
            <div className={style.flexBox1}>
              {' '}
              Rating: {props.anime.score}/10{' '}
            </div>
            <div className={style.flexBox}>
              Year: {props.anime.year ? props.anime.year : 'N/A'}
            </div>
            <div>Hello</div>
          </div>
        </div>
      </figure>
    </article>
  );
}

export default AnimeCard;
