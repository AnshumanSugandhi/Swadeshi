import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 px-4 text-white mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white rotate-[-45deg]" />
            </div>
            <span className="text-2xl font-serif font-bold">Swadeshi</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting travelers with the timeless heritage of Bharat through authentic artisan workshops and heritage stays.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/explore" className="hover:text-orange-400 transition-colors">Explore Artisans</Link></li>
            <li><Link to="/homestays" className="hover:text-orange-400 transition-colors">Heritage Stays</Link></li>
            <li><Link to="/events" className="hover:text-orange-400 transition-colors">Upcoming Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Follow Our Journey</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-orange-600 transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm">© 2026 Swadeshi. Built by Team Avengers.</p>
    </footer>
  );
};

export default Footer;