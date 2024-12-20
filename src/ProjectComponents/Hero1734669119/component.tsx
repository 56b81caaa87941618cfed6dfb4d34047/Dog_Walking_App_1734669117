import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Walk This Way: Your Dog's New Best Friend</h1>
          <p className="text-xl mb-6">Connect with trusted dog walkers in your neighborhood for tail-wagging adventures</p>
        </div>
        <div className="md:w-1/2">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dog_Walking_App_1734669117/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/dcef831cb70a4f619bbc68b638bf420b.jpeg`} alt="Game concept" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }