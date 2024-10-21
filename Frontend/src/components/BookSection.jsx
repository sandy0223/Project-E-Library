  import React from 'react';
import BookCard from './BookCard';

const books = [
  {
    title: 'Advance Engineering Mathematics',
    image: 'https://www.wiley.com/storefront-pdp-assets/_next/image?url=https%3A%2F%2Fmedia.wiley.com%2Fproduct_data%2FcoverImage300%2F28%2F11194559%2F1119455928.jpg&w=640&q=75',
    pdf: 'https://wp.kntu.ac.ir/dfard/ebook/em/Advanced%20Engineering%20Mathematics%2010th%20Edition.pdf',
  },
  {
    title: 'The Lost Way To Misrost',
    image: 'https://www.free-ebooks.net/2d_covers/large/1726814713.jpg',
    pdf: 'https://www.free-ebooks.net/fiction/The-Lost-Way-To-Misrost/pdf?dl&preview',
  },
  {
    title: 'The Bhagwat Geeta (Hindi)',
    image: 'https://storeassets.im-cdn.com/media-manager/premkumar61398/UgcR9WISrKQw4IBgAe88_IMG_20220517_080432_0x0_webp.jpg',
    pdf: 'https://yogalife.co.in/wp-content/uploads/2017/04/Bhagavad-gita-hindi.pdf',
  },
  {
    title: 'Karma - Sadhguru',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRpgipZjt-_WxM3CByDqFAodBItbVMm4Lhg&s',
    pdf: 'http://tongaatsecondary.co.za/gallery/Karma%20-%20Sadhguru.pdf',
  },
  {
    title: 'Your Name vol.1',
    image: 'https://m.media-amazon.com/images/I/71YoxjSxCEL._AC_UY327_FMwebp_QL65_.jpg',
    pdf: 'https://fgilantranslationscom.files.wordpress.com/2016/07/kiminonawa.pdf',
  },
  {
    title: 'Deep Work',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4m2pqmbjvWDX5NPBEZvIsXqgcBbP4D2x6A&s',
    pdf: 'https://sajithpai.com/wp-content/uploads/2016/06/Deep-Work-Summary.pdf',
  },
  {
    title: 'Ikigai',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
    pdf: '/book/Ikigai.pdf',
  },
  {
    title: 'International Journal of Comic Art',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnhLTx5Qlrp0fnSfyt6CW50JkFZJpDiauVQ&s',
    pdf: 'http://repository.ikj.ac.id/1401/1/2022%20-%20Iwan%20Editor%20IJOCA.pdf',
  },
];

const BookSection = () => {
  return (
    <div className="container mx-auto py-2">
      <h1 className="text-4xl font-bold text-center  mb-2 bg-blue-400 p-2 Bungee_Inline rounded-full">You May Like</h1>
      {/* <span className='font-mono text-lg bg-gradient-to-r from-teal-300 to-red-300 p-2 rounded-full font-bold'>Latest collections of Self help Books <i class="ri-book-open-fill"></i></span> */}
      
      <div className="flex mt-2 flex-wrap -mx-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookSection;
