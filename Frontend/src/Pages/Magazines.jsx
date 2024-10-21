import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const magazinesData = {
  latest: [
    { id: 1, title: "Tech Today", img: "https://media.zinnov.com/wp-content/uploads/2024/01/technology-trends-2024-report-infographic-v3-653x1024.png", link: "https://futuretodayinstitute.com/wp-content/uploads/2024/03/TR2024_Full-Report_FINAL_LINKED.pdf" },
    { id: 2, title: "AI modern approach third edition", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD49JidfWX11QJdELxShtictRIyGr37OSgA&s", link: "https://people.engr.tamu.edu/guni/csce421/files/AI_Russell_Norvig.pdf" },
    { id: 3, title: "Oceanology", img: "https://seatracker.ru/i/p/de/e8/dee89de94f0388a0af1adb1829dc8a9f.jpg", link: "https://nmssanctuaries.blob.core.windows.net/sanctuaries-prod/media/docs/20231128-exploring-ocean-mysteries-handout.pdf" },
    { id: 4, title: "Breakthrough innovation and growth", img: "https://image.slidesharecdn.com/pwc-informe-innovacion-2013-131004070702-phpapp01/85/Informe-PwC-Encuesta-Mundial-de-Innovacion-2013-1-320.jpg", link: "https://www.pwc.es/es/publicaciones/gestion-empresarial/assets/breakthrough-innovation-growth.pdf" },
    { id: 5, title: "Quantum Computing", img: "https://m.media-amazon.com/images/I/51onF0g+9sL._SY342_.jpg", link: "https://www.fi.muni.cz/usr/gruska/qbook1.pdf" },
    { id: 6, title: "The Next Generation Of Renewable Energy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIobTBZP9T3h1hfAe5wt8oMzUp6-T64V1-khxtec-Lub3jD05zXNi-Lp113z6BR6VJPA&usqp=CAU", link: "https://unece.org/fileadmin/DAM/energy/se/pdfs/gere/Menu.EffEcon.Tech.Policies/Menu.Efficient.Economic.Technologies_Policies.UNECE.Region.pdf" },
  ],
  upcoming: [
    { id: 7, title: "Entrepreneurs 2024", img: "/book/en.jpg", releaseDate: "2024-11-15", link: "https://publuu.com/flip-book/394016/903346/page" },
    { id: 8, title: "Femina Magazine jacqueline", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9X8kbJ28pLTKnEa39kjU4hkAld1Sjps87yQ&s", releaseDate: "2024-12-05", link: "https://femina.wwmindia.com/magazines/2021/february/Femina_Pune_Feb_2021.pdf" },
    { id: 9, title: "Zero trust architecture", img: "https://m.media-amazon.com/images/I/41cniQIzYpL.jpg", releaseDate: "2024-12-05", link: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf" },
    { id: 10, title: "Forbes More than just Rocking The Pulpit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVokwY7NB7P4aPHxsbCx_skdubGzUG1nMNZg&s", releaseDate: "2024-12-05", link: "https://cms.forbesafrica.com/wp-content/uploads/2022/01/forbes-mag-1.pdf" },
    { id: 11, title: "Caravan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvA5dFzelkFSeg1dId9LSLKDkutB64WZPYCA&s", releaseDate: "2024-12-05", link: "https://orientblackswan.com/DigitalSpecimen/content/caravan/Presentation.pdf" },
    { id: 12, title: "Cricket", img: "/book/cricket.jpg", releaseDate: "2024-12-05", link: "http://www.cricketamerica.com/pdf/Cricket.pdf" },
  ],
  anime: [
    { id: 13, title: "Jujutsu Kaisen", img: "/book/jjk.jpg", link: "https://fliphtml5.com/cphge/dlst/jjk/" },
    { id: 14, title: "Bleach: Spirits are always with you", img: "/book/bleach.jpg", link: "https://fliphtml5.com/vpvqv/yhlv/Bleach-Spirits-Are-Forever-with-You_1/" },
    { id: 15, title: "Solo Leveling Vol.1", img: "/book/sl.jpg", link: "https://fliphtml5.com/azhta/zbjs/Solo_Leveling_Vol_1_By_Chugong-pdfread.net/" },
    { id: 16, title: "Naruto Vol.72", img: "/book/naruto.jpg", link: "https://fliphtml5.com/idufm/aioj/NV72_S_-_Naruto_Uzumaki%21/" },
    { id: 17, title: "My Hero Academia", img: "/book/mha.jpg", link: "https://fliphtml5.com/xaieb/yzpd/my_hero_academia_vol.1/" },
    { id: 18, title: "blackclover", img: "/book/blackclover.jpg", link: "https://fliphtml5.com/xejxd/tswc/magazine_black_clover/" },
  ],
};

const Magazines = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMagazines")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (magazine) => {
    const isFavorite = favorites.some((fav) => fav.id === magazine.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== magazine.id);
    } else {
      updatedFavorites = [...favorites, magazine];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteMagazines", JSON.stringify(updatedFavorites));
  };

  const renderMagazines = (magazines) => {
    return magazines.map((magazine) => (
      <div key={magazine.id} className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-center">
          <img src={magazine.img} alt={magazine.title} className="w-1/2 h-[300px] object-contain rounded-lg mb-4" />
        </div>
        <h3 className="text-xl font-medium">{magazine.title}</h3>
        <h5 className="text-sm font-medium">{magazine.releaseDate}</h5>

        <div className="mt-4 flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            <a href={magazine.link}>Download</a>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            <Link to="/borrow">Borrow</Link>
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => handleFavorite(magazine)}
          >
            {favorites.some((fav) => fav.id === magazine.id)
              ? "Unmark as Favorite"
              : "Mark as Favorite"}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Magazines</h1>

      {/* Latest Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.latest)}
        </div>
      </section>

      {/* Upcoming Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.upcoming)}
        </div>
      </section>

      {/* Anime Magazines Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Anime Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.anime)}
        </div>
      </section>
    </div>
  );
};

export default Magazines;
