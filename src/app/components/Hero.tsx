import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1716876995651-1ff85b65a6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc2FuJTIwcG90dGVyeSUyMGVsZGVyJTIwdGVhY2hpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzQ4ODcxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Artisan teaching pottery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
          Transform Tourism into<br />Cultural Immersion
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Book verified rural homestays and masterclasses directly with India's master artisans. Zero middlemen.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Craft Type */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2 text-left">Craft Type</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c1543a] focus:border-transparent appearance-none cursor-pointer">
                <option>Pottery</option>
                <option>Weaving</option>
                <option>Painting</option>
                <option>Stone Carving</option>
              </select>
            </div>

            {/* Region */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2 text-left">Region</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c1543a] focus:border-transparent appearance-none cursor-pointer">
                <option>Rajasthan</option>
                <option>Gujarat</option>
                <option>Odisha</option>
                <option>Kerala</option>
              </select>
            </div>

            {/* Dates */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2 text-left">Dates</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select dates"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c1543a] focus:border-transparent pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Explore Button */}
          <Link
            to="/explore"
            className="w-full md:w-auto mt-4 px-12 py-4 bg-[#c1543a] text-white rounded-lg hover:bg-[#a8442f] transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <Search className="w-5 h-5" />
            <span className="text-lg">Explore</span>
          </Link>
        </div>
      </div>
    </section>
  );
}