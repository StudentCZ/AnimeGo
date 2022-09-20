import React from 'react';
import style from './AnimeCard.module.css';

function AnimeCard(props) {
  return (
    <article>
      <a href={props.anime.url} target='_blank' rel='noreferrer'>
        <figure>
          <div>
            <span>{props.anime.url}</span>
            <div>
              <h2 className={style.cardsText}>{props.anime.title}</h2>
            </div>
          </div>
        </figure>
      </a>
    </article>
  );
}

export default AnimeCard;
