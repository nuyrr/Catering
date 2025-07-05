import React from 'react';
import { Link } from 'react-router-dom';
const Events = () => {
  const eventData = [
    {
      title: 'Wedding Celebrations',
      image: '/src/assets/wedding.jpg',
      description: 'Elegant and luxurious setups for your big day.',
    },
    {
      title: 'Corporate Dinners',
      image: '/src/assets/coaporate-dinner.jpg',
      description: 'Professional catering for business events.',
    },
    {
      title: 'Private Gatherings',
      image: '/src/assets/main event.jpeg',
      description: 'Perfect ambiance for private affairs.',
    },
    {
      title: 'Birthday Parties',
      image: '/src/assets/birthday.avif',
      description: 'Fun-filled celebrations tailored for you.',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-black mb-4">
          Let Us Cater Your Special Events
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Catering to the beautiful moments that matter. Whether it's a wedding, corporate party, birthday, or private dinner — we ensure an unforgettable experience.
        </p>
        <Link to="/BookingPage">
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Event Reservation
        </button>
        </Link>
      </div>



      {/* Bottom Cards */}
      <div className="bg-white px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {eventData.map((event, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-black mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
