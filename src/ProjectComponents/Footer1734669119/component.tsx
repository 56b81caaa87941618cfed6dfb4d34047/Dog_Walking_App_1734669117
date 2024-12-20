import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-8 w-full h-full rounded-[40px] shadow-xl relative overflow-hidden">
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-wrap justify-between h-full">
          
          {/* FOOTER COPY */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-white">PawTracks</h3>
            <p className="text-gray-300">© 2023 PawTracks. All rights reserved. Keeping tails wagging and paws moving.</p>
          </div>

          {/* SOCIALS */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out flex items-center">
                <i className='bx bxl-facebook mr-2'></i>
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out flex items-center">
                <i className='bx bxl-twitter mr-2'></i>
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 ease-in-out flex items-center">
                <i className='bx bxl-instagram mr-2'></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-50"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent opacity-10"></div>
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.2)] rounded-[40px]"></div>
    </footer>
  );
};

export { Footer as component };