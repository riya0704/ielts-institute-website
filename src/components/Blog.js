import React, { useState } from 'react';
import BlogRoll from './BlogRoll';

const Blog = () => {
  const allPosts = [
    {
      title: 'Mastering the IELTS Speaking Test: Tips for a High Score',
      excerpt: 'Learn how to impress the examiner and achieve a high band score in the IELTS speaking test with our expert tips and strategies.',
      date: 'May 15, 2024',
      author: 'John Doe',
      category: 'Speaking',
      slug: 'mastering-the-ielts-speaking-test',
    },
    {
      title: 'Common Mistakes to Avoid in the IELTS Writing Task 2',
      excerpt: 'Discover the most common mistakes students make in the IELTS writing task 2 and how you can avoid them to improve your score.',
      date: 'May 10, 2024',
      author: 'Jane Smith',
      category: 'Writing',
      slug: 'common-mistakes-in-ielts-writing',
    },
    {
      title: 'How to Improve Your Reading Speed and Comprehension for the IELTS',
      excerpt: 'Struggling with the IELTS reading section? These proven techniques will help you read faster and understand the passages better.',
      date: 'May 5, 2024',
      author: 'Peter Jones',
      category: 'Reading',
      slug: 'improve-your-reading-speed-for-ielts',
    },
    {
      title: 'Top 5 Strategies for Acing the IELTS Listening Test',
      excerpt: 'Learn the top 5 strategies that will help you ace the IELTS listening test and achieve a high band score.',
      date: 'April 28, 2024',
      author: 'Emily Davis',
      category: 'Listening',
      slug: 'top-5-strategies-for-ielts-listening',
    },
  ];

  const [posts, setPosts] = useState(allPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterPosts(term, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (term, category) => {
    let filteredPosts = allPosts;

    if (term) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category !== 'All') {
      filteredPosts = filteredPosts.filter((post) => post.category === category);
    }

    setPosts(filteredPosts);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Blog</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles & Tips
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Speaking">Speaking</option>
                <option value="Writing">Writing</option>
                <option value="Reading">Reading</option>
                <option value="Listening">Listening</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <BlogRoll posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
