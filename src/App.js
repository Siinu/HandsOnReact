import React from 'react';
import data from './components/back/Data/Data'
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { animeslist } = data;
  const [favourites, setfavourites] = useState([]);

  const handleAddanime = (anime) => {
    const AnimeExist = favourites.find((animeItem) => animeItem.id === anime.id);

    if (AnimeExist) {
      setfavourites(
        favourites.map((animeItem) =>
          animeItem.id === anime.id
            ? { ...AnimeExist, quantity: AnimeExist.quantity + 1 } : animeItem)
      );
    }
    else {
      setfavourites([...favourites, { ...anime, quantity: 1 }]);
    }
  }

  const handleRemoveAnime = (anime) => {
    const AnimeExist = favourites.find((animeItem) => animeItem.id === anime.id);

    if (AnimeExist.quantity === 1) {
      setfavourites(favourites.filter((animeItem) => animeItem.id !== anime.id));
    }
    else {
      setfavourites(
      favourites.map((animeItem) =>
        animeItem.id === anime.id
          ? { ...AnimeExist, quantity: AnimeExist.quantity - 1 } : animeItem)
      );
    }
  }

  const handleClearance = ()=> {
    setfavourites([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes animeslist={animeslist} favourites={favourites}
          handleAddanime={handleAddanime}
          handleRemoveAnime={handleRemoveAnime}
          handleClearance={handleClearance}
        />
   
    </div>
  );
}

export default App;
