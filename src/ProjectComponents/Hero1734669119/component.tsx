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
        
        <div className="relative z-10 mt-16 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-[40px] p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Dog Information Form</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Basic Information</h3>
              <div className="mb-4">
                <label htmlFor="dogName" className="block text-sm font-medium text-gray-300 mb-1">Dog's Name</label>
                <input type="text" id="dogName" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="dogBreed" className="block text-sm font-medium text-gray-300 mb-1">Breed</label>
                <input type="text" id="dogBreed" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="dogAge" className="block text-sm font-medium text-gray-300 mb-1">Age</label>
                <input type="number" id="dogAge" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Health Information</h3>
              <div className="mb-4">
                <label htmlFor="dogWeight" className="block text-sm font-medium text-gray-300 mb-1">Weight (lbs)</label>
                <input type="number" id="dogWeight" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="dogVaccinations" className="block text-sm font-medium text-gray-300 mb-1">Vaccinations</label>
                <textarea id="dogVaccinations" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" rows={3}></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="dogMedications" className="block text-sm font-medium text-gray-300 mb-1">Medications</label>
                <textarea id="dogMedications" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" rows={3}></textarea>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Special Requirements</h3>
              <div className="mb-4">
                <label htmlFor="dogDiet" className="block text-sm font-medium text-gray-300 mb-1">Dietary Restrictions</label>
                <textarea id="dogDiet" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" rows={3}></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="dogExercise" className="block text-sm font-medium text-gray-300 mb-1">Exercise Needs</label>
                <textarea id="dogExercise" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" rows={3}></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="dogBehavior" className="block text-sm font-medium text-gray-300 mb-1">Behavioral Notes</label>
                <textarea id="dogBehavior" className="w-full bg-white bg-opacity-10 rounded-lg p-2 text-white" rows={3}></textarea>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Submit Dog Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }