const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  email: String,
  date: String,
  time: String,
  guests: Number,
  notes: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
