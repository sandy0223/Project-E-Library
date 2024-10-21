import React, { useState } from "react";
import Novel from "./Novel";
import MyLibrary from "./MyLibrary";
import Magazines from "./Magazines"; // Import Magazines component

const LibraryApp = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [favoriteMagazines, setFavoriteMagazines] = useState([]); // State for favorite magazines

  // Update favorite novels
  const handleFavoriteBooksUpdate = (updatedFavorites) => {
    setFavoriteBooks(updatedFavorites);
  };

  // Update favorite magazines
  const handleFavoriteMagazinesUpdate = (updatedFavorites) => {
    setFavoriteMagazines(updatedFavorites);
  };

  return (
    <div>
      {/* Pass the update function to Novel and Magazines */}
      <Novel onFavorite={handleFavoriteBooksUpdate} />
      <Magazines onFavorite={handleFavoriteMagazinesUpdate} />
      <MyLibrary favoriteBooks={favoriteBooks} favoriteMagazines={favoriteMagazines} />
    </div>
  );
};

export default LibraryApp;
