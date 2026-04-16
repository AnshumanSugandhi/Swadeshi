import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to Firebase or an email API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-orange-600 py-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-orange-100 max-w-2xl mx-auto">Have questions about a workshop or a stay? Our team is here to help you connect with Bharat's heritage.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Phone /></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Call Us</p><p className="font-semibold">+91 98765 43210</p></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Mail /></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Email</p><p className="font-semibold">support@swadeshi.in</p></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><MapPin /></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Office</p><p className="font-semibold">Khalapur, Maharashtra</p></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
                <p className="text-gray-500 mt-2">Team Swadeshi will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-orange-600 font-bold">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input type="text" required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500">
                    <option>General Inquiry</option>
                    <option>Workshop Booking Support</option>
                    <option>Homestay Partnership</option>
                    <option>Artisan Onboarding</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
                  <textarea rows={4} required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white p-4 rounded-xl font-bold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;