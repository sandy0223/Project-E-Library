import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-gray-800 min-h-screen mt-20 flex items-center justify-center">
      <div className="container w-1/2 mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-8 py-6 text-center">
            <h1 className="text-4xl font-bold text-purple-600 hover:text-purple-800 transition duration-300">
              About Our E-Library
            </h1>
            <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition duration-300">
              Welcome to our E-Library, a platform designed for all book lovers! Our library offers a vast collection of books in various genres, providing a seamless experience for readers across the globe.
            </p>
            <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition duration-300">
              Whether you're looking to immerse yourself in fiction, explore non-fiction, or dive into academic resources, we have something for everyone. Our online book reading feature allows you to enjoy your favorite books from the comfort of your home.
            </p>
            <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition duration-300">
              Our "Borrow" option is designed to make book borrowing easier than ever, allowing you to manage your personal library and keep track of your reading habits. Join us to discover a new way of reading and learning with our digital resources.
            </p>
            <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition duration-300">
              At our E-Library, we believe in making reading accessible to everyone. Our user-friendly interface ensures a smooth experience, whether you're browsing, reading, or borrowing a book. Sign up today and explore our extensive collection!
            </p>

            <div className="mt-8 flex justify-center">
              <Link to="/" className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                Explore
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
            <p className="text-white text-center text-sm">
              Embark on your reading journey with us, where stories come alive, and knowledge is just a click away. Explore our E-Library today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
