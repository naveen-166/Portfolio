import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import github from "../assets/github.svg"; // Ensure the correct path to your image

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="project" className="h-screen bg-gradient-to-b from-blue-500 via-black to-black text-white flex flex-col items-center justify-center">
      <h2 data-aos="fade-up" className="text-center text-gray-200 text-4xl font-bold mb-8">Projects</h2>
      <div data-aos="fade-in" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl w-full">
        {/* Project 1 */}
        <div className="relative p-6 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-xl hover:z-10">
          <h3 className="text-2xl font-bold mb-4">Hand Gesture Media Controller</h3>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg text-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-700 p-4">
            <p className="mb-4 font-mono">A project that uses computer vision to control media playback with hand gestures.</p>
            <div className='flex items-center space-x-2'>
              <a
                href="https://github.com/naveen-166/Hand-Gesture-Media-controller"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400"
              >
                View on GitHub
              </a>
              <img src={github} alt="GitHub" className='w-6 h-6' />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative p-6 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-xl hover:z-10">
          <h3 className="text-2xl font-bold mb-4">Resume Shortlister</h3>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg text-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-700 p-4">
            <p className="mb-4 font-mono">An AI-based application that automates the resume shortlisting process.</p>
            <div className='flex items-center space-x-2'>
              <a
                href="https://github.com/naveen-166/Resume-Shortlister"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400"
              >
                View on GitHub
              </a>
              <img src={github} alt="GitHub" className='w-6 h-6' />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative p-6 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-xl hover:z-10">
          <h3 className="text-2xl font-bold mb-4">Spam Email Detector</h3>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg text-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-700 p-4">
            <p className="mb-4 font-mono">A machine learning model to identify and filter out spam emails.</p>
            <div className='flex items-center space-x-2'>
              <a
                href="https://github.com/naveen-166/Spam-Email-Detector"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400"
              >
                View on GitHub
              </a>
              <img src={github} alt="GitHub" className='w-6 h-6' />
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="relative p-6 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-xl hover:z-10">
          <h3 className="text-2xl font-bold mb-4">E-Commerce Website</h3>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg text-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-700 p-4">
            <p className="mb-4 font-mono">A full-stack e-commerce platform built using the MERN stack.</p>
            <div className='flex items-center space-x-2'>
              <a
                href="https://github.com/naveen-166/E_Commerce-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400"
              >
                View on GitHub
              </a>
              <img src={github} alt="GitHub" className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
