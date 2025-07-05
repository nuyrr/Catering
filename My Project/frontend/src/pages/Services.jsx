// // src/pages/Services.js

// import React from 'react';

// function Services() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Intro Section */}
//       <section className="bg-black text-white py-20">
//         <div className="container mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold mb-4">Our Catering Services</h2>
//           <p className="text-lg mb-8">
//             We provide premium catering services for a wide variety of events including seminars, corporate events, colleges, and private parties.
//           </p>
//         </div>
//       </section>

//       {/* Featured Events Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto text-center">
//           <h3 className="text-3xl font-semibold text-gray-800 mb-12">Events We've Hosted</h3>

//           {/* Event Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {/* Event 1 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 alt="College Event"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-4">College Graduation Party</h4>
//                 <p className="text-gray-600">
//                   We catered a grand college graduation party, serving over 500 students with a variety of delicious and beautifully presented dishes.
//                 </p>
//               </div>
//             </div>

//             {/* Event 2 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 alt="Corporate Seminar"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-4">Corporate Seminar Lunch</h4>
//                 <p className="text-gray-600">
//                   We provided a high-end lunch for a corporate seminar, offering both buffet and plated meal options that catered to all dietary needs.
//                 </p>
//               </div>
//             </div>

//             {/* Event 3 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/400x250"
//                 alt="Seminar Catering"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-4">Seminar Networking Dinner</h4>
//                 <p className="text-gray-600">
//                   A networking dinner for a prestigious seminar where we catered a selection of appetizers, main courses, and desserts to facilitate mingling.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="bg-gray-900 text-white py-20">
//         <div className="container mx-auto text-center px-4">
//           <h3 className="text-3xl font-semibold mb-6">Ready to Make Your Event Unforgettable?</h3>
//           <p className="text-lg mb-8">
//             Whether it's a corporate seminar or a private party, we have the catering solution for you. Let us handle the food while you focus on the event.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
//           >
//             Contact Us for a Quote
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Services;
// src/pages/Services.js

import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Intro Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Our Catering Services</h2>
          <p className="text-lg mb-8">
            We provide premium catering services for a wide variety of events including seminars, corporate events, colleges, and private parties.
          </p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">Events We've Hosted</h3>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/src/assets/annual-function.jpeg"
                alt="College Event"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">College Graduation Party</h4>
                <p className="text-gray-600">
                  We catered a grand college graduation party, serving over 500 students with a variety of delicious and beautifully presented dishes.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/src/assets/annual-function2.jpeg"
                alt="Corporate Seminar"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Corporate Seminar Lunch</h4>
                <p className="text-gray-600">
                  We provided a high-end lunch for a corporate seminar, offering both buffet and plated meal options that catered to all dietary needs.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/src/assets/annual-function3.jpeg"
                alt="Seminar Catering"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Seminar Networking Dinner</h4>
                <p className="text-gray-600">
                  A networking dinner for a prestigious seminar where we catered a selection of appetizers, main courses, and desserts to facilitate mingling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-semibold mb-6">Ready to Make Your Event Unforgettable?</h3>
          <p className="text-lg mb-8">
            Whether it's a corporate seminar or a private party, we have the catering solution for you. Let us handle the food while you focus on the event.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Contact Us for a Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
