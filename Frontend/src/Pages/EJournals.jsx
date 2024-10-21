import React, { useState } from 'react';

const EJournals = () => {
  const [selectedJournal, setSelectedJournal] = useState(null);

  const journals = [
    {
      id: 1,
      title: 'Comic Book Nation',
      genre: 'comic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClT8DtHC2gbQS_-ktZNOezGs3Az5Ut29CoA&s',
      price: '$10',
      rentalPrice: '$5',
      link: 'https://ojs.lib.uwo.ca/index.php/westernumirror/article/download/15858/12284',
    },
    {
      id: 2,
      title: 'Understanding Comics',
      genre: 'comics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yfNqOL_L6P9NzJucSXTEvUe1psIps3q1HA&s',
      price: '$12',
      rentalPrice: '$6',
      link: 'https://leondelarosa.files.wordpress.com/2016/08/understanding-comics-the-invisible-art-vocabulary.pdf',
    },
    {
      id: 3,
      title: 'Journal of Graphic Novels and Comics',
      genre: 'comics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGM50KbYtdXgHS3Ce-sfO9GvbaYVEiflDMA&s',
      price: '$8',
      rentalPrice: '$4',
      link: 'https://arthist.net/archive/32785/view=pdf',
    },
    {
      id: 4,
      title: 'International Journal of Comic Art',
      genre: 'comics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnhLTx5Qlrp0fnSfyt6CW50JkFZJpDiauVQ&s',
      price: '$15',
      rentalPrice: '$7',
      link: 'http://repository.ikj.ac.id/1401/1/2022%20-%20Iwan%20Editor%20IJOCA.pdf',
    },
    {
      id: 5,
      title: 'The visual languages of comics ',
      genre: 'comics',
      image: 'https://www.visuallanguagelab.com/wp-content/uploads/2021/11/vloc_big.jpg',
      price: '$11',
      rentalPrice: '$6',
      link: 'https://www.researchgate.net/profile/Neil_Cohn/publication/259477081_The_Visual_Language_of_Comics_Introduction_to_the_structure_and_cognition_of_sequential_images/links/563b15d208aeed0531dcccac/The-Visual-Language-of-Comics-Introduction-to-the-structure-and-cognition-of-sequential-images.pdf?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19',
    },
    {
      id: 6,
      title: 'Prabuddha Bharata',
      genre: 'Devotional',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aYyMawhIUyJcfMvvaio6B_G9avD4JR99Rg&s',
      price: '$14',
      rentalPrice: '$7',
      link: 'https://advaitaashrama.org/wp-content/uploads/072020.pdf',
    },
    {
      id: 7,
      title: 'Vedanta Kesari',
      genre: 'Devotional',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5COpdn1A9z39qYtxOnjT6O_cmWCKA56fQg&s',
      price: '$9',
      rentalPrice: '$5',
      link: 'http://www.rkmathharipad.org/Magazines/VedantaKesari_Nov_2016.pdf',
    },
    {
      id: 8,
      title: 'Shri Ram Chandra Mission Journal',
      genre: 'Devotional',
      image: 'https://hfnlife.com/cdn/shop/products/9cd16d48a12257f0a8ada9ae76597b0b.jpg?v=1663668143&width=1280',
      price: '$13',
      rentalPrice: '$7',
      link: 'https://www.sahajmarg.org/c/document_library/get_file?p_l_id=57279&folderId=79657&name=DLFE-4915.pdf',
    },
    {
      id: 9,
      title: 'Bhakti Nivedana',
      genre: 'Devotional',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStageMEeUbryPF5sCBQ8iQCcej4EsVwRzgA&s',
      price: '$16',
      rentalPrice: '$8',
      link: 'http://bhakthinivedana.chinnajeeyar.guru/wp-content/plugins/bhakthinivedana-files/uploaded_files/8f1102807ad162d5cff58b1f8644a6b5-1449439807.pdf',
    },
    {
      id: 10,
      title: 'Karma - Sadhguru',
      genre: 'Devotional',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRpgipZjt-_WxM3CByDqFAodBItbVMm4Lhg&s',
      price: '$18',
      rentalPrice: '$9',
      link: 'http://tongaatsecondary.co.za/gallery/Karma%20-%20Sadhguru.pdf',
    },
    {
      id: 11,
      title: "Don't believe everything you think",
      genre: 'Self-help',
      image: 'https://m.media-amazon.com/images/I/715qi-cIbML._AC_UF1000,1000_QL80_.jpg',
      price: '$20',
      rentalPrice: '$10',
      link: 'https://pdfdrive.com.co/wp-content/pdfh/Dont-Believe-Everything-You-Think.pdf',
    },
    {
      id: 12,
      title: 'The Mountain is You',
      genre: 'Self-help',
      image: 'https://m.media-amazon.com/images/I/61xivWmExiL._AC_UY327_FMwebp_QL65_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Mountain-is-You.pdf',
    },
    {
      id: 13,
      title: 'The Art of Being Alone',
      genre: 'Self-help',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxhM_taAY3IecNnX2b74AQI_5bwmmG1Z4ew&s',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://api.pageplace.de/preview/DT0400.9781933947976_A44904192/preview-9781933947976_A44904192.pdf',
    },
    {
      id: 14,
      title: 'Deep Work',
      genre: 'Self-help',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4m2pqmbjvWDX5NPBEZvIsXqgcBbP4D2x6A&s',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://sajithpai.com/wp-content/uploads/2016/06/Deep-Work-Summary.pdf',
    },
    {
      id: 15,
      title: 'Ikigai',
      genre: 'Self-help',
      image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: '/book/Ikigai.pdf',
    },
    {
      id: 16,
      title: 'Spy x Family',
      genre: 'Anime',
      image: 'https://m.media-amazon.com/images/I/81HgZ64VEIL._AC_UY327_FMwebp_QL65_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://online.fliphtml5.com/qjszm/elhb/',
    },
    {
      id: 17,
      title: 'Your Name',
      genre: 'Anime',
      image: 'https://m.media-amazon.com/images/I/71YoxjSxCEL._AC_UY327_FMwebp_QL65_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://fgilantranslationscom.files.wordpress.com/2016/07/kiminonawa.pdf',
    },
    {
      id: 18,
      title: 'Naruto Vol.28',
      genre: 'Anime',
      image: 'https://m.media-amazon.com/images/I/818ozbslx8L._UF1000,1000_QL80_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://online.fliphtml5.com/bgpkm/mrzd/#p=1',
    },
    {
      id: 19,
      title: 'One Piece vol 1',
      genre: 'Anime',
      image: 'https://m.media-amazon.com/images/I/91NxYvUNf6L._AC_UY327_FMwebp_QL65_.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://online.fliphtml5.com/gutjj/muka/',
    },
    {
      id: 20,
      title: 'Attack on Titan',
      genre: 'Anime',
      image: 'https://online.anyflip.com/mbjhe/rsss/files/mobile/1.jpg?1622898529',
      price: '$17',
      rentalPrice: '$9',
      link: 'https://online.fliphtml5.com/sbjyp/sabs/',
    },
  
  ];

  const handleSelectJournal = (journal) => {
    setSelectedJournal(journal);
  };

  return (
    <div className="p-6 w-full h-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">E-Journals</h2>
      <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-5 gap-4">
        {journals.map((journal) => (
          <div
            key={journal.id}
            className="bg-gray-200 max-h-[80%] text-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={journal.image}
              alt={journal.title}
              className=" object-contain w-full h-[40%] hover:scale-110 duration-300 transition-all rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{journal.title}</h3>
            <p className="text-sm mt-2">{journal.genre}</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => handleSelectJournal(journal)}
                className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-md hover:from-teal-500 hover:to-green-600 transition-all"
              >
                Download
              </button>
            </div>
          
          </div>
        ))}
      </div>
      {selectedJournal && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg h-[75%] w-full">
            <h3 className="text-2xl text-black bg-white font-bold mb-4">{selectedJournal.title}</h3>
           <div className="flex justify-center items-center">
           <img src={selectedJournal.image} alt="book image" className='w-52' />
           </div>
          
            {/* <p className='text-black'>{selectedJournal.genre}</p> */}
            <div className="mt-4">
              <a
                href={selectedJournal.link}
                target='_blank'
                className="block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md text-center hover:from-purple-500 hover:to-pink-600 transition-all"
              >
                Start Reading
              </a>
            </div>
            <div className="flex justify-between  items-center mt-4">
              {/* <p className="text-lg font-bold">{selectedJournal.price}</p>
              <p className="text-lg font-bold">{selectedJournal.rentalPrice}</p> */}
            </div>
            <button
              onClick={() => setSelectedJournal(null)}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EJournals;
