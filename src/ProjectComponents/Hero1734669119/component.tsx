import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black py-16 text-white w-full h-full relative">
      <div className="container mx-auto px-4 h-full">
        <div className="absolute inset-0 overflow-hidden">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dog_Walking_App_1734669117/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/dcef831cb70a4f619bbc68b638bf420b.jpeg`} alt="Game concept" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/2 mb-8 md:mb-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-[40px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-4xl font-bold mb-4 text-gray-100">Walk This Way: Your Dog's New Best Friend</h1>
            <p className="text-xl mb-6 text-gray-300">Connect with trusted dog walkers in your neighborhood for tail-wagging adventures</p>
          </div>
          
          <div className="md:w-1/2 ml-0 md:ml-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-[40px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Services</h2>
            <table className="w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left text-gray-300 pb-2">Service</th>
                  <th className="text-right text-gray-300 pb-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-300 py-2"><i className='bx bx-walk mr-2'></i>30-min Walk</td>
                  <td className="text-right text-gray-300 py-2">$20</td>
                </tr>
                <tr>
                  <td className="text-gray-300 py-2"><i className='bx bx-run mr-2'></i>60-min Walk</td>
                  <td className="text-right text-gray-300 py-2">$35</td>
                </tr>
                <tr>
                  <td className="text-gray-300 py-2"><i className='bx bx-home-heart mr-2'></i>Overnight Stay</td>
                  <td className="text-right text-gray-300 py-2">$75</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Begin Order
              </button>
              <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded-full border border-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }