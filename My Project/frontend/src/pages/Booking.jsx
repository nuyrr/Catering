import React from 'react';
import Sidebar from './Sidebar'; 

  const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/bookings`);
      setBookings(res.data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    }
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/bookings/${id}`);
      toast.success('Booking canceled');
      fetchBookings();
    } catch (error) {
      toast.error('Error canceling booking');
    }
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get(`${baseURL}/api/bookings/${id}`);
      alert(`Details: ${res.data.details || 'No additional info available.'}`);
    } catch (error) {
      toast.error('Failed to fetch booking details');
    }
  };
  return (
    <div className="flex">
      <Sidebar /> {/* Include Sidebar in the layout */}

      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Bookings</h1>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300">Customer Name</th>
              <th className="px-4 py-2 bg-gray-300">Date</th>
              <th className="px-4 py-2 bg-gray-300">Time</th>
              <th className="px-4 py-2 bg-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">April 10, 2025</td>
              <td className="px-4 py-2">6:00 PM</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
                <button className="bg-red-500 text-white px-4 py-2 ml-2 rounded">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
