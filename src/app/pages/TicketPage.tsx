import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const TicketPage = () => {
  const { bookingId } = useParams();
  const ticketRef = useRef<HTMLDivElement>(null);
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId) return;
      const docRef = doc(db, "bookings", bookingId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setBooking(docSnap.data());
      }
      setLoading(false);
    };
    fetchBooking();
  }, [bookingId]);

  const downloadPDF = async () => {
    const element = ticketRef.current;
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Swadeshi_Pass_${bookingId}.pdf`);
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
    </div>
  );

  if (!booking) return <div className="text-white text-center mt-20">Booking not found.</div>;

  const isHomestay = booking.type === 'homestay';

  return (
    <div className="min-h-screen bg-gray-900 pb-20 font-sans">
      <Navbar />
      
      <div className="max-w-md mx-auto px-4 mt-12">
        <Link to="/home" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div ref={ticketRef} className="bg-white rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Header color changes based on type */}
          <div className={`${isHomestay ? 'bg-emerald-700' : 'bg-orange-600'} p-8 text-center text-white relative`}>
            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> VERIFIED
            </div>
            <h2 className="text-3xl font-serif font-bold mb-1">Swadeshi Passport</h2>
            <p className="text-white/70 text-sm tracking-widest uppercase">
              {isHomestay ? 'Heritage Stay Pass' : 'Artisan Experience Pass'}
            </p>
          </div>

          <div className="p-8 border-b-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center italic">
              {isHomestay ? 'Authentic Heritage Stay' : 'Masterclass Experience'}
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                  {isHomestay ? 'Check-in' : 'Date'}
                </p>
                <p className="font-semibold text-gray-900">{isHomestay ? booking.checkIn : booking.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                  {isHomestay ? 'Check-out' : 'Time'}
                </p>
                <p className="font-semibold text-gray-900">{isHomestay ? booking.checkOut : booking.time}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Guests</p>
                <p className="font-semibold text-gray-900">{booking.guests} People</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Total Paid</p>
                <p className="font-semibold text-gray-900">₹{booking.totalAmount}</p>
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col items-center bg-gray-50">
            <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
              <QRCode value={`swadeshi://verify/${bookingId}`} size={120} />
            </div>
            <p className="text-xs text-gray-400 font-mono tracking-widest">TICKET ID: {bookingId?.slice(-6).toUpperCase()}</p>
          </div>
          
          <div className="absolute top-[230px] -left-4 w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="absolute top-[230px] -right-4 w-8 h-8 bg-gray-900 rounded-full"></div>
        </div>

        <button 
          onClick={downloadPDF}
          className={`mt-8 w-full ${isHomestay ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-orange-600 hover:bg-orange-700'} text-white p-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition`}
        >
          <Download className="w-5 h-5" /> Download Digital Pass
        </button>
      </div>
    </div>
  );
};