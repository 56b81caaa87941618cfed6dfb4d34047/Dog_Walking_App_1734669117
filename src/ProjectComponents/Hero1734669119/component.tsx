import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-[40px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Walk This Way: Your Dog's New Best Friend</h1>
          <p className="text-xl mb-6 text-gray-300">Connect with trusted dog walkers in your neighborhood for tail-wagging adventures</p>
        </div>
        <div className="md:w-full mt-8 md:mt-0">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-[40px] p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dog_Walking_App_1734669117/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/dcef831cb70a4f619bbc68b638bf420b.jpeg`} alt="Game concept" className="w-full h-auto rounded-[36px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }