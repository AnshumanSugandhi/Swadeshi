import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UPCOMING_EVENTS = [
  { id: 1, title: 'Jaipur Literature Festival', date: 'Jan 28 - Feb 1, 2027', location: 'Diggi Palace, Jaipur', image: 'https://picsum.photos/seed/jlf/800/500', type: 'Festival' },
  { id: 2, title: 'Pushkar Camel Fair', date: 'Nov 11 - Nov 19, 2026', location: 'Pushkar, Rajasthan', image: 'https://picsum.photos/seed/pushkar/800/500', type: 'Cultural Fair' },
  { id: 3, title: 'Rann Utsav', date: 'Nov 2026 - Feb 2027', location: 'Kutch, Gujarat', image: 'https://picsum.photos/seed/rann/800/500', type: 'Festival' },
  { id: 4, title: 'Hornbill Festival', date: 'Dec 1 - Dec 10, 2026', location: 'Kisama, Nagaland', image: 'https://picsum.photos/seed/hornbill/800/500', type: 'Tribal Fest' }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-400 text-lg">Mark your calendars for India's most vibrant cultural gatherings and masterclasses.</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row">
              <div 
                className="h-64 md:h-auto md:w-2/5 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
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
                
                <Link to="/explore" className="w-fit bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                  Find Artisans Here <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage; // This line fixes the router crash!