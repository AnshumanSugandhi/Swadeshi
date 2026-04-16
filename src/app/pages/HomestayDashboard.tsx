import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IndianRupee, Users, CalendarDays, CheckCircle, Clock, Home, MapPin } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
// Dummy Bookings Data for Homestays
const RECENT_BOOKINGS = [
  { id: 'HS-9012', name: 'Vikram Singh', checkIn: 'May 10, 2026', checkOut: 'May 12, 2026', guests: 2, amount: 4500, status: 'confirmed', room: 'Heritage Suite' },
  { id: 'HS-9013', name: 'Priya Patel', checkIn: 'May 15, 2026', checkOut: 'May 18, 2026', guests: 4, amount: 9000, status: 'pending', room: 'Family Cottage' },
  { id: 'HS-9014', name: 'Arjun Reddy', checkIn: 'May 20, 2026', checkOut: 'May 21, 2026', guests: 1, amount: 2000, status: 'confirmed', room: 'Standard Room' },
];

const HomestayDashboard = () => {
  const { user, role } = useAuth();
  const [isAccepting, setIsAccepting] = useState(true);

  // Security Check: If they aren't logged in or aren't a homestay owner, kick them out
  if (!user || role !== 'homestay') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Welcome Banner - Using Emerald/Teal to differentiate from Artisans */}
        <div className="bg-emerald-700 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center mb-8 shadow-lg shadow-emerald-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Home className="w-6 h-6 text-emerald-200" />
              <h1 className="text-3xl font-bold">Welcome back, {user.displayName || 'Host'}!</h1>
            </div>
            <p className="text-emerald-100 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Manage your property and upcoming guests here.
            </p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/20 p-4 rounded-xl backdrop-blur-sm border border-white/30 flex items-center gap-4">
            <span className="font-bold text-sm md:text-base">Accepting Bookings</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={isAccepting} onChange={() => setIsAccepting(!isAccepting)} />
              <div className="w-11 h-6 bg-emerald-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
            </label>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-emerald-100 p-4 rounded-xl text-emerald-700"><IndianRupee className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Monthly Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">₹28,500</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-600"><CalendarDays className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Nights Booked</p>
              <h3 className="text-2xl font-bold text-gray-900">14</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-orange-100 p-4 rounded-xl text-orange-600"><Users className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Upcoming Check-ins</p>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
            </div>
          </div>
        </div>

        {/* Incoming Bookings Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Reservations</h2>
            <button className="text-emerald-700 font-bold hover:underline text-sm">View Calendar</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  <th className="p-4 font-bold">Guest Details</th>
                  <th className="p-4 font-bold">Dates</th>
                  <th className="p-4 font-bold">Room</th>
                  <th className="p-4 font-bold">Amount</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_BOOKINGS.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{booking.name}</div>
                      <div className="text-xs text-gray-500">{booking.guests} Guests</div>
                    </td>
                    <td className="p-4 text-gray-600">
                      <div className="text-sm"><span className="font-semibold">In:</span> {booking.checkIn}</div>
                      <div className="text-sm text-gray-500"><span className="font-semibold">Out:</span> {booking.checkOut}</div>
                    </td>
                    <td className="p-4 text-gray-600 font-medium">{booking.room}</td>
                    <td className="p-4 font-bold text-gray-900">₹{booking.amount}</td>
                    <td className="p-4">
                      {booking.status === 'confirmed' ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full w-max">
                          <CheckCircle className="w-3 h-3" /> Confirmed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full w-max">
                          <Clock className="w-3 h-3" /> Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HomestayDashboard;