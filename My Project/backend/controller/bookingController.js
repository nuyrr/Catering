// const Booking = require('../models/Booking');

// exports.getAllBookings = async (req, res) => {
//   const bookings = await Booking.find();
//   res.json(bookings);
// };

// exports.getBookingById = async (req, res) => {
//   const booking = await Booking.findById(req.params.id);
//   res.json(booking);
// };

// exports.cancelBooking = async (req, res) => {
//   await Booking.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Booking canceled' });
// };
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { name, email, date, time, guests, notes } = req.body;

    const newBooking = new Booking({
      userId: req.user.id,
      name,
      email,
      date,
      time,
      guests,
      notes,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking confirmed successfully', booking: newBooking });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId", "name email");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking" });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json({ message: "Booking cancelled" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking" });
  }
};
