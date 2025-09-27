import React from 'react';

const Features = () => {
  const features = [
    {
      name: 'Speaking Practice',
      description: 'Interactive sessions with certified examiners to improve your fluency and confidence.',
    },
    {
      name: 'Mock Tests',
      description: 'Simulated test environment with real-time feedback to track your progress.',
    },
    {
      name: 'AI Band Score',
      description: 'Get an instant, accurate band score for your writing and speaking tasks.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive platform provides all the tools and resources you need to achieve your desired IELTS score.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
