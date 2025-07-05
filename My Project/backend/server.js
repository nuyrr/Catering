// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// import authRoutes from "./routes/authRoutes.js";
// app.use(cors());
// app.use(express.json());
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));
// app.use('/api/User', require('./routes/userRoutes.js'));
// app.use('/api/queries', require('./routes/queryRoutes'));
// app.use("/api/auth", authRoutes);
// const adminRoutes = require("./routes/adminRoutes");
// app.use("/api/admin", adminRoutes);
// mongoose.connect('mongodb://localhost:27017/dashboardDB')
  // .then(() => console.log("MongoDB Connected"))
  // .catch(err => console.error(err));
// 
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log("Server running on port 5000"));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
const queryRoutes = require("./routes/queryRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/User', require('./routes/userRoutes.js'));
app.use('/api/queries', require('./routes/queryRoutes'));
app.use("/api/auth", authRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/bookings", bookingRoutes);
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);
mongoose.connect("mongodb://localhost:27017/dashboardDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
