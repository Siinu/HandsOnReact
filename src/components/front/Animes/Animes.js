import React from "react";
import "./Animes.css";

const Animes = ({ animeslist, handleAddanime }) => {
  return (
    <div className="animes">
      {animeslist.map((animes) => (
        <div className="card">
          <div>
            <img className="anime-image" src={animes.image} alt={animes.name} />
          </div>
          <div>
            <h3 className="anime-name">{animes.name}</h3>
          </div>
          <div>
            <h3 className="anime-season">TotalSeasons :{animes.Seasons}</h3>
          </div>
          <div>
            <button
              className="anime-add-button"
              onClick={() => handleAddanime(animes)}
            >
              {" "}
              Add to Favourite
            </button>
          </div>
          <div>
            <a href={animes.link} target="blank">
              <button className="btnStyle"> Play Now </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
