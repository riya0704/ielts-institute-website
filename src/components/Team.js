import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Instructor',
      imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'John is a certified IELTS examiner with over 10 years of experience in teaching and curriculum development.',
    },
    {
      name: 'Jane Smith',
      role: 'Writing Specialist',
      imageUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
      bio: 'Jane is a writing specialist who has helped hundreds of students improve their essay writing skills and achieve high scores.',
    },
    {
      name: 'Peter Jones',
      role: 'Speaking & Listening Coach',
      imageUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
      bio: 'Peter is a speaking and listening coach who specializes in helping students improve their pronunciation, fluency, and listening comprehension.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experienced Instructors
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:shadow-xl hover:scale-105 transition duration-300">
                <img className="w-32 h-32 rounded-full mx-auto" src={member.imageUrl} alt={member.name} />
                <h3 className="mt-5 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-base text-gray-500">{member.role}</p>
                <p className="mt-4 text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
