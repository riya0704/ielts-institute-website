import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have a question or need more information? We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid md:grid-cols-2 md:gap-8">
            <div className="rounded-lg bg-white shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
              <div className="mt-4 text-gray-500">
                <p><span className="font-bold">Address:</span> 123 IELTS Lane, Education City, 12345</p>
                <p className="mt-2"><span className="font-bold">Email:</span> info@ieltsinstitute.com</p>
                <p className="mt-2"><span className="font-bold">Phone:</span> (123) 456-7890</p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-900">Follow Us</h4>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-900">Our Location</h4>
                <div className="mt-2 h-64 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md p-6 mt-8 md:mt-0">
              <h3 className="text-xl font-bold text-gray-900">Send us a Message</h3>
              {isSubmitted ? (
                <div className="mt-4 text-center text-green-500 font-bold">Thank you for your message! We will get back to you soon.</div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
