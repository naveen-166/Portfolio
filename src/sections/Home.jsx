// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import gmail from "../assets/gmail.png";
// import git from "../assets/github.png";
// import linkedin from "../assets/linkedin.png";

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//     });
//   }, []);

//   return (
//     <div className="h-screen bg-gradient-to-b from-black via-black to-blue-500 overflow-hidden">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center h-14 p-6 fixed w-full bg-opacity-90 z-10">
//     <h1 className="text-2xl font-bold text-white">Portfolio.</h1>
//     <ul className="flex space-x-6 text-white font-oswald">
//       <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
//       <li><a href="#about" className="hover:text-cyan-400">About</a></li>
//       <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
//       <li><a href="#portfolio" className="hover:text-cyan-400">Portfolio</a></li>
//       <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
//     </ul>
//   </nav>
//       <div className="flex items-center justify-center h-screen">
//         <div
//           className="container mx-auto max-w-5xl p-10 rounded-lg bg-gray-800 bg-opacity-70 flex flex-col md:flex-row items-center shadow-2xl"
//           data-aos="fade-up"
//         >
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <h2 className="text-4xl md:text-6xl font-bold text-white" data-aos="fade-right">Hello, I'm</h2>
//             <h1 className="text-5xl md:text-7xl font-bold mt-2 text-white" data-aos="fade-right">Naveen</h1>
//             <h3 className="text-3xl md:text-4xl text-cyan-400 mt-4" data-aos="fade-right">I'm a Fullstack Developer</h3>
//             <p className="text-gray-400 text-lg mt-6" data-aos="fade-up">
//               Passionate about creating interactive and dynamic web applications. I thrive on solving complex problems and am constantly exploring new technologies to enhance my skills and deliver exceptional user experiences.
//             </p>
//             <div className="flex mt-8 space-x-6">
//               <a href="https://github.com/naveen-166" target="_blank" rel="noopener noreferrer">
//                 <img src={git} alt="GitHub" className="h-7" />
//               </a>
//               <a href="https://www.linkedin.com/in/navince-166ffsf/" target="_blank" rel="noopener noreferrer">
//                 <img src={linkedin} alt="LinkedIn" className="h-7" />
//               </a>
//               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inboxsofnaveen@gmail.com" target="_blank" rel="noopener noreferrer">
//                 <img src={gmail} alt="Email" className="h-7" />
//               </a>
//             </div>
//             {/* Uncomment to add Download CV Button */}
//             {/* <a href="/path-to-your-cv.pdf" className="mt-8 inline-block px-8 py-3 text-lg bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500">
//               Download CV
//             </a> */}
//           </div>
//           {/* Right Section (Image) */}
//           <div className="w-full md:w-1/2 flex justify-center relative">
//             {/* Profile Image inside Hexagonal shape */}
//             <div className="relative w-72 h-72 flex items-center justify-center" data-aos="zoom-in">
//               {/* Hexagon Background */}
//               <div className="absolute inset-0 bg-cyan-400 rounded-xl"></div>
//               {/* Image */}
//               <div className="relative rounded-lg overflow-hidden w-72 h-72">
//                 <img
//                   src="/path-to-your-image.jpg" // Replace with your actual image path
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import gmail from "../assets/gmail.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section id="home" className="h-screen bg-gradient-to-b from-black via-black to-blue-500 overflow-hidden">

      <nav className="flex justify-between items-center h-14 p-6 fixed w-full bg-opacity-90 z-10">
        <h1 className="text-2xl font-bold text-white">Portfolio.</h1>
        <ul className="flex space-x-6 text-white font-oswald">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#project" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <div
          className="container mx-auto max-w-5xl p-10 rounded-lg bg-gray-800 bg-opacity-70 flex flex-col md:flex-row items-center shadow-2xl"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col mt-10">
              <h2 className="text-4xl md:text-5xl font-Agdasima font-bold text-white transition-transform duration-500 hover:scale-105" data-aos="fade-right">
                Hey there, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl font-Agdasima font-bold mt-4 text-gray-400 transition-transform duration-500 hover:scale-105" data-aos="fade-right">
                Naveen
              </h1>
              <h3 className="text-3xl md:text-4xl text-cyan-400 mt-12 font-Porter transition-transform duration-500 hover:scale-105" data-aos="fade-right">
                Dive into My
              </h3>
              <p className="text-gray-400 text-6xl font-Porter mt-4 transition-transform duration-500 hover:scale-105" data-aos="fade-up">
                Creative Journey..
              </p>
            </div>

            {/* <div className="flex mt-8 space-x-6">
              <a href="https://github.com/naveen-166" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="GitHub" className="h-7" />
              </a>
              <a href="https://www.linkedin.com/in/navince-166ffsf/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-7" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inboxsofnaveen@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={gmail} alt="Email" className="h-7" />
              </a>
            </div> */}
            {/* Uncomment to add Download CV Button */}
            <a href="https://drive.google.com/file/d/1i-2ttSrwUN67MnKragR3rPI57_F1YAnE/view?usp=sharing" className="mt-8 inline-block px-7  text-lg bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500">
              Download CV
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-72 h-72 flex items-center justify-center" data-aos="zoom-in">
              <div className="absolute inset-0 bg-cyan-400 rounded-xl"></div>

              <div className="relative rounded-lg overflow-hidden w-72 h-72">
                <img
                  src="img.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
