import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { Menu, X, Hand, Mic, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "./AuthContext"; 
import { auth } from "../../firebase"; 
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const getDashboardLink = () => {
    if (role === 'artisan') return '/artisan-dashboard';
    if (role === 'homestay') return '/homestay-dashboard';
    return '/'; 
  };

  // Helper to highlight the active link
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Slightly taller for elegance */}
          
          {/* 1. Logo (Far Left) */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center group-hover:bg-orange-700 transition-colors">
              <Hand className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">Swadeshi</span>
          </Link>

          {/* 2. Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/about" className={`text-sm font-bold transition-colors ${isActive('/about') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              About Us
            </Link>
            <Link to="/events" className={`text-sm font-bold transition-colors ${isActive('/events') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Experiences
            </Link>
            <Link to="/explore" className={`text-sm font-bold transition-colors ${isActive('/explore') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Artisans
            </Link>
            <Link to="/homestays" className={`text-sm font-bold transition-colors ${isActive('/homestays') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Heritage Stays
            </Link>
            <Link to="/contact" className={`text-sm font-bold transition-colors ${isActive('/contact') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
              Contact Us
            </Link>
          </div>

          {/* 3. Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button className="p-2 rounded-full hover:bg-orange-50 transition-colors text-gray-600 hover:text-orange-600" aria-label="Voice Search">
              <Mic className="w-5 h-5" />
            </button>

            {/* Dynamic Auth Section */}
            {user ? (
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <Link to={getDashboardLink()} className="flex items-center gap-2 hover:opacity-80 transition group">
                  <img 
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}&background=ea580c&color=fff`} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-orange-500 transition-all object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-orange-600 leading-tight">
                      {user.displayName?.split(' ')[0] || 'User'}
                    </span>
                    <span className="text-xs font-medium text-gray-500 capitalize leading-tight">{role}</span>
                  </div>
                </Link>
                <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition ml-2" title="Logout">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-bold hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-md">
                <UserIcon className="w-4 h-4" /> Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-600 bg-gray-50 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-4 pt-2 pb-6 shadow-xl absolute w-full z-50">
          <div className="space-y-1 mt-2">
            <Link to="/about" className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/events" className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl" onClick={() => setMobileOpen(false)}>Experiences</Link>
            <Link to="/explore" className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl" onClick={() => setMobileOpen(false)}>Artisans</Link>
            <Link to="/homestays" className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl" onClick={() => setMobileOpen(false)}>Heritage Stays</Link>
            <Link to="/contact" className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
          
          <div className="border-t border-gray-100 mt-4 pt-4 px-2">
             {user ? (
               <div className="space-y-3">
                 <div className="flex items-center gap-3 px-2 mb-4">
                    <img src={user.photoURL || ''} alt="" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-bold text-gray-900">{user.displayName}</p>
                      <p className="text-xs text-gray-500 capitalize">{role}</p>
                    </div>
                 </div>
                 <Link to={getDashboardLink()} className="block w-full text-center py-3 rounded-xl bg-orange-100 text-orange-700 font-bold" onClick={() => setMobileOpen(false)}>Go to Dashboard</Link>
                 <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="block w-full text-center py-3 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50">Logout</button>
               </div>
             ) : (
               <Link to="/login" className="block w-full text-center py-3 rounded-xl bg-gray-900 text-white font-bold shadow-md" onClick={() => setMobileOpen(false)}>Sign In / Register</Link>
             )}
          </div>
        </div>
      )}
    </nav>
  );
}