import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';  // Import the Navbar
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';  // Import the Login page
import Dashboard from './pages/Dashboard';  // Import Dashboard page
import Booking from './pages/Booking';  // Import Booking page
import Queries from './pages/Queries';  // Import Customer Queries page
import BookingPage from './pages/Bookingpage'
import ViewUsers from './pages/viewUsers';
function App() {
  return (
    <Router>
      <div className="app">
        <ConditionalNavbar /> {/* Conditionally render Navbar */}

        {/* Set up the routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/dashboard" element={<Dashboard />} /> Dashboard route
          <Route path="/bookings" element={<Booking />} /> Booking route
          <Route path="/queries" element={<Queries />} /> Queries route
          <Route path="/users" element={<ViewUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

// Conditional Navbar rendering based on the current path
function ConditionalNavbar() {
  const location = useLocation(); // Get the current location (path)
  const excludeNavbarPages = ['/signup', '/login','/dashboard','/bookings','/queries','/users']; 

  // If the current route is in the excludeNavbarPages, return null (no Navbar)
  if (excludeNavbarPages.includes(location.pathname)) {
    return null;
  }

  // If not, return the Navbar
  return <Navbar />;
}

export default App;