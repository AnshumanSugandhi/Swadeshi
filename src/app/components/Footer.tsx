import { Leaf, MapPin, Heart, Shield, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2d2420] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#10a37f] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif">Swadeshi</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting travelers with India's master artisans for authentic cultural experiences.
            </p>
            <div className="flex gap-4">
              <a href="mailto:hello@swadeshi.in" className="text-gray-400 hover:text-[#10a37f] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+911234567890" className="text-gray-400 hover:text-[#10a37f] transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg mb-4">About Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-gray-400 hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-400 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg mb-4">Our Partners</h4>
            <ul className="space-y-3">
              <li>
                <a href="#ngo" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  NGO Partners
                </a>
              </li>
              <li>
                <a href="#tourism" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  State Tourism Boards
                </a>
              </li>
              <li>
                <a href="#artisans" className="text-gray-400 hover:text-white transition-colors">
                  Artisan Network
                </a>
              </li>
              <li>
                <a href="#become" className="text-gray-400 hover:text-white transition-colors">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg mb-4">Support & Safety</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#safety" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#cancellation" className="text-gray-400 hover:text-white transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#trust" className="text-gray-400 hover:text-white transition-colors">
                  Trust & Verification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Trust Badges */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
              <div className="text-sm text-gray-400">Secure Payments via:</div>
              <div className="flex items-center gap-4">
                <div className="bg-white px-4 py-2 rounded">
                  <span className="text-[#5f259f] font-bold">Razorpay</span>
                </div>
                <div className="bg-white px-4 py-2 rounded">
                  <span className="text-gray-900 font-bold">UPI</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded">
                  <Shield className="w-4 h-4 text-[#10a37f]" />
                  <span className="text-gray-900 text-sm">SSL Secure</span>
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              © 2026 Swadeshi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
