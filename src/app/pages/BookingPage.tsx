import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Calendar, Clock, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { db } from '../../firebase'; // Adjust path if needed
import { collection, addDoc } from 'firebase/firestore';

export const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mock Artisan Data (In a real app, fetch this from Firestore)
  const artisanPrice = 800; 
  const total = artisanPrice * guests;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to book a workshop!");
      navigate('/login');
      return;
    }

    setIsProcessing(true);

    // 1. SIMULATE RAZORPAY GATEWAY (Wait 2 seconds)
    setTimeout(async () => {
      setPaymentSuccess(true);
      
      try {
        // 2. SAVE TO FIREBASE
        const docRef = await addDoc(collection(db, 'bookings'), {
          artisanId: id,
          userId: user.uid,
          guestName: user.displayName,
          date,
          time,
          guests,
          totalAmount: total,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        });

        // 3. REDIRECT TO TICKET PAGE
        setTimeout(() => {
          navigate(`/ticket/${docRef.id}`);
        }, 1500);

      } catch (error) {
        console.error("Error saving booking:", error);
        alert("Payment succeeded, but failed to save booking. Please contact support.");
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Secure Your Workshop</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Time Slot</label>
                <div className="grid grid-cols-2 gap-3">
                  {['10:00 AM', '02:00 PM'].map(slot => (
                    <button type="button" key={slot} onClick={() => setTime(slot)}
                      className={`p-3 rounded-xl border font-bold transition-all ${time === slot ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="number" min="1" max="10" required value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
              </div>

              <button 
                disabled={isProcessing || paymentSuccess || !time}
                type="submit" 
                className="w-full bg-gray-900 text-white p-4 rounded-xl font-bold text-lg hover:bg-black transition disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {paymentSuccess ? <><CheckCircle className="w-5 h-5 text-green-400"/> Payment Successful</> : 
                 isProcessing ? "Processing Secure Payment..." : `Pay ₹${total}`}
              </button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div>
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="font-bold text-xl mb-6">Order Summary</h3>
              <div className="space-y-4 text-gray-600 mb-6">
                <div className="flex justify-between"><span>Workshop Fee (per person)</span> <span>₹{artisanPrice}</span></div>
                <div className="flex justify-between"><span>Number of Guests</span> <span>x {guests}</span></div>
                <div className="flex justify-between"><span>Swadeshi Platform Fee</span> <span className="text-green-600 font-bold">FREE</span></div>
              </div>
              <div className="border-t border-orange-200 pt-4 flex justify-between font-bold text-xl text-gray-900">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 justify-center">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              100% of the workshop fee goes directly to the artisan.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};