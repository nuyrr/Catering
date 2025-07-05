const mongoose = require('mongoose');
const querySchema = new mongoose.Schema({
  user: String,
  message: String,
  reply: String,
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
  responded: { type: Boolean, default: false }
});

module.exports = mongoose.model('Query', querySchema);
