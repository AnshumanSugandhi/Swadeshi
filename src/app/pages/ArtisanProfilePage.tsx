import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPin, Star, Clock, Calendar, ArrowRight } from 'lucide-react';

// Using the same dummy data logic for continuity
const MOCK_ARTISANS = {
  '1': { id: '1', name: 'Ramesh Kumar', craft: 'Blue Pottery', state: 'Rajasthan', rating: 4.9, bio: 'A 4th generation potter from Jaipur, Ramesh brings the royal blue hues of Rajasthan to life. Learn the exact techniques used by the artisans of the Maharajas.', image: 'https://images.unsplash.com/photo-1610715936287-6c2ab208cbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 800 },
  '2': { id: '2', name: 'Lakshmi Devi', craft: 'Silk Weaving', state: 'Tamil Nadu', rating: 4.8, bio: 'Master weaver specializing in Kanjivaram silk. Lakshmi has over 30 years of experience on the handloom.', image: 'https://images.unsplash.com/photo-1583215286576-96eb64019a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', price: 1200 },
};

export const ArtisanProfilePage = () => {
  const { id } = useParams();
  // @ts-ignore
  const artisan = MOCK_ARTISANS[id] || MOCK_ARTISANS['1']; // Fallback for demo

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      {/* Hero Header */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${artisan.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  {artisan.craft}
                </span>
                <span className="flex items-center gap-1 text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-orange-500 fill-orange-500" /> {artisan.rating}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{artisan.name}</h1>
              <p className="text-gray-500 flex items-center gap-2 font-medium">
                <MapPin className="w-5 h-5 text-gray-400" /> {artisan.state}, India
              </p>
            </div>
            
            <Link to={`/booking/${artisan.id}`}>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-200 flex items-center gap-2 text-lg w-full md:w-auto justify-center">
                Book Workshop (₹{artisan.price}) <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Artisan</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{artisan.bio}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Duration</p>
              <p className="font-bold text-gray-900">3 Hours</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Availability</p>
              <p className="font-bold text-gray-900">Weekends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};