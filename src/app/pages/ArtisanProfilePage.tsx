import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPin, Star, Award, Calendar, ChevronRight, ShieldCheck } from 'lucide-react';

const MOCK_ARTISANS = {
  '1': {
    name: 'Ramesh Kumar',
    craft: 'Blue Pottery Master',
    location: 'Jaipur, Rajasthan',
    rating: 4.9,
    reviews: 128,
    experience: '35 Years',
    profileImg: 'https://picsum.photos/seed/ramesh/400/400',
    coverImg: 'https://picsum.photos/seed/jaipur_pottery/1200/500',
    bio: 'A 4th-generation artisan preserving the 14th-century Persian art of Blue Pottery. My workshop uses traditional quartz dough and natural dyes to create vibrant, sustainable masterpieces. Come learn the secret techniques passed down through my family for over a century.',
    gallery: [
      'https://picsum.photos/seed/pottery1/600/600',
      'https://picsum.photos/seed/pottery2/600/400',
      'https://picsum.photos/seed/pottery3/400/600',
      'https://picsum.photos/seed/pottery4/600/600'
    ]
  },
  'default': {
    name: 'Lakshmi Devi',
    craft: 'Kanjivaram Silk Weaver',
    location: 'Kanchipuram, Tamil Nadu',
    rating: 4.8,
    reviews: 94,
    experience: '20 Years',
    profileImg: 'https://picsum.photos/seed/lakshmi/400/400',
    coverImg: 'https://picsum.photos/seed/silk_loom/1200/500',
    bio: 'Specializing in pure mulberry silk and authentic zari work. Our looms have been spinning magic for decades, capturing the essence of South Indian heritage in every thread.',
    gallery: [
      'https://picsum.photos/seed/silk1/600/600',
      'https://picsum.photos/seed/silk2/600/400',
      'https://picsum.photos/seed/silk3/400/600',
      'https://picsum.photos/seed/silk4/600/600'
    ]
  }
};

const ArtisanProfilePage = () => {
  const { id } = useParams();
  const artisan = MOCK_ARTISANS[id as keyof typeof MOCK_ARTISANS] || MOCK_ARTISANS['default'];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      <Navbar />

      {/* 1. HERO COVER IMAGE */}
      <div 
        className="h-64 md:h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${artisan.coverImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative -mt-24 md:-mt-32">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 2. LEFT COLUMN: Profile Info & Booking Action */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 sticky top-28">
              {/* Profile Image overlapping the cover */}
              <img 
                src={artisan.profileImg} 
                alt={artisan.name} 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto -mt-20 mb-4 object-cover bg-white"
              />
              
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-bold bg-green-50 w-fit mx-auto px-2 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED ARTISAN
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{artisan.name}</h1>
                <p className="text-orange-600 font-medium">{artisan.craft}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" /> {artisan.location}
                </div>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl mb-6">
                <div className="text-center">
                  <div className="flex items-center gap-1 font-bold text-gray-900"><Star className="w-4 h-4 fill-orange-500 text-orange-500" /> {artisan.rating}</div>
                  <div className="text-xs text-gray-500">{artisan.reviews} Reviews</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="flex items-center gap-1 font-bold text-gray-900"><Award className="w-4 h-4 text-emerald-600" /> {artisan.experience}</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>

              <Link to={`/booking/${id || '1'}`} className="block w-full">
                <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Book Masterclass
                </button>
              </Link>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: Bio & Gallery */}
          <div className="md:col-span-2 space-y-8 mt-8 md:mt-32">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Artisan</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{artisan.bio}</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Craft Gallery</h2>
                <button className="text-orange-600 font-bold flex items-center gap-1 text-sm hover:underline">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={artisan.gallery[0]} alt="Craft" className="w-full rounded-2xl object-cover hover:opacity-90 cursor-pointer transition-opacity h-64" />
                  <img src={artisan.gallery[1]} alt="Craft" className="w-full rounded-2xl object-cover hover:opacity-90 cursor-pointer transition-opacity h-48" />
                </div>
                <div className="space-y-4">
                  <img src={artisan.gallery[2]} alt="Craft" className="w-full rounded-2xl object-cover hover:opacity-90 cursor-pointer transition-opacity h-48" />
                  <img src={artisan.gallery[3]} alt="Craft" className="w-full rounded-2xl object-cover hover:opacity-90 cursor-pointer transition-opacity h-64" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfilePage;