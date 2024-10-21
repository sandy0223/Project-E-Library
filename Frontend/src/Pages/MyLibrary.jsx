import React, { useEffect, useState } from "react";

const MyLibrary = ({ favoriteBooks, favoriteMagazines }) => {
  const [storedFavoriteBooks, setStoredFavoriteBooks] = useState([]);
  const [storedFavoriteMagazines, setStoredFavoriteMagazines] = useState([]);

  useEffect(() => {
    // Load favorite novels from local storage
    const savedBooks = JSON.parse(localStorage.getItem("favoriteNovels")) || [];
    setStoredFavoriteBooks(savedBooks);

    // Load favorite magazines from local storage
    const savedMagazines = JSON.parse(localStorage.getItem("favoriteMagazines")) || [];
    setStoredFavoriteMagazines(savedMagazines);
  }, []);

  return (
    <div className="p-8 py-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">My Library</h1>
      
      {/* Check if both books and magazines are empty */}
      {storedFavoriteBooks.length === 0 && storedFavoriteMagazines.length === 0 ? (
        <p className="text-gray-700 h-screen text-center">No favorite items added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display favorite books */}
          {storedFavoriteBooks.length > 0 && storedFavoriteBooks.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-1">by {book.author}</p>
              <p className="text-gray-700 mb-4">{book.description}</p>
    
            </div>
          ))}

          {/* Display favorite magazines */}
          {storedFavoriteMagazines.length > 0 && storedFavoriteMagazines.map((magazine) => (
            <div key={magazine.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={magazine.img}
                alt={magazine.title}
                className="w-full h-64 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{magazine.title}</h3>
              <p className="text-gray-600 mb-1">{magazine.releaseDate || 'Available Now'}</p>
              <p className="text-gray-900 font-bold mb-4">{magazine.link}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibrary;
