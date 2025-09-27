import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the duration of the IELTS coaching program?',
      answer: 'The duration of our IELTS coaching program is 3 months. We also offer a fast-track program that can be completed in 1 month.',
    },
    {
      question: 'Do you provide study material for the IELTS exam?',
      answer: 'Yes, we provide comprehensive study material that covers all aspects of the IELTS exam. Our study material is regularly updated to reflect the latest exam pattern and trends.',
    },
    {
      question: 'How can I enroll in the IELTS coaching program?',
      answer: 'You can enroll in our IELTS coaching program by visiting our institute or by calling us at the number provided on our website. You can also fill out the online enrollment form on our website.',
    },
    {
      question: 'Do you offer a free demo class?',
      answer: 'Yes, we offer a free demo class to help you get an idea of our teaching methodology and the quality of our coaching.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Frequently Asked Questions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Questions, Answered
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md">
                <button
                  onClick={() => handleClick(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className={`h-6 w-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-6">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
