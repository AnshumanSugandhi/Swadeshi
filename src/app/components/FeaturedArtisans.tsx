import { Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturedArtisans() {
  const artisans = [
    {
      id: "1",
      name: "Rameshwar Ji",
      craft: "Blue Pottery Masterclass + 1 Night Stay",
      image: "https://images.unsplash.com/photo-1650726583448-dda0065f2f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwYXJ0aXNhbiUyMHRyYWRpdGlvbmFsJTIwY3JhZnRzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODg3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5.0,
      reviews: 127,
      location: "Jaipur, Rajasthan",
    },
    {
      id: "2",
      name: "Kavita Devi",
      craft: "Traditional Weaving Workshop + Village Tour",
      image: "https://images.unsplash.com/photo-1763733593267-c0fb2051d73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGFydGlzYW4lMjB3ZWF2aW5nJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzc0ODg3MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5.0,
      reviews: 94,
      location: "Kutch, Gujarat",
    },
    {
      id: "3",
      name: "Gopal Das",
      craft: "Miniature Painting Immersion + Homestay",
      image: "https://images.unsplash.com/photo-1756670164589-08daf1a0d236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBlbGRlcmx5JTIwY3JhZnRzcGVyc29uJTIwaGFuZHdvcmslMjBkZXRhaWxlZHxlbnwxfHx8fDE3NzQ4ODcxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5.0,
      reviews: 156,
      location: "Udaipur, Rajasthan",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Learn from the Masters
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with verified heritage artisans for authentic cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Link
              key={artisan.id}
              to={`/artisan/${artisan.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-[#10a37f] text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Vocal for Local</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif text-gray-900">
                    {artisan.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-[#c1543a] text-[#c1543a]" />
                    <span className="font-medium">{artisan.rating}</span>
                    <span className="text-gray-500 text-sm">({artisan.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-1 text-sm">
                  {artisan.location}
                </p>

                <p className="text-gray-800 mb-6">
                  {artisan.craft}
                </p>

                <button className="w-full bg-[#c1543a] text-white py-3 rounded-lg hover:bg-[#a8442f] transition-colors">
                  Book Securely
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}