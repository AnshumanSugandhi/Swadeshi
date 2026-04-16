import { TrendingUp, Users, Award } from "lucide-react";

export function ImpactBar() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "₹20L+",
      label: "Generated for Villages",
    },
    {
      icon: Users,
      value: "85%",
      label: "Direct Payout to Artisans",
    },
    {
      icon: Award,
      value: "100+",
      label: "Verified Heritage Crafts",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#10a37f]/10 mb-4">
                  <Icon className="w-6 h-6 text-[#10a37f]" />
                </div>
                <div className="text-3xl md:text-4xl font-serif text-[#c1543a] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
