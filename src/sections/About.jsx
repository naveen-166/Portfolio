import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="about" className="h-screen bg-gradient-to-b from-blue-500 via-black to-black overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <div
          className="container mx-auto max-w-5xl p-10 rounded-lg bg-gray-800 bg-opacity-50 flex flex-col items-center font-Poppins shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-Agdasima font-bold text-white transition-transform duration-500 hover:scale-105" data-aos="fade-in">
            Hi, I’m Naveen!
          </h2>
          <h3 className="text-3xl md:text-4xl text-cyan-400 mt-12 font-Porter transition-transform duration-500 hover:scale-105" data-aos="fade-in">
            A Pre-Final Year Student
          </h3>
          <p className="text-gray-400 text-lg mt-14 transition-transform duration-500 hover:scale-105" data-aos="fade-up">
            I specialize in Artificial Intelligence and Data Science, with a strong foundation in machine learning and deep learning using frameworks like PyTorch and TensorFlow. 
          </p>
          <p className="text-gray-400 text-lg mt-4 transition-transform duration-500 hover:scale-105" data-aos="fade-up">
            As a MERN stack developer, I create dynamic web applications and enjoy combining my AI knowledge with web development to build innovative solutions. 
          </p>
          <p className="text-gray-400 text-lg mt-4 transition-transform duration-500 hover:scale-105" data-aos="fade-up">
            I love tackling challenges and continuously learning in this ever-evolving field. Excited for what lies ahead!
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
