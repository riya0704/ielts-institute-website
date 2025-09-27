import React from 'react';
import Team from './Team';
import Values from './Values';

const About = () => {
  return (
    <div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission: Your Success
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are a team of experienced IELTS educators dedicated to helping students achieve their dream scores. Our mission is to provide high-quality, personalized, and accessible IELTS preparation for everyone.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-1/2">
                <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1573496774375-79b8353acc6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Team" />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
                <p className="mt-2 text-lg text-gray-500">
                  Our team consists of certified IELTS examiners, experienced teachers, and curriculum developers who have a deep understanding of the test and what it takes to succeed.
                </p>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">What We Do</h3>
                <p className="mt-2 text-lg text-gray-500">
                  We provide a comprehensive learning platform with interactive video lessons, personalized feedback, mock tests, and a supportive community to help you stay motivated and on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Values />
    </div>
  );
};

export default About;
