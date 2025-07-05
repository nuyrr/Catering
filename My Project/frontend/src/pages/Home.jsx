import React from 'react';

import background from '../assets/background2.jpg';
import Footer from '../pages/Footer';

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Our Fazal catering
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your event, our delicious food. Let us make your special occasion unforgettable!
          </p>
          <a
            href="#menu"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </div>



      {/* Menu Section */}
      <div id="menu" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Appetizers</h3>
            <ul className="space-y-2">
              <li>Spring Rolls</li>
              <li>Stuffed Mushrooms</li>
              <li>Bruschetta</li>
            </ul>
          </div>
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Main Courses</h3>
            <ul className="space-y-2">
              <li>Grilled Chicken</li>
              <li>Veggie Pasta</li>
              <li>Beef Wellington</li>
            </ul>
          </div>
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Desserts</h3>
            <ul className="space-y-2">
              <li>Chocolate Cake</li>
              <li>Fruit Tart</li>
              <li>Cheesecake</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Our Events</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          We provide catering for all types of events, from corporate gatherings to personal celebrations.
        </p>
        <div className="flex justify-center gap-8">
          <div className="bg-white text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Weddings</h3>
            <p>Elegant catering for your special day with customized menu options.</p>
          </div>
          <div className="bg-white text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Corporate Events</h3>
            <p>Professional catering for corporate meetings and conferences.</p>
          </div>
          <div className="bg-white text-black shadow-lg rounded-lg p-6 w-72">
            <h3 className="text-xl font-semibold mb-4">Parties</h3>
            <p>Delicious catering for any kind of party or celebration.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-black mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-black mb-2">Message</label>
            <textarea
              id="message"
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  
  );
 
}

export default Home;
