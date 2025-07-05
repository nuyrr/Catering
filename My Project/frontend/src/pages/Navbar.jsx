// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import logo from '../assets/logo.jpeg'; // Make sure you add your logo image

// // function Navbar() {
// //   return (
// //     <nav className="bg-black text-white p-4 shadow-md">
// //       <div className="flex items-center space-x-6">
// //         <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Logo */}
// //         <ul className="flex ml-auto space-x-8">
// //           <li>
// //             <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
// //           </li>
// //           <li>
// //             <Link to="/menu" className="hover:text-gray-400 transition duration-300">Menu</Link>
// //           </li>
// //           <li>
// //             <Link to="/events" className="hover:text-gray-400 transition duration-300">Events</Link>
// //           </li>
// //           <li>
// //             <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpeg'; // Make sure you add your logo image

// function Navbar() {
//   return (
//     <nav className="bg-black text-white p-4 shadow-md">
//       <div className="flex items-center justify-between">
//         <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Logo */}
//         <ul className="flex ml-auto space-x-8 items-center">
//           <li>
//             <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
//           </li>
//           <li>
//             <Link to="/menu" className="hover:text-gray-400 transition duration-300">Menu</Link>
//           </li>
//           <li>
//             <Link to="/events" className="hover:text-gray-400 transition duration-300">Events</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
//           </li>
//           {/* Create Account Button */}
//           <li>
//             <Link 
//               to="/Signup" 
//               className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               Create Account
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// src/pages/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Make sure you add your logo image

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Logo */}
        <ul className="flex ml-auto space-x-8 items-center">
          <li>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gray-400 transition duration-300">Menu</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400 transition duration-300">Services</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400 transition duration-300">Events</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
          </li>
          {/* Create Account Button */}
          <li>
            <Link 
              to="/signup" 
              className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Create Account
            </Link>
          </li>
          {/* Login Button */}
          <li>
            <Link 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
