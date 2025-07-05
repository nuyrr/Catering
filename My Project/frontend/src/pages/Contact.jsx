import React, { useState } from 'react';
import ContactPic from '../assets/ContactPic.jpg'; // Your image path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-gray-900">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${ContactPic})` }}>
        {/* Background image */}
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-gray-100 shadow-2xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 mt-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 mt-4 bg-black text-white font-semibold rounded-lg border-2 border-gray-600 hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        {/* New Button to Open WhatsApp Chat */}
        <div className="flex items-center justify-center mt-8">
          <a
            href="https://wa.me/923334625996" // Updated with the WhatsApp URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-600 p-4 rounded-lg text-white hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span className="text-lg">Open WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
