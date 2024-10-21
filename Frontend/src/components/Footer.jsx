import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=" p-8 w-auto bg-slate-800  ">
      <div className="main flex flex-col items-center h-[60%]">
        <div className="flex flex-row justify-start h-[40vh]">
          <p className='text-white  text-6xl poppins-bold-italic w-[30%]  p-4 '>Choose Your Learning Path Wisely...</p>
          <img className='w-[40%] ' src="/images/image 24.svg" alt="boy" />
          <div className="images">
          </div>
          <div className="text-white ">
            <ul className='flex flex-col w-8 gap-8 text-5xl'>
              <li title='Facebook' className='hover:text-blue-400'><a href="#"><i class="ri-facebook-circle-line"></i></a></li>
              <li title='Whatsapp' className='hover:text-lime-400'><a href="#"><i class="ri-whatsapp-line"></i></a></li>
              <li title='Instagram' className='hover:text-amber-700'><a href="#"><i class="ri-instagram-line"></i></a></li>
              <li title='Linkedin' className='hover:text-sky-400'><a href="#"><i class="ri-linkedin-line"></i></a></li>
            </ul>
          </div>
          <div className="text-white flex flex-col w-[20%] justify-center gap-y-8 items-end">
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%]  border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/Faq">FAQ</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%]  border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/Login">Login</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%]  border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/Contact">Contact Us</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%] border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/About">About Us</Link>
          </div>
        </div>
        <div className="text-9xl text-white mb-4 mt-4 Orbitron   p-4"><span className='text-yellow-300'>LEARN</span>TEL</div>
      </div>
<div className="flex justify-between w-full">
<span className='text-white'> <details><summary>&copy; Copyrighted by</summary>
  <p>Sandeep Behera</p>
  <p>Shubhadeep Roy</p>
  <p>Sushil Ku. Das</p>
  <p>Partha Sarathi Ratha</p>
  <p>Rajeev Mishra</p>
  </details></span>
  <span className='text-white'> 2024-Onwards</span>
  <span className='text-white'> <details><summary>Special Thanks for Contributing</summary>
  <p>Sasmita Ojha (Designing)</p>
  <p>Sahil Khan (Backend)</p>
  
  </details></span>
</div>
    </footer>
  );
};

export default Footer;
