import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Search, MapPin, Filter, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dummy data for our artisans (We will connect this to Firebase later if needed)
const MOCK_ARTISANS = [
  { id: '1', name: 'Ramesh Kumar', craft: 'Blue Pottery', state: 'Rajasthan', rating: 4.9, image: 'https://images.unsplash.com/photo-1610715936287-6c2ab208cbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: '2', name: 'Lakshmi Devi', craft: 'Silk Weaving', state: 'Tamil Nadu', rating: 4.8, image: 'https://images.unsplash.com/photo-1583215286576-96eb64019a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: '3', name: 'Abdul Rahman', craft: 'Wood Carving', state: 'Uttar Pradesh', rating: 4.7, image: 'https://images.unsplash.com/photo-1605813800237-772ae812e960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: '4', name: 'Meera Ben', craft: 'Block Printing', state: 'Gujarat', rating: 5.0, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const CRAFTS = ['All', 'Blue Pottery', 'Silk Weaving', 'Wood Carving', 'Block Printing'];
const STATES = ['All', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'Gujarat'];

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCraft, setSelectedCraft] = useState('All');
  const [selectedState, setSelectedState] = useState('All');

  // The Discovery Engine Logic: Filter the artisans based on user input
  const filteredArtisans = MOCK_ARTISANS.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artisan.craft.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCraft = selectedCraft === 'All' || artisan.craft === selectedCraft;
    const matchesState = selectedState === 'All' || artisan.state === selectedState;
    
    return matchesSearch && matchesCraft && matchesState;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Header & Search Bar */}
      <section className="bg-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Discover Master Artisans</h1>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-4 text-gray-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search by name or craft (e.g., 'Weaving')..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 w-full">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center gap-2 font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              <Filter className="w-5 h-5 text-orange-600" /> Filters
            </div>

            {/* Craft Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Art Form</h3>
              <div className="space-y-2">
                {CRAFTS.map(craft => (
                  <label key={craft} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="craft" 
                      checked={selectedCraft === craft}
                      onChange={() => setSelectedCraft(craft)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-gray-600 group-hover:text-orange-600 transition-colors">{craft}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* State Filter */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Region</h3>
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 text-gray-700"
              >
                {STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
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
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${artisan.image})` }}
                ></div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-orange-600" /> {artisan.rating}
                    </div>
                  </div>
                  
                  <p className="text-orange-600 font-medium mb-3">{artisan.craft}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <MapPin className="w-4 h-4" /> {artisan.state}
                  </div>
                  
                  {/* Pushes the button to the bottom if content is short */}
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link to={`/artisan/${artisan.id}`}>
                      <button className="w-full bg-gray-50 hover:bg-orange-600 hover:text-white text-gray-800 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArtisans.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <p className="text-xl text-gray-500 mb-2">No artisans found.</p>
              <p className="text-gray-400">Try adjusting your search or filters.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCraft('All'); setSelectedState('All'); }}
                className="mt-4 text-orange-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;