import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Experienced & Certified Trainers',
      description: 'Our trainers are highly experienced and certified to provide you with the best IELTS coaching.',
      icon: 'fas fa-chalkboard-teacher',
    },
    {
      title: 'Comprehensive Study Material',
      description: 'We provide you with comprehensive study material that covers all aspects of the IELTS exam.',
      icon: 'fas fa-book-open',
    },
    {
      title: 'Personalized Attention & Feedback',
      description: 'We provide personalized attention and feedback to each student to help them improve their score.',
      icon: 'fas fa-user-friends',
    },
    {
      title: 'Flexible Timings & Batches',
      description: 'We offer flexible timings and batches to suit the needs of our students.',
      icon: 'fas fa-clock',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Path to IELTS Success
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className={reason.icon}></i>
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-base text-gray-500">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
