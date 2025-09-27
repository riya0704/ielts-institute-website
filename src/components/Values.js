import React from 'react';

const Values = () => {
  const values = [
    {
      name: 'Excellence',
      description: 'We strive for excellence in everything we do, from our teaching methodology to our student support.',
      icon: 'fas fa-medal',
    },
    {
      name: 'Integrity',
      description: 'We believe in honesty and transparency in all our interactions with students, parents, and partners.',
      icon: 'fas fa-shield-alt',
    },
    {
      name: 'Commitment',
      description: 'We are committed to our students success and go the extra mile to help them achieve their goals.',
      icon: 'fas fa-handshake',
    },
    {
      name: 'Innovation',
      description: 'We embrace innovation and use the latest technology to create an engaging and effective learning experience.',
      icon: 'fas fa-lightbulb',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Principles That Guide Us
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-gray-50 rounded-lg shadow-md p-6 text-center transform hover:shadow-xl hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <i className={value.icon}></i>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{value.name}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
