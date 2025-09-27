import React from 'react';
import { Link } from 'react-router-dom';

const BlogRoll = ({ posts }) => {
  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <div key={post.slug} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
          <p className="mt-2 text-base text-gray-500">{post.excerpt}</p>
          <div className="mt-4 flex items-center">
            <p className="text-sm text-gray-400">{post.date} by {post.author}</p>
            <Link to={`/blog/${post.slug}`} className="ml-auto text-sm font-semibold text-blue-600 hover:text-blue-700">Read More &rarr;</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogRoll;
