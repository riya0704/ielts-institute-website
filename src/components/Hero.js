import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Achieve Your <span className="text-blue-200">IELTS</span> Dream Score
            </h1>
            <p className="mt-3 text-lg text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Personalized learning, expert tutors, and proven strategies to help you succeed. Join thousands of students who have aced their IELTS with us.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="#!" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 animate-pulse-slow">
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#!" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:py-4 md:text-lg md:px-10">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img className="w-full rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1554224155-83e3576f358f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="IELTS Preparation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
