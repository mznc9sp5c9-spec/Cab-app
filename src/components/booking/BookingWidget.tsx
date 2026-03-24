import { useState } from "react";
import { Car, MapPin, Calendar, Clock, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import DailyRentalForm from "./DailyRentalForm";
import OutstationForm from "./OutstationForm";
import WeddingRentalForm from "./WeddingRentalForm";

type ServiceType = "daily" | "outstation" | "wedding";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<ServiceType>("daily");

  const tabs = [
    { id: "daily", label: "Daily Rental" },
    { id: "outstation", label: "Outstation" },
    { id: "wedding", label: "Wedding Rental" },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:max-w-lg lg:max-w-xl">
      <div className="flex space-x-1 rounded-xl bg-gray-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ServiceType)}
            className={cn(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all",
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "daily" && <DailyRentalForm />}
        {activeTab === "outstation" && <OutstationForm />}
        {activeTab === "wedding" && <WeddingRentalForm />}
      </div>
    </div>
  );
}
