import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchDashboardStats = () => axios.get(`${API_BASE}/admin/dashboard`);
export const fetchBookings = () => axios.get(`${API_BASE}/bookings`);
export const fetchUsers = () => axios.get(`${API_BASE}/users`);
export const fetchQueries = () => axios.get(`${API_BASE}/queries`);
