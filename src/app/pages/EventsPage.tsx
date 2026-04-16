import { useState } from "react";
import { Link } from "react-router";
import { Home, Compass, Calendar, User, Leaf, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

export function EventsPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featuredEvents = [
    {
      image: "https://images.unsplash.com/photo-1774437897209-67abc350fb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQ4ODgxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Holi Festival Experience",
      location: "Jaipur",
      date: "March 2026",
    },
    {
      image: "https://images.unsplash.com/photo-1767330855647-48b17d34fe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjcmFmdCUyMGV4aGliaXRpb24lMjB3b3Jrc2hvcCUyMGV2ZW50fGVufDF8fHx8MTc3NDg4ODE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "National Crafts Exhibition",
      location: "Delhi",
      date: "April 2026",
    },
    {
      image: "https://images.unsplash.com/photo-1774615599938-f063b0cee881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydXJhbCUyMHRvdXJpc20lMjBsYW5kc2NhcGUlMjB2aWxsYWdlfGVufDF8fHx8MTc3NDg4ODE1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Village Tourism Fair",
      location: "Udaipur",
      date: "May 2026",
    },
  ];

  const festivals = [
    { name: "Pushkar Camel Fair", date: "Nov 15-23, 2026", location: "Pushkar, Rajasthan" },
    { name: "Rann Utsav", date: "Dec 1 - Feb 28, 2027", location: "Kutch, Gujarat" },
    { name: "Konark Dance Festival", date: "Dec 1-5, 2026", location: "Konark, Odisha" },
  ];

  const exhibitions = [
    { name: "Handloom Heritage Week", date: "April 10-17, 2026", location: "Mumbai" },
    { name: "Stone Carving Symposium", date: "May 5-12, 2026", location: "Bhubaneswar" },
    { name: "Miniature Art Festival", date: "June 1-7, 2026", location: "Udaipur" },
  ];

  const workshops = [
    {
      id: "1",
      title: "Block Printing Intensive",
      artisan: "Mohan Lal",
      image: "https://images.unsplash.com/photo-1756201409582-e0abcd78a12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwb3R0ZXJ5JTIwY3JhZnQlMjBoYW5kcyUyMGNsYXl8ZW58MXx8fHwxNzc0ODg3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Sanganer, Rajasthan",
      date: "April 20-21, 2026",
      seatsLeft: 3,
      price: 6500,
    },
    {
      id: "2",
      title: "Warli Painting Workshop",
      artisan: "Sunita Patil",
      image: "https://images.unsplash.com/photo-1719498481736-c125dfa45b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtaW5pYXR1cmUlMjBwYWludGluZyUyMHRyYWRpdGlvbmFsJTIwYXJ0fGVufDF8fHx8MTc3NDg4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Thane, Maharashtra",
      date: "April 25-26, 2026",
      seatsLeft: 5,
      price: 5500,
    },
    {
      id: "3",
      title: "Terracotta Sculpture",
      artisan: "Ravi Kumar",
      image: "https://images.unsplash.com/photo-1611574557351-00889b20a36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWF2aW5nJTIwdGV4dGlsZSUyMGhhbmRsb29tfGVufDF8fHx8MTc3NDg4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Kumartuli, Kolkata",
      date: "May 5-6, 2026",
      seatsLeft: 2,
      price: 7500,
    },
  ];

  const pastEvents = [
    "https://images.unsplash.com/photo-1629546948781-8d96cebe6577?w=300",
    "https://images.unsplash.com/photo-1754245647418-2375843282e9?w=300",
    "https://images.unsplash.com/photo-1723005315946-4ba11c55de39?w=300",
    "https://images.unsplash.com/photo-1650726583448-dda0065f2f11?w=300",
    "https://images.unsplash.com/photo-1763733593267-c0fb2051d73a?w=300",
  ];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  return (
    <div className="min-h-screen bg-[#faf7f4] pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#10a37f] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-serif text-gray-900">Events</span>
          </div>
        </div>
      </header>

      {/* Featured Events Carousel */}
      <section className="relative h-80 overflow-hidden">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {featuredEvents.map((event, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-serif mb-2">{event.title}</h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCarouselIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === carouselIndex ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Upcoming Festivals</h2>
        <div className="space-y-3">
          {festivals.map((festival, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-serif text-gray-900 mb-2">{festival.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {festival.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {festival.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Upcoming Exhibitions</h2>
        <div className="space-y-3">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-serif text-gray-900 mb-2">{exhibition.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exhibition.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exhibition.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Upcoming Workshops</h2>
        <div className="space-y-4">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="flex gap-4">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-1 p-4">
                  <h3 className="font-serif text-gray-900 mb-1">{workshop.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">with {workshop.artisan}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {workshop.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {workshop.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#c1543a]">
                      Only {workshop.seatsLeft} seats left!
                    </span>
                    <Link
                      to={`/artisan/${workshop.id}`}
                      className="px-4 py-2 bg-[#c1543a] text-white rounded-lg text-sm hover:bg-[#a8442f] transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Marquee */}
      <section className="py-8 overflow-hidden">
        <h2 className="text-2xl font-serif text-gray-900 mb-4 px-4">Past Events</h2>
        <div className="flex gap-4 animate-scroll">
          {[...pastEvents, ...pastEvents].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Past event"
              className="w-64 h-40 object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Cultural Quote */}
      <section className="px-4 py-12">
        <div className="bg-gradient-to-br from-[#c1543a] to-[#a8442f] rounded-2xl p-8 text-center text-white">
          <p className="text-2xl font-serif italic mb-4">
            "Culture is the widening of the mind and of the spirit."
          </p>
          <p className="text-white/80">— Jawaharlal Nehru</p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-3">
          <Link to="/home" className="flex flex-col items-center gap-1 text-gray-600">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center gap-1 text-gray-600">
            <Compass className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link to="/events" className="flex flex-col items-center gap-1 text-[#c1543a]">
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Events</span>
          </Link>
          <Link to="/login" className="flex flex-col items-center gap-1 text-gray-600">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
export default EventsPage;