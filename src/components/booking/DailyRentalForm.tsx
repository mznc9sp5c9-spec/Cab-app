import { useState } from "react";
import { MapPin, Calendar, Clock, Car } from "lucide-react";

export default function DailyRentalForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [duration, setDuration] = useState("4hr");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("sedan");

  const calculatePrice = () => {
    let base = 500;
    if (duration === "8hr") base = 900;
    if (duration === "12hr") base = 1200;
    
    if (vehicle === "suv") base *= 1.5;
    if (vehicle === "luxury") base *= 3;
    
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
            placeholder="Drop Location"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
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
          <input
            type="time"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="4hr">4 Hrs / 40 km</option>
            <option value="8hr">8 Hrs / 80 km</option>
            <option value="12hr">12 Hrs / 120 km</option>
          </select>
        </div>
        <div className="relative">
          <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Estimated Price</span>
          <span className="text-2xl font-bold text-gray-900">₹{calculatePrice()}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">Includes base fare and driver charges. Taxes extra.</p>
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
