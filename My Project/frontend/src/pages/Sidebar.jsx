import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const Sidebar = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleLogout = () => {
    // Show SweetAlert confirmation for logging out
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the actual logout process
        // You can clear session or authentication data here

        // Example: Redirect user to the login page after logout
        navigate('/');  // Redirect to home page
      }
    });
  };

  return (
    <div className="bg-gray-900 text-white w-64 p-4 h-screen sticky top-0">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <ul className="space-y-4">
        
         <li>
   <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded">
      Dashboard
   </Link>
 </li>
        <li>
          <Link to="/bookings" className="block px-4 py-2 hover:bg-gray-700 rounded">
            Manage Bookings
          </Link>
        </li>
        <li>
        <Link to="/users" className="block px-4 py-2 hover:bg-gray-700 rounded">
      View Users
    </Link>
    </li>
        <li>
          <Link to="/queries" className="block px-4 py-2 hover:bg-gray-700 rounded">
            Customer Queries
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}  // Trigger the SweetAlert on click
            className="block w-full px-4 py-2 hover:bg-gray-700 rounded text-left"
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
