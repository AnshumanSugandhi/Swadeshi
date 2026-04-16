import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Filter, MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_ARTISANS = [
  { id: '1', name: 'Ramesh Kumar', craft: 'Blue Pottery', state: 'Rajasthan', rating: 4.9, image: 'https://picsum.photos/seed/ramesh/600/400' },
  { id: '2', name: 'Lakshmi Devi', craft: 'Silk Weaving', state: 'Tamil Nadu', rating: 4.8, image: 'https://picsum.photos/seed/lakshmi/600/400' },
  { id: '3', name: 'Abdul Rahman', craft: 'Wood Carving', state: 'Uttar Pradesh', rating: 4.7, image: 'https://picsum.photos/seed/abdul/600/400' },
  { id: '4', name: 'Meera Ben', craft: 'Block Printing', state: 'Gujarat', rating: 5.0, image: 'https://picsum.photos/seed/meera/600/400' },
];

const ART_FORMS = ['All', 'Blue Pottery', 'Silk Weaving', 'Wood Carving', 'Block Printing'];
const REGIONS = ['All', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'Gujarat'];

const ExplorePage = () => {
  const [selectedForm, setSelectedForm] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredArtisans = MOCK_ARTISANS.filter(artisan => {
    const matchesForm = selectedForm === 'All' || artisan.craft === selectedForm;
    const matchesRegion = selectedRegion === 'All' || artisan.state === selectedRegion;
    return matchesForm && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 w-full flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
            <div className="flex items-center gap-2 font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              <Filter className="w-5 h-5 text-orange-600" /> Filters
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Art Form</h3>
              <div className="space-y-3">
                {ART_FORMS.map(form => (
                  <label key={form} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="artForm" 
                      checked={selectedForm === form}
                      onChange={() => setSelectedForm(form)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-gray-600 group-hover:text-orange-600 transition-colors">{form}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Region</h3>
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-700"
              >
                {REGIONS.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="mb-6 text-gray-600 font-medium">
            Showing {filteredArtisans.length} artisans
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col">
                
                {/* Reliable Image Container */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-orange-600" /> {artisan.rating}
                    </div>
                  </div>
                  
                  <p className="text-orange-600 font-medium mb-3">{artisan.craft}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <MapPin className="w-4 h-4" /> {artisan.state}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link to={`/artisan/${artisan.id}`}>
                      <button className="w-full bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-900 px-5 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-gray-200">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;