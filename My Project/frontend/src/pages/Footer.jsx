import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Section 1: Company Name, Address & Phone */}
          <div>
            <h1 className="text-3xl font-bold text-center text-white mb-6">Fazal Events</h1>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              <strong>Office Address:</strong> 123 Catering Street, Food City, Country
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-sm">
              <strong>Email:</strong> <a href="mailto:youremail@gmail.com" className="hover:underline">youremail@gmail.com</a>
            </p>
          </div>
          
          {/* Section 2: Events */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Events</h3>
            <ul className="space-y-2">
              <li className="text-sm">Weddings</li>
              <li className="text-sm">Corporate Events</li>
              <li className="text-sm">Birthday Parties</li>
              <li className="text-sm">Anniversaries</li>
              <li className="text-sm">Holiday Parties</li>
              <li className="text-sm">Product Launches</li>
              <li className="text-sm">Private Dinners</li>
            </ul>
          </div>

          {/* Section 3: Food Types */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Food</h3>
            <ul className="space-y-2">
              <li className="text-sm">Vegetarian Dishes</li>
              <li className="text-sm">Non-Vegetarian Dishes</li>
              <li className="text-sm">Desserts</li>
              <li className="text-sm">Appetizers</li>
              <li className="text-sm">Salads</li>
              <li className="text-sm">Buffet Options</li>
              <li className="text-sm">Drinks & Beverages</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Social Media & WhatsApp */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="https://wa.me/yourwhatsappphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              <i className="fab fa-whatsapp text-3xl"></i>
            </a>

            <a
              href="https://instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>

            <a
              href="https://facebook.com/yourfacebookhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <i className="fab fa-facebook text-3xl"></i>
            </a>

            <a
              href="https://twitter.com/yourtwitterhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>

            <a
              href="mailto:youremail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fas fa-envelope text-3xl"></i>
            </a>
          </div>
          <p className="text-xs">Stay connected with us for the latest updates and promotions!</p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p className="text-xs">
            © 2025 Fazal Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
