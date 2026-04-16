import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IndianRupee, Users, Calendar as CalendarIcon, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { Navigate } from 'react-router-dom';

// Dummy Bookings Data
const RECENT_BOOKINGS = [
  { id: 'BOK-7829', name: 'Rahul Sharma', date: 'April 20, 2026', time: '10:00 AM', guests: 2, amount: 1600, status: 'confirmed' },
  { id: 'BOK-7830', name: 'Anita Desai', date: 'April 22, 2026', time: '02:00 PM', guests: 4, amount: 3200, status: 'pending' },
  { id: 'BOK-7831', name: 'John Smith', date: 'April 25, 2026', time: '10:00 AM', guests: 1, amount: 800, status: 'confirmed' },
];

const ArtisanDashboard = () => {
  const { user, role } = useAuth();
  const [isAccepting, setIsAccepting] = useState(true);

  // Security Check: If they aren't logged in or aren't an artisan, kick them out
  if (!user || role !== 'artisan') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Welcome Banner */}
        <div className="bg-orange-600 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center mb-8 shadow-lg shadow-orange-200">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.displayName || 'Artisan'}!</h1>
            <p className="text-orange-100">Here is what is happening with your workshops today.</p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/20 p-4 rounded-xl backdrop-blur-sm border border-white/30 flex items-center gap-4">
            <span className="font-bold">Accepting New Bookings</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={isAccepting} onChange={() => setIsAccepting(!isAccepting)} />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
            </label>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-xl text-green-600"><IndianRupee className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900">₹14,500</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-600"><Users className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Guests Hosted</p>
              <h3 className="text-2xl font-bold text-gray-900">42</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-orange-100 p-4 rounded-xl text-orange-600"><CalendarIcon className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Upcoming Workshops</p>
              <h3 className="text-2xl font-bold text-gray-900">7</h3>
            </div>
          </div>
        </div>

        {/* Incoming Bookings Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
            <button className="text-orange-600 font-bold hover:underline text-sm">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  <th className="p-4 font-bold">Guest Name</th>
                  <th className="p-4 font-bold">Date & Time</th>
                  <th className="p-4 font-bold">Guests</th>
                  <th className="p-4 font-bold">Amount</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_BOOKINGS.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-900">{booking.name}</td>
                    <td className="p-4 text-gray-600">
                      <div className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-gray-400"/> {booking.date}</div>
                      <div className="text-xs mt-1 text-gray-400">{booking.time}</div>
                    </td>
                    <td className="p-4 text-gray-600">{booking.guests}</td>
                    <td className="p-4 font-bold text-gray-900">₹{booking.amount}</td>
                    <td className="p-4">
                      {booking.status === 'confirmed' ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full w-max">
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
    </div>
  );
};

export default ArtisanDashboard;