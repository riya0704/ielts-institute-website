import React from 'react';
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ testimonial, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-50 rounded-lg p-6 transform transition duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-2xl hover:-translate-y-2`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="text-lg text-gray-500">{testimonial.quote}</p>
      <div className="mt-4">
        <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
        <p className="text-base text-gray-500">{testimonial.course}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'The personalized feedback on my writing tasks was a game-changer. I finally understood my mistakes and how to fix them.',
      name: 'Sarah L.',
      course: 'Writing Course',
    },
    {
      quote: 'I was struggling with speaking, but the practice sessions with native speakers helped me gain confidence and improve my score by 2 bands!',
      name: 'John D.',
      course: 'Speaking Course',
    },
    {
      quote: 'The mock tests were incredibly realistic. I felt fully prepared on test day and scored higher than I ever expected.',
      name: 'Emily R.',
      course: 'Comprehensive Course',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
