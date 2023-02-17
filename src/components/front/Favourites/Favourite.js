import React from "react";
import "./Favourite.css";

const Favourite = ({
  favourites,
  handleAddanime,
  handleRemoveAnime,
  handleClearance,
}) => {
  return (
    <div className="fav-anime">
      <h2 className="fav-anime-header">Favourites</h2>
      <div className="clear-fav">
        {favourites.length >= 1 && (
          <button className="clear-fav-button" onClick={handleClearance}>
            Clear Items
          </button>
        )}
      </div>
      <br />
      {favourites.length === 0 && <div className="fav-anime-empty">Empty</div>}

      <div>
        {favourites.map((item) => (
          <div key={item.id} className="fav-anime-list">
            <img className="fav-anime-image" src={item.image} alt={item.name} />

            <div className="fav-anime-name">{item.name}</div>
            <div className="fav-anime-function">
              <button
                className="fav-anime-add"
                onClick={() => handleAddanime(item)}
              >
                +
              </button>
              <button
                className="fav-anime-remove"
                onClick={() => handleRemoveAnime(item)}
              >
                -
              </button>
            </div>

            <div className="fav-anime-count">{item.quantity}</div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Favourite;
