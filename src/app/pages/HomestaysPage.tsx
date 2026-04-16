import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Search, MapPin, Filter, Star, Coffee, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const MOCK_HOMESTAYS = [
  { id: 'hs1', name: 'Royal Rajputana Haveli', type: 'Heritage Home', state: 'Rajasthan', rating: 4.9, price: 2500, image: 'https://picsum.photos/seed/haveli/800/600', amenities: ['Breakfast', 'Wifi'] },
  { id: 'hs2', name: 'Kerala Backwater Retreat', type: 'Eco Villa', state: 'Kerala', rating: 4.8, price: 3200, image: 'https://picsum.photos/seed/kerala/800/600', amenities: ['Breakfast', 'Lake View'] },
  { id: 'hs3', name: 'Himalayan Woodhouse', type: 'Cottage', state: 'Himachal Pradesh', rating: 4.9, price: 1800, image: 'https://picsum.photos/seed/himalaya/800/600', amenities: ['Heater', 'Wifi'] },
];

const HomestaysPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStays = MOCK_HOMESTAYS.filter(stay => 
    stay.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stay.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <section className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 font-serif">Heritage Stays</h1>
        <div className="relative max-w-2xl mx-auto mt-6">
          <Search className="absolute left-4 top-4 text-gray-400 w-6 h-6" />
          <input 
            type="text" 
            placeholder="Search by location or name..."
            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 outline-none shadow-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay) => (
            <div key={stay.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <img src={stay.image} alt={stay.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{stay.name}</h3>
                  <span className="flex items-center gap-1 text-sm font-bold text-emerald-700"><Star className="w-4 h-4 fill-emerald-700" /> {stay.rating}</span>
                </div>
                <p className="text-gray-500 flex items-center gap-1 mb-4"><MapPin className="w-4 h-4" /> {stay.state}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t">
                  <div><span className="text-xl font-bold text-gray-900">₹{stay.price}</span><span className="text-gray-500 text-sm"> / night</span></div>
                  <Link to={`/stay-booking/${stay.id}`}>
                    <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center gap-2">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomestaysPage;