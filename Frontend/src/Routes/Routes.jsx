import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import MyLibrary from '../Pages/MyLibrary';
import EJournals from '../Pages/EJournals';
import Magazines from '../Pages/Magazines';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Novel from '../Pages/Novel'
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';
import BorrowBook from '../Pages/BorrowBook';
import AdminBorrowersList from '../Pages/Admin/AdminBorrowersList';
import AdminLogin from '../Pages/Admin/AdminLogin';
import LibraryApp from '../Pages/LibraryApp';
import FAQ from '../Pages/Faq';

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/my-library" element={<MyLibrary />} />
        <Route path="/library" element={<LibraryApp />} />
        <Route path="/e-journals" element={<EJournals />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/novels" element={<Novel/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/borrow" element={<BorrowBook />} />
        <Route path="/admin/borrowers" element={<AdminBorrowersList />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default AppRoutes;
