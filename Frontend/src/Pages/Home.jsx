import React from 'react';
import { Link } from 'react-router-dom';
import BookSection from '../components/BookSection';
const Home = () => {
    return (
        <div>
            <div class="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white">

                <main class="flex flex-col md:flex-row items-center justify-center mt-10 w-full max-w-4xl">
                    <div class="text-center md:text-left md:w-[65%] p-4">
                        <h2 class="text-4xl font-bold">Getting Started with <br /> <span className='text-yellow-300'>Learn</span><span className='text-slate-900'>Tel</span> <br /> an E-library Platform</h2>
                        <p class="mt-4 max-w-lg mx-auto md:mx-0">
                            We pride ourselves on providing the most up-to-date content for our students to learn each course. We pride ourselves on providing the most up-to-date content for our students.
                        </p>
                    </div>
                    <div class="md:w-[80%] p-4">
                        <video autoPlay muted loop src="./videos/Macbook Pro, Slight Right Tilt.mp4" alt="Placeholder image for e-learning" class="rounded-lg shadow-lg" />
                    </div>
                </main>



                <div class="absolute bottom-0 right-0 p-4">
                    <Link to="/login">
                        <button class="bg-white text-purple-500 px-4 py-2 rounded">Explore more!</button></Link>
                </div>
            </div>

            <BookSection />
        </div>
    );
};

export default Home;
