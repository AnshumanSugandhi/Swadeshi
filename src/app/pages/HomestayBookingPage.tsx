import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Calendar, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { useAuth } from '../components/AuthContext';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export const HomestayBookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Price calculation
  const pricePerNight = 2500; 
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
  };

  const nights = calculateNights();
  const total = pricePerNight * nights * guests;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { navigate('/login'); return; }
    if (nights <= 0) { alert("Checkout must be after check-in!"); return; }

    setIsProcessing(true);
    setTimeout(async () => {
      setPaymentSuccess(true);
      try {
        const docRef = await addDoc(collection(db, 'bookings'), {
          type: 'homestay',
          propertyId: id,
          userId: user.uid,
          checkIn,
          checkOut,
          guests,
          totalAmount: total,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        });
        setTimeout(() => navigate(`/ticket/${docRef.id}`), 1500);
      } catch (error) {
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Confirm Your Stay</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Check-in</label>
                  <input type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 border rounded-xl outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Check-out</label>
                  <input type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 border rounded-xl outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="number" min="1" required value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full pl-10 p-3 border rounded-xl outline-none" />
                </div>
              </div>
              <button disabled={isProcessing || paymentSuccess || nights <= 0} type="submit" 
                className="w-full bg-emerald-700 text-white p-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2">
                {paymentSuccess ? "Confirmed!" : isProcessing ? "Securing Room..." : `Book for ₹${total}`}
              </button>
            </form>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 h-fit">
            <h3 className="font-bold text-xl mb-6">Price Summary</h3>
            <div className="space-y-4 text-gray-600 mb-6 border-b border-emerald-200 pb-4">
              <div className="flex justify-between"><span>₹{pricePerNight} × {nights} Nights</span> <span>₹{pricePerNight * nights}</span></div>
              <div className="flex justify-between"><span>Number of Guests</span> <span>x {guests}</span></div>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-900"><span>Total</span><span>₹{total}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};