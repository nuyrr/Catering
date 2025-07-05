const Booking = require('../models/Booking');
const User = require('../models/User');

exports.getDashboardStats = async (req, res) => {
  try {
    const numberOfSales = await Booking.countDocuments();
    const totalRevenue = await Booking.aggregate([
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    const opportunities = await User.countDocuments();
    const averageIncome = totalRevenue[0]?.total || 0;

    res.json({
      numberOfSales,
      totalRevenue: totalRevenue[0]?.total || 0,
      averageIncome,
      opportunities
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
exports.getAdminStats = (req, res) => {
  res.json({
    numberOfSales: 3450,
    totalRevenue: 35256,
    averageIncome: 35256,
    opportunities: 15893
  });
};

exports.getChartData = (req, res) => {
  const marketData = [
    { name: "Jan", sales: 4000, profit: 2400 },
    { name: "Feb", sales: 3000, profit: 1398 },
    { name: "Mar", sales: 2000, profit: 9800 },
    { name: "Apr", sales: 2780, profit: 3908 },
    { name: "May", sales: 1890, profit: 4800 }
  ];

  const salesData = [
    { name: "Mon", amount: 400 },
    { name: "Tue", amount: 700 },
    { name: "Wed", amount: 500 },
    { name: "Thu", amount: 900 },
    { name: "Fri", amount: 600 },
    { name: "Sat", amount: 300 },
    { name: "Sun", amount: 800 }
  ];

  res.json({ marketData, salesData });
};
