const express = require('express');
const {
  getAllBookings,
  getBookingById,
  cancelBooking,
  createBooking
} = require('../controllers/bookingController');

const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// POST /create - Create a booking (auth required)
router.post('/create', authenticateUser, createBooking);

// GET / - Fetch all bookings
router.get('/', getAllBookings);

// GET /:id - Fetch booking by ID
router.get('/:id', getBookingById);

// DELETE /:id - Cancel booking by ID
router.delete('/:id', cancelBooking);

module.exports = router;
