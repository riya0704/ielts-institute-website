import React, { useState } from 'react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      name: 'IELTS Comprehensive Course',
      description: 'An all-in-one course covering all four modules: Speaking, Listening, Reading, and Writing. Perfect for beginners and those looking for a complete review.',
      price: '$499',
      icon: 'fas fa-graduation-cap',
      details: {
        duration: '12 weeks',
        features: [
          'Live online classes',
          'Personalized feedback',
          'Mock tests and practice exercises',
          'Comprehensive study materials',
        ],
      },
    },
    {
      name: 'IELTS Speaking and Listening',
      description: 'Focused practice on the Speaking and Listening modules. Includes mock interviews and real-time feedback.',
      price: '$299',
      icon: 'fas fa-microphone-alt',
      details: {
        duration: '6 weeks',
        features: [
          'One-on-one speaking sessions',
          'Interactive listening exercises',
          'Pronunciation and fluency practice',
          'Expert feedback and guidance',
        ],
      },
    },
    {
      name: 'IELTS Reading and Writing',
      description: 'In-depth strategies for the Reading and Writing modules. Learn how to tackle different question types and write high-scoring essays.',
      price: '$299',
      icon: 'fas fa-book-reader',
      details: {
        duration: '6 weeks',
        features: [
          'Essay writing workshops',
          'Reading comprehension strategies',
          'Grammar and vocabulary building',
          'Timed practice tests',
        ],
      },
    },
    {
      name: 'IELTS Mock Test Package',
      description: 'A series of full-length mock tests to simulate the real exam experience. Get detailed performance analysis and identify your weak areas.',
      price: '$99',
      icon: 'fas fa-file-alt',
      details: {
        duration: '4 weeks',
        features: [
          '5 full-length mock tests',
          'Detailed performance reports',
          'Expert evaluation and feedback',
          'Identify your strengths and weaknesses',
        ],
      },
    },
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find the Right Course for You
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a range of courses to suit your individual needs and learning style. Choose from our comprehensive packages or focus on specific modules.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {courses.map((course) => (
              <div key={course.name} className="bg-gray-50 rounded-lg shadow-md p-6 transform hover:shadow-xl hover:scale-105 transition duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className={course.icon}></i>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{course.name}</h3>
                <p className="mt-2 text-base text-gray-500">{course.description}</p>
                <p className="mt-4 text-2xl font-bold text-blue-600">{course.price}</p>
                <div className="mt-6 flex justify-between">
                  <button onClick={() => openModal(course)} className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-2">Learn More</button>
                  <button className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 ml-2">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <i className={`${selectedCourse.icon} text-blue-600`}></i>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedCourse.name}</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Duration: {selectedCourse.details.duration}</p>
                        <ul className="mt-4 list-disc list-inside text-sm text-gray-500">
                          {selectedCourse.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
