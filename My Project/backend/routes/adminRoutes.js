const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/adminController');
router.get('/dashboard', getDashboardStats);
const {
  getAdminStats,
  getChartData
} = require("../controllers/adminController");

router.get("/stats", getAdminStats);
router.get("/chart-data", getChartData);

module.exports = router;


