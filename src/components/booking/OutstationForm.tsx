import { useState } from "react";
import { MapPin, Calendar, Car } from "lucide-react";

export default function OutstationForm() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("round");
  const [startDate, setStartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [vehicle, setVehicle] = useState("sedan");

  const calculatePrice = () => {
    let base = tripType === "round" ? 2000 : 1500;
    if (vehicle === "suv") base *= 1.5;
    if (vehicle === "luxury") base *= 3;
    return base;
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === "oneWay"}
            onChange={(e) => setTripType(e.target.value)}
            className="text-yellow-500 focus:ring-yellow-400"
          />
          <span className="text-sm font-medium text-gray-700">One Way</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === "round"}
            onChange={(e) => setTripType(e.target.value)}
            className="text-yellow-500 focus:ring-yellow-400"
          />
          <span className="text-sm font-medium text-gray-700">Round Trip</span>
        </label>
      </div>

      <div className="space-y-3">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pickup City"
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
            placeholder="Destination City"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="date"
            placeholder="Start Date"
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        {tripType === "round" && (
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              placeholder="Return Date"
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        )}
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

      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Estimated Price</span>
          <span className="text-2xl font-bold text-gray-900">Starting ₹{calculatePrice()}</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">Final price depends on actual distance traveled.</p>
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
