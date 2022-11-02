import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import Search from './Search';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  const [start] = useState('Naruto');

  useEffect(() => {
    fetchAnime(start);
  }, []);

  const HandleSearch = (event) => {
    event.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const { data } = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title_english&sfw=true&sort=acs&limit=10`
    ).then((res) => res.json());
    setAnimeList(data);
  };

  return (
    <div className={style.background}>
      <h1 className={style.header}>AnimeGo</h1>
      <div>
        <Search
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
