import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "../Signin/Signin";
import Animes from "../Animes/Animes";
import Favourite from "../Favourites/Favourite";

const Myroutes = ({
  animeslist,
  favourites,
  handleAddanime,
  handleRemoveAnime,
  handleClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Animes animeslist={animeslist} handleAddanime={handleAddanime} />
          }
        ></Route>

        <Route path="/signin" exact element={<SignIn />}></Route>

        <Route
          path="/favourite"
          exact
          element={
            <Favourite
              favourites={favourites}
              handleAddanime={handleAddanime}
              handleRemoveAnime={handleRemoveAnime}
              handleClearance={handleClearance}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Myroutes;
