import { useState } from "react";
import { Users, Briefcase, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const vehicles = [
  {
    id: 1,
    name: "Economy Hatchback",
    category: "Hatchback",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    capacity: 4,
    luggage: 2,
    pricePerKm: 10,
    pricePerHour: 150,
    features: ["AC", "Music System", "Comfortable Seats"],
  },
  {
    id: 2,
    name: "Premium Sedan",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800",
    capacity: 4,
    luggage: 3,
    pricePerKm: 14,
    pricePerHour: 200,
    features: ["AC", "Extra Legroom", "Premium Audio", "Free WiFi"],
  },
  {
    id: 3,
    name: "Executive Sedan",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    capacity: 4,
    luggage: 3,
    pricePerKm: 16,
    pricePerHour: 250,
    features: ["AC", "Leather Seats", "Premium Audio", "Free WiFi"],
  },
  {
    id: 4,
    name: "Family SUV",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
    capacity: 6,
    luggage: 4,
    pricePerKm: 20,
    pricePerHour: 300,
    features: ["AC", "Spacious", "Carrier", "Perfect for Hills"],
  },
  {
    id: 5,
    name: "Luxury SUV",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1503376712351-1c4360cb6752?auto=format&fit=crop&q=80&w=800",
    capacity: 6,
    luggage: 4,
    pricePerKm: 25,
    pricePerHour: 400,
    features: ["AC", "Premium Interiors", "Sunroof", "VIP Treatment"],
  },
  {
    id: 6,
    name: "Premium Luxury",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    capacity: 4,
    luggage: 3,
    pricePerKm: 50,
    pricePerHour: 1000,
    features: ["AC", "Chauffeur Driven", "Decorations Available", "Red Carpet"],
  },
];

const categories = ["All", "Hatchback", "Sedan", "SUV", "Luxury"];

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVehicles =
    activeCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Our Premium Fleet
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Choose from our wide range of well-maintained vehicles for your next journey.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-yellow-400 text-black shadow-sm"
                  : "bg-white text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 shrink-0">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                  {vehicle.category}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.capacity} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    <span>{vehicle.luggage} Bags</span>
                  </div>
                </div>

                <div className="mt-6 flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Features</h4>
                  <ul className="mt-2 space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-end justify-between border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₹{vehicle.pricePerKm}</p>
                    <p className="text-xs text-gray-500">per km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-700">₹{vehicle.pricePerHour}</p>
                    <p className="text-xs text-gray-500">per hour</p>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-lg bg-yellow-400 py-3 text-sm font-bold text-black transition-colors hover:bg-yellow-500">
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
