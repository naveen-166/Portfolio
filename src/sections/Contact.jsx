import gmail from "../assets/gmail.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="contact" className="h-screen bg-gradient-to-b from-black via-black to-blue-500 flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">Connect with Me</h2>
      <p className="text-lg mb-12 font-Porter text-gray-500 text-center px-4" data-aos="fade-up">
        I would love to hear from you! Feel free to reach out through any of the platforms below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full">
        {/* Gmail */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=inboxsofnaveen@gmail.com" 
          className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" 
          data-aos="fade-right"
        >
          <img src={gmail} alt="Gmail" className="w-16 h-16 mb-4" />
          <h3 className="text-2xl font-semibold">Gmail</h3>
          <p className="mt-2">inboxsofnaveen@gmail.com</p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/naveen-166" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" 
          data-aos="fade-in"
        >
          <img src={git} alt="GitHub" className="w-16 h-16 mb-4" />
          <h3 className="text-2xl font-semibold">GitHub</h3>
          <p className="mt-2">@naveen-166</p>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/navince-166ffsf/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" 
          data-aos="fade-left"
        >
          <img src={linkedin} alt="LinkedIn" className="w-16 h-16 mb-4" />
          <h3 className="text-2xl font-semibold">LinkedIn</h3>
          <p className="mt-2">/navince-166ffsf</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
