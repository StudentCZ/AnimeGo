import React from 'react';
import style from './AnimeCard.module.css';

function AnimeCard(props) {
  return (
    <article>
      <a href={props.anime.url} target='_blank' rel='noreferrer'>
        <figure>
          <div>
            <img
              className={style.cards}
              src={props.anime.images.jpg.image_url}
              alt='anime-images'
            />
            <h2 className={style.cardsText}>{props.anime.title}</h2>
          </div>
        </figure>
      </a>
    </article>
  );
}

export default AnimeCard;
