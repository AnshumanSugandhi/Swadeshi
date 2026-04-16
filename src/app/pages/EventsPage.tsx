import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar, MapPin, ArrowRight, Sparkles, PaintRoller } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data for Large Festivals
const UPCOMING_FESTIVALS = [
  { id: 1, title: 'Jaipur Literature Festival', date: 'Jan 28 - Feb 1, 2027', location: 'Diggi Palace, Jaipur', image: 'https://picsum.photos/seed/jlf/800/500', type: 'Cultural Fest' },
  { id: 2, title: 'Pushkar Camel Fair', date: 'Nov 11 - Nov 19, 2026', location: 'Pushkar, Rajasthan', image: 'https://picsum.photos/seed/pushkar/800/500', type: 'Heritage Fair' },
  { id: 3, title: 'Rann Utsav', date: 'Nov 2026 - Feb 2027', location: 'Kutch, Gujarat', image: 'https://picsum.photos/seed/rann/800/500', type: 'Desert Festival' },
  { id: 4, title: 'Hornbill Festival', date: 'Dec 1 - Dec 10, 2026', location: 'Kisama, Nagaland', image: 'https://picsum.photos/seed/hornbill/800/500', type: 'Tribal Fest' }
];

// Data for Intimate Workshops
const UPCOMING_WORKSHOPS = [
  { id: 101, title: 'Mastering Blue Pottery', date: 'Every Weekend', location: 'Jaipur, Rajasthan', image: 'https://picsum.photos/seed/pottery2/600/400', artisan: 'Ramesh Kumar', price: 800 },
  { id: 102, title: 'Kanjivaram Silk Weaving', date: 'May 15 - May 16, 2026', location: 'Kanchipuram, TN', image: 'https://picsum.photos/seed/silk/600/400', artisan: 'Lakshmi Devi', price: 1500 },
  { id: 103, title: 'Ajrakh Block Printing', date: 'June 5, 2026', location: 'Kutch, Gujarat', image: 'https://picsum.photos/seed/block/600/400', artisan: 'Khatri Brothers', price: 1200 },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Experience Bharat Live</h1>
          <p className="text-gray-400 text-xl">Mark your calendars for India's most vibrant cultural gatherings and intimate artisan masterclasses.</p>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600 rounded-full blur-[100px] opacity-20"></div>
      </section>

      {/* 2. UPCOMING FESTIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="flex items-center gap-3 mb-10">
          <Sparkles className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Festivals</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_FESTIVALS.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col xl:flex-row">
              <div 
                className="h-64 xl:h-auto xl:w-2/5 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              
              <div className="p-8 xl:w-3/5 flex flex-col justify-center bg-white relative z-10">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">
                  {event.type}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
                
                <Link to="/contact" className="w-fit text-orange-600 font-bold hover:text-orange-700 transition-colors flex items-center gap-2">
                  Get Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. UPCOMING WORKSHOPS SECTION */}
      <section className="bg-white py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <PaintRoller className="w-8 h-8 text-emerald-700" />
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Workshops</h2>
            </div>
            <Link to="/explore" className="hidden md:flex text-emerald-700 font-bold items-center gap-1 hover:underline">
              View All Artisans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_WORKSHOPS.map((workshop) => (
              <div key={workshop.id} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-transform duration-300">
                <img src={workshop.image} alt={workshop.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  <p className="text-emerald-700 font-medium mb-4">by {workshop.artisan}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-400"/> {workshop.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400"/> {workshop.location}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="font-bold text-lg text-gray-900">₹{workshop.price}</span>
                    <Link to="/explore">
                      <button className="bg-gray-900 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold transition-colors text-sm">
                        Book Spot
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view all button */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/explore" className="text-emerald-700 font-bold inline-flex items-center gap-1 hover:underline">
              View All Artisans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;