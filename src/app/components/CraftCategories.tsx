import { ChevronRight } from "lucide-react";

export function CraftCategories() {
  const crafts = [
    {
      name: "Pottery",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1756201409582-e0abcd78a12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwb3R0ZXJ5JTIwY3JhZnQlMjBoYW5kcyUyMGNsYXl8ZW58MXx8fHwxNzc0ODg3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Weaving",
      location: "Kutch",
      image: "https://images.unsplash.com/photo-1611574557351-00889b20a36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWF2aW5nJTIwdGV4dGlsZSUyMGhhbmRsb29tfGVufDF8fHx8MTc3NDg4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Miniature Painting",
      location: "Udaipur",
      image: "https://images.unsplash.com/photo-1719498481736-c125dfa45b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtaW5pYXR1cmUlMjBwYWludGluZyUyMHRyYWRpdGlvbmFsJTIwYXJ0fGVufDF8fHx8MTc3NDg4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Stone Carving",
      location: "Odisha",
      image: "https://images.unsplash.com/photo-1767533427617-22e2f253f13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdG9uZSUyMGNhcnZpbmclMjBzY3VscHR1cmUlMjBoZXJpdGFnZXxlbnwxfHx8fDE3NzQ4ODcxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-20 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Discover Your Next Skill
          </h2>
          <p className="text-gray-600 text-lg">
            Explore authentic craft experiences across India
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {crafts.map((craft, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 snap-center group cursor-pointer"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-xl group-hover:ring-[#c1543a] transition-all duration-300">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif text-gray-900 mb-1">
                  {craft.name}
                </h3>
                <p className="text-gray-600 flex items-center justify-center gap-1">
                  {craft.location}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
