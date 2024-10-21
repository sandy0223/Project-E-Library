import React, { useEffect, useState } from "react";

const novelsData = [
  {
    id: 1,
    title: "The Alchemist",
    image: "/book/al.jpg",
    link: "https://www.pps.net/cms/lib8/OR01913224/centricity/domain/179/final_Alchemist_Sept_2010.pdf",
    description: "An intriguing mystery about an island that holds many secrets.",
  },
  {
    id: 2,
    title: "A Man Called Ove",
    image: "https://m.media-amazon.com/images/I/81g2oEdeGTL._AC_UY327_FMwebp_QL65_.jpg",
    link: "https://therustyquill.wordpress.com/wp-content/uploads/2021/05/man-called-ove_-a-novel-a-fredrik-backman.pdf",
    description: "A thrilling tale of exploration and the spirit of adventure.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm a guide",
    image: "https://images-na.ssl-images-amazon.com/images/I/81-P2xsIvRL._SY900_.jpg",
    link: "https://chaosrpg.files.wordpress.com/2009/10/forgotten-realms-campaign-guide.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 4,
    title: "The Old Man and the Sea: Ernest Hemingway’s tale of the Sea",
    image: "/book/h.jpg",
    link: "https://www.arvindguptatoys.com/arvindgupta/oldmansea.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 5,
    title: "Short stories from 100 Selected Stories",
    image: "https://m.media-amazon.com/images/I/71NFNo3BbUL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.nipccd.nic.in/uploads/page/Short-stories-from-100-Selected-Storiespdf-958b29ac59dc03ab693cca052b4036e2.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 6,
    title: "The Outsiders",
    image: "https://m.media-amazon.com/images/I/71Bg39CmhoL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.btboces.org/Downloads/The%20Outsiders%20Novel%20by%20SE%20Hinton.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 7,
    title: "Think and Grow Rich",
    image: "https://img.perlego.com/book-covers/2924282/9781087919270_300_450.webp",
    link: "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 8,
    title: "Metamorphosis",
    image: "https://m.media-amazon.com/images/I/71qR+kG+43L._AC_UY327_QL65_.jpg",
    link: "https://giove.isti.cnr.it/demo/eread/Libri/calm/Metamorphosis.pdf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 9,
    title: "One Arranged Murder",
    author: "Maxwell King",
    image: "https://m.media-amazon.com/images/I/611UGN09zOL._AC_UY327_QL65_.jpg",
    link: "https://fliphtml5.com/fsyoz/iwnf",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
];

const Novel = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteNovels")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (novel) => {
    const isFavorite = favorites.some((fav) => fav.id === novel.id);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== novel.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, novel];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteNovels", JSON.stringify(updatedFavorites)); // Update localStorage
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">Novels Collection</h1> */}
      <div className="grid grid-cols-1 mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {novelsData.map((novel) => (
          <div key={novel.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center items-center">
            <img
              src={novel.image}
              alt={novel.title}
              className="w-1/2 h-[300px] object-contain mb-4"
            />
            </div>
            <h3 className="text-xl font-semibold mb-2">{novel.title}</h3>
           
            
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
              <a href={novel.link}>Download / View</a>
            </button>
            <button
              className="mt-4 ml-4 px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={() => handleFavorite(novel)}
            >
              {favorites.some((fav) => fav.id === novel.id)
                ? "Unmark as Favorite"
                : "Mark as Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novel;
