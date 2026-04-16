import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Target, Lightbulb, ShieldCheck, Heart, Users, Globe, Mail, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const TEAM_MEMBERS = [
  { id: 1, name: 'Ketki Salunkhe', role: 'Founder', image: 'https://ui-avatars.com/api/?name=Ketki+Salunkhe&background=ea580c&color=fff&size=200', bio: 'The visionary leader driving the mission and strategy of Swadeshi.' },
  { id: 2, name: 'Anshuman Sugandhi', role: 'Co-Founder', image: 'https://ui-avatars.com/api/?name=Anshuman+Sugandhi&background=047857&color=fff&size=200', bio: 'Lead Developer and technical architect behind the platform.' },
  { id: 3, name: 'Farhan Ansari', role: 'Member', image: 'https://ui-avatars.com/api/?name=Farhan+Ansari&background=111827&color=fff&size=200', bio: 'Core team member handling development and user experience.' },
  { id: 4, name: 'Ajinkya Funde', role: 'Member', image: 'https://ui-avatars.com/api/?name=Ajinkya+Funde&background=4b5563&color=fff&size=200', bio: 'Core team member focusing on operations and platform support.' },
];

const GALLERY_IMAGES = [
  'https://picsum.photos/seed/craft1/600/400',
  'https://picsum.photos/seed/craft2/600/800',
  'https://picsum.photos/seed/craft3/600/400',
  'https://picsum.photos/seed/craft4/600/800',
];

const AboutPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* 1. INTRODUCTION (Hero) */}
      <section className="bg-orange-600 text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Preserving Bharat's Soul</h1>
          <p className="text-xl text-orange-100 leading-relaxed">
            Swadeshi is more than a travel platform. It is a movement to bridge the gap between curious travelers and the master artisans who hold the ancient heritage of India in their hands.
          </p>
        </div>
        {/* Background abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform">
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower local artisans and heritage homeowners by providing them with a digital platform to showcase their craft directly to the world, ensuring fair compensation and sustainable tourism.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision an India where traditional arts are not dying trades, but thriving businesses, and where every traveler can experience the true, unfiltered culture of our heritage.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US? */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Swadeshi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Verified Authenticity</h3>
              <p className="text-gray-400">Every artisan and homestay is personally vetted by our team to ensure you get a genuine cultural experience.</p>
            </div>
            <div className="p-6">
              <Heart className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Direct to Creator</h3>
              <p className="text-gray-400">Zero middlemen. 100% of your workshop booking fee goes directly into the hands of the artisan.</p>
            </div>
            <div className="p-6">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Immersive Travel</h3>
              <p className="text-gray-400">Don't just buy a souvenir. Learn how to make it yourself in the very villages where the art was born.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM MEMBERS (Team Avengers) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Team Avengers</h2>
          <p className="text-gray-500">The builders and dreamers behind the Swadeshi platform.</p>
        </div>
        
        {/* THE FIX: Changed to lg:grid-cols-4 to fit all 4 in one row nicely */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-orange-50" />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-orange-600 font-medium text-sm mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Moments of Swadeshi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden ${index % 2 === 0 ? 'h-48' : 'h-64'}`}>
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER */}
      <section className="py-20 bg-orange-50 px-4">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-[3rem] shadow-xl border border-orange-100">
          <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for stories from rural India, upcoming festivals, and exclusive workshop invites.</p>
          
          {subscribed ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl font-bold border border-green-200">
              Thank you for subscribing! Welcome to the Swadeshi family.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                required 
                placeholder="Enter your email address" 
                className="flex-1 p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. FOOTER (Matching the Homepage) */}
      <footer className="bg-gray-900 pt-20 pb-10 px-4 text-white">
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
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
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

export default AboutPage;