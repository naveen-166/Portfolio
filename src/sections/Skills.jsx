import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import node from "../assets/nodejs.png";
import html from "../assets/html.svg";
import tailwind from "../assets/tailwindcss.svg";
import mongodb from "../assets/mongodb.svg";
import c from "../assets/c.png";
import tf from "../assets/tensorflow.svg";
import postman from "../assets/postman.svg";
import flutter from "../assets/flutter.svg";
import github from "../assets/github.svg";
import bulb from "../assets/bulb.png";
import azure from '../assets/azure.svg'

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section id="skills" className="h-screen bg-gradient-to-b from-black via-black to-blue-500 flex items-center justify-center">
            <div data-aos="fade-in" className="container mx-auto max-w-7xl p-10 rounded-lg bg-gray-800 bg-opacity-50 flex flex-col items-center shadow-2xl">
                <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-white mb-8 flex items-center mb-20">
                    Stuffs <img src={bulb} className='size-14 ml-3' alt="Bulb" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div data-aos="fade-right" className="webdev-skills border border-gray-400 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-3xl text-white mb-4 font-Porter text-center">Web Development</h3>
                        <div className='flex flex-wrap justify-center'>
                            <img src={html} alt="HTML icon" className='size-28 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript icon" className='size-28 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React icon" className='size-28 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={node} alt="Node.js icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={tailwind} alt="Tailwind CSS icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={mongodb} alt="MongoDB icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express logo" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="devops-skills border border-gray-400 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-3xl text-white mb-4 font-Porter text-center">DevOps Skills</h3>
                        <div className='flex flex-wrap justify-center'>
                            <img src={c} alt="C icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://techstack-generator.vercel.app/java-icon.svg" alt="Java icon" className='size-20 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python icon" className='size-20 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={github} alt="GitHub icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS icon" className='size-24 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={tf} alt="TensorFlow icon" className='size-20 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={postman} alt="Postman icon" className='size-20 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src={azure} alt="Flutter icon" className='size-16 m-2 transition-transform duration-300 transform hover:scale-110' />
                            <img src='https://skillicons.dev/icons?i=opencv' alt="OpenCV icon" className='size-16 m-2 transition-transform duration-300 transform hover:scale-110' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
