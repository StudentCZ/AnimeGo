import React from 'react';
import AnimeCard from './AnimeCard';
import style from './Search.module.css';

function Search(props) {
  return (
    <main>
      <div className='main-head'>
        <form onSubmit={props.HandleSearch}>
          <input
            className={style.box}
            type='search'
            placeholder='Search anime here...'
            required
            value={props.search}
            onChange={(event) => props.setSearch(event.target.value)}
          />
        </form>
      </div>
      <div className={style.list}>
        {props.animeList
          .filter((animes) => animes.approved === true)
          .map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
      </div>
    </main>
  );
}

export default Search;
