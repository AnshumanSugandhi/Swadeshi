import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, MapPin, Star, Instagram, Twitter, Facebook } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SLIDES = [
  { id: 1, title: "Discover India's Soul", sub: "Connect with master artisans in their own workshops.", img: "https://picsum.photos/seed/slide1/1200/600" },
  { id: 2, title: "Stay in Heritage", sub: "Authentic homestays passed down through generations.", img: "https://picsum.photos/seed/slide2/1200/600" },
  { id: 3, title: "Learn the Craft", sub: "Hands-on masterclasses in pottery, weaving, and more.", img: "https://picsum.photos/seed/slide3/1200/600" },
];

const CRAFTS = [
  { name: 'Pottery', icon: '🏺', color: 'bg-orange-100' },
  { name: 'Weaving', icon: '🧵', color: 'bg-blue-100' },
  { name: 'Carving', icon: '🔨', color: 'bg-emerald-100' },
  { name: 'Painting', icon: '🎨', color: 'bg-purple-100' },
];

const FEATURED_ARTISANS = [
  { id: '1', name: 'Ramesh Kumar', craft: 'Blue Pottery', rating: 4.9, img: 'https://picsum.photos/seed/art1/400/400', bio: 'Preserving the 14th-century Persian art of Jaipur.' },
  { id: '2', name: 'Lakshmi Devi', craft: 'Silk Weaving', rating: 4.8, img: 'https://picsum.photos/seed/art2/400/400', bio: 'Master of the Kanjivaram loom with 30 years experience.' },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 1. AUTO-SLIDING BANNER */}
      <section className="h-[70vh] w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="relative h-full w-full bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">{slide.sub}</p>
                  <Link to="/explore" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2">
                    Start Exploring <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. ARTS CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Craft</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CRAFTS.map((craft) => (
            <Link 
              key={craft.name} 
              to={`/explore?craft=${craft.name}`} // This links to explore with a filter
              className={`${craft.color} p-8 rounded-3xl text-center hover:scale-105 transition-transform cursor-pointer group`}
            >
              <span className="text-5xl mb-4 block group-hover:animate-bounce">{craft.icon}</span>
              <span className="font-bold text-gray-800 text-xl">{craft.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED ARTISANS */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Artisans</h2>
              <p className="text-gray-500">Meet the masters behind the magic.</p>
            </div>
            <Link to="/explore" className="text-orange-600 font-bold flex items-center gap-1 hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_ARTISANS.map((artisan) => (
              <Link 
                key={artisan.id} 
                to={`/artisan/${artisan.id}`}
                className="bg-white p-6 rounded-3xl flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <img src={artisan.img} alt="" className="w-full md:w-48 h-48 rounded-2xl object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                    <span className="flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-orange-600" /> {artisan.rating}
                    </span>
                  </div>
                  <p className="text-orange-600 font-medium mb-3">{artisan.craft}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{artisan.bio}</p>
                  <span className="text-orange-600 font-bold text-sm flex items-center gap-1">
                    View Profile <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UPCOMING EVENTS GLIMPSE */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Upcoming Cultural Festivals</h2>
        <p className="text-gray-500 mb-12">Don't miss the chance to experience these live.</p>
        <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-serif mb-4 italic text-orange-400">Jaipur Literature Festival</h3>
            <p className="flex items-center justify-center gap-2 text-gray-300 mb-8 font-medium">
              <MapPin className="w-5 h-5" /> Diggi Palace, Jaipur • Jan 2027
            </p>
            <Link to="/events" className="border-2 border-white/30 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-bold transition-all inline-block">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-100 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-white rotate-[-45deg]" /></div>
              <span className="text-2xl font-serif font-bold">Swadeshi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Connecting travelers with the timeless heritage of Bharat through authentic artisan workshops and heritage stays.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/explore" className="hover:text-orange-600">Explore Artisans</Link></li>
              <li><Link to="/homestays" className="hover:text-orange-600">Heritage Stays</Link></li>
              <li><Link to="/events" className="hover:text-orange-600">Experiences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/contact" className="hover:text-orange-600">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-orange-600">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-orange-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Follow Our Journey</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:text-orange-600 transition-colors"><Instagram /></a>
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:text-orange-600 transition-colors"><Twitter /></a>
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:text-orange-600 transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm">© 2026 Swadeshi. Built by Team Avengers.</p>
      </footer>
    </div>
  );
};

export default HomePage;