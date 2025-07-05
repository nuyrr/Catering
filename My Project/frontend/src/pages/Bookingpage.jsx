// import React from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// function BookingPage() {
//   const navigate = useNavigate();

//   const isLoggedIn = false; 

//   const handleSubmit = (e) => {
//     e.preventDefault(); 

//     if (!isLoggedIn) {
//       Swal.fire({
//         title: 'You need to log in or sign up first!',
//         text: 'Please log in or sign up to make a reservation.',
//         icon: 'info',
//         showCancelButton: true,
//         confirmButtonText: 'Log in',
//         cancelButtonText: 'Sign up',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate('/login');
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//           navigate('/signup');
//         }
//       });
//     } else {
//       // Proceed with reservation logic (e.g., send form data)
//       Swal.fire('Success', 'Your reservation was submitted!', 'success');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-12">
//       <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-10 border-t-4 border-black">
//         <h2 className="text-3xl font-bold text-center text-black mb-2">Book Your Event</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Fill out the form below and we’ll help make your occasion unforgettable.
//         </p>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 placeholder="example@mail.com"
//                 className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm font-medium text-gray-700">Event Date</label>
//               <input
//                 type="date"
//                 className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700">Time</label>
//               <input
//                 type="time"
//                 className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">Number of Guests</label>
//             <input
//               type="number"
//               placeholder="e.g. 50"
//               className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">Additional Notes</label>
//             <textarea
//               rows="4"
//               placeholder="Special requests, dietary needs..."
//               className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-black text-white text-lg py-3 rounded-full hover:bg-gray-800 transition"
//           >
//             Submit Reservation
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookingPage;
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // assuming token is stored in localStorage
    if (!token) {
      Swal.fire({
        title: "You need to log in or sign up first!",
        text: "Please log in or sign up to make a reservation.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Log in",
        cancelButtonText: "Sign up",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/signup");
        }
      });
      return;
    }

    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await axios.post(
        `${baseURL}/api/bookings/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire("Success", response.data.message, "success");
      setFormData({ name: "", email: "", date: "", time: "", guests: "", notes: "" });
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.response?.data?.message || "Something went wrong", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-10 border-t-4 border-black">
        <h2 className="text-3xl font-bold text-center text-black mb-2">Book Your Event</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and we’ll help make your occasion unforgettable.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="example@mail.com"
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Event Date</label>
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Time</label>
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                type="time"
                className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              type="number"
              placeholder="e.g. 50"
              className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Special requests, dietary needs..."
              className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-black focus:border-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white text-lg py-3 rounded-full hover:bg-gray-800 transition"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
