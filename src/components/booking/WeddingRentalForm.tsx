import { useState } from "react";
import { MapPin, Calendar, Clock, Car } from "lucide-react";

export default function WeddingRentalForm() {
  const [pickup, setPickup] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("fullDay");
  const [vehicle, setVehicle] = useState("luxury_sedan");

  const calculatePrice = () => {
    let base = duration === "fullDay" ? 8000 : 4000;
    if (vehicle === "luxury_suv") base += 2000;
    if (vehicle === "premium_luxury") base += 5000;
    return base;
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-3">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Event Location"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="date"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="halfDay">Half Day (6 Hrs)</option>
            <option value="fullDay">Full Day (12 Hrs)</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="luxury_sedan">Luxury Sedan (BMW 5 Series / Audi A6)</option>
          <option value="luxury_suv">Luxury SUV (Fortuner / Endeavour)</option>
          <option value="premium_luxury">Premium Luxury (Mercedes S-Class)</option>
        </select>
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Estimated Price</span>
          <span className="text-2xl font-bold text-gray-900">₹{calculatePrice()}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">Includes decoration and professional chauffeur.</p>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-yellow-400 py-3 text-lg font-bold text-black transition-colors hover:bg-yellow-500"
      >
        Book Now
      </button>
    </form>
  );
}
