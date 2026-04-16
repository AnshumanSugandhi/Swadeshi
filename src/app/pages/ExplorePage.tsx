import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Search, MapPin, Star, ArrowRight, Instagram, Twitter, Facebook, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper CSS
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

// Expanded Mock Data for better sliders and filtering
const MOCK_ARTISANS = [
  { id: '1', name: 'Ramesh Kumar', craft: 'Blue Pottery', state: 'Rajasthan', rating: 4.9, image: 'https://picsum.photos/seed/ramesh/800/600' },
  { id: '2', name: 'Lakshmi Devi', craft: 'Silk Weaving', state: 'Tamil Nadu', rating: 4.8, image: 'https://picsum.photos/seed/lakshmi/800/600' },
  { id: '3', name: 'Abdul Rahman', craft: 'Wood Carving', state: 'Uttar Pradesh', rating: 4.7, image: 'https://picsum.photos/seed/abdul/800/600' },
  { id: '4', name: 'Meera Ben', craft: 'Block Printing', state: 'Gujarat', rating: 5.0, image: 'https://picsum.photos/seed/meera/800/600' },
  { id: '5', name: 'Harish Nair', craft: 'Bronze Casting', state: 'Kerala', rating: 4.9, image: 'https://picsum.photos/seed/harish/800/600' },
  { id: '6', name: 'Fatima Begum', craft: 'Pashmina Weaving', state: 'Kashmir', rating: 5.0, image: 'https://picsum.photos/seed/fatima/800/600' },
];

const ART_FORMS = ['All Crafts', 'Blue Pottery', 'Silk Weaving', 'Wood Carving', 'Block Printing', 'Bronze Casting', 'Pashmina Weaving'];
const REGIONS = ['All Regions', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'Gujarat', 'Kerala', 'Kashmir'];

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForm, setSelectedForm] = useState('All Crafts');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  // Filter Logic
  const filteredArtisans = MOCK_ARTISANS.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || artisan.craft.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesForm = selectedForm === 'All Crafts' || artisan.craft === selectedForm;
    const matchesRegion = selectedRegion === 'All Regions' || artisan.state === selectedRegion;
    return matchesSearch && matchesForm && matchesRegion;
  });

  // Top Artisans for the Slider (Rating 4.9 or higher)
  const topArtisans = MOCK_ARTISANS.filter(artisan => artisan.rating >= 4.9);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 1. HERO BANNER & DESCRIPTION */}
      <section className="bg-orange-600 text-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Discover the Masters</h1>
          <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
            Journey into the heart of India's heritage. Explore authentic crafts, meet the legendary creators, and book exclusive masterclasses directly in their workshops.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      </section>

      {/* 2. SEARCH & FILTERS BAR (Overlapping the Hero) */}
      <section className="max-w-6xl mx-auto px-4 w-full relative z-20 -mt-10 mb-12">
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
          
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name or craft..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          <div className="w-full md:w-64">
            <select 
              value={selectedForm}
              onChange={(e) => setSelectedForm(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-transparent rounded-xl outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer font-medium text-gray-700"
            >
              {ART_FORMS.map(form => <option key={form} value={form}>{form}</option>)}
            </select>
          </div>

          <div className="w-full md:w-64">
            <select 
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-transparent rounded-xl outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer font-medium text-gray-700"
            >
              {REGIONS.map(region => <option key={region} value={region}>{region}</option>)}
            </select>
          </div>

        </div>
      </section>

      {/* 3. FEATURED ARTISANS SLIDER */}
      {searchTerm === '' && selectedForm === 'All Crafts' && selectedRegion === 'All Regions' && (
        <section className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Highest Rated Masters</h2>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {topArtisans.map((artisan) => (
              <SwiperSlide key={`top-${artisan.id}`}>
                <Link to={`/artisan/${artisan.id}`} className="block group">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
                    <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-orange-400 font-bold text-sm mb-1">{artisan.craft}</p>
                          <h3 className="text-2xl font-bold text-white">{artisan.name}</h3>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-white font-bold text-sm">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" /> {artisan.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* 4. ALL ARTISANS GRID */}
      <section className="max-w-7xl mx-auto px-4 py-12 w-full flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore the Catalog</h2>
        <div className="mb-8 text-gray-500 font-medium border-b border-gray-200 pb-4">
          Showing {filteredArtisans.length} verified artisans
        </div>

        {filteredArtisans.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Artisans Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedForm('All Crafts'); setSelectedRegion('All Regions');}}
              className="mt-4 text-orange-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArtisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded font-bold text-xs text-gray-900 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-orange-500 text-orange-500" /> {artisan.rating}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{artisan.name}</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">{artisan.craft}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-6">
                    <MapPin className="w-4 h-4" /> {artisan.state}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link to={`/artisan/${artisan.id}`}>
                      <button className="w-full bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-900 py-2.5 rounded-xl font-bold transition-colors text-sm flex items-center justify-center gap-2">
                        View Profile <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-900 pt-16 pb-8 px-4 text-white mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-white rotate-[-45deg]" /></div>
              <span className="text-2xl font-serif font-bold">Swadeshi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Connecting travelers with the timeless heritage of Bharat through authentic artisan workshops and heritage stays.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/explore" className="hover:text-orange-400 transition-colors">Explore Artisans</Link></li>
              <li><Link to="/homestays" className="hover:text-orange-400 transition-colors">Heritage Stays</Link></li>
              <li><Link to="/events" className="hover:text-orange-400 transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Follow Our Journey</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm">© 2026 Swadeshi. Built by Team Avengers.</p>
      </footer>
    </div>
  );
};

export default ExplorePage;