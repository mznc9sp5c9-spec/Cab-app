import { ShieldCheck, Clock, CreditCard, ThumbsUp, Star } from "lucide-react";
import BookingWidget from "../components/booking/BookingWidget";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      name: "Transparent Pricing",
      description: "No hidden charges. Know your estimated fare before you book.",
      icon: CreditCard,
    },
    {
      name: "Verified Drivers",
      description: "All our drivers undergo strict background checks and training.",
      icon: ShieldCheck,
    },
    {
      name: "24/7 Support",
      description: "We are always here to help you, anytime, anywhere.",
      icon: Clock,
    },
    {
      name: "Clean Vehicles",
      description: "Well-maintained and regularly sanitized cars for your safety.",
      icon: ThumbsUp,
    },
  ];

  const testimonials = [
    {
      content: "Excellent service! The driver was on time and the car was spotless. Highly recommended for daily commutes.",
      author: "Sarah Johnson",
      role: "Daily Commuter",
      rating: 5,
    },
    {
      content: "Booked an outstation trip for my family. Very comfortable ride and transparent pricing. Will use again.",
      author: "Raj Patel",
      role: "Traveler",
      rating: 5,
    },
    {
      content: "Used their wedding rental service. The luxury car was decorated beautifully and the chauffeur was very professional.",
      author: "Emily Chen",
      role: "Event Planner",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
            alt="City traffic with yellow cab"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent mix-blend-multiply" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Rides for <span className="text-yellow-400">Every Journey</span>
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Affordable | Comfortable | On-Time
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />
                  <span>Safe Rides</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>On Time</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-500">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a perfect ride
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                    <feature.icon className="h-8 w-8 text-yellow-600" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Fleet Showcase Preview */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Premium Fleet</h2>
              <p className="mt-4 text-lg text-gray-500">Choose the perfect vehicle for your needs.</p>
            </div>
            <Link
              to="/fleet"
              className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
            >
              View All Vehicles
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Economy Hatchback", price: "₹10/km", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" },
              { name: "Premium Sedan", price: "₹14/km", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800" },
              { name: "Luxury SUV", price: "₹20/km", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800" },
            ].map((car) => (
              <div key={car.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
                <img src={car.image} alt={car.name} className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">Starting from {car.price}</p>
                  <Link
                    to="/fleet"
                    className="mt-4 block w-full rounded-md bg-yellow-50 px-3 py-2 text-center text-sm font-semibold text-yellow-700 hover:bg-yellow-100"
                  >
                    Select Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              to="/fleet"
              className="block w-full rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Loved by thousands of customers
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready for your next ride?</span>
            <span className="block text-yellow-900">Book in just 2 clicks today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
