import { ShieldCheck, Users, Clock, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About Cab for Everyone
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            We are committed to providing reliable, affordable, and comfortable transportation for everyone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At Cab for Everyone, we believe that transportation should be accessible, safe, and hassle-free. Whether you need a quick ride across town, a comfortable vehicle for an outstation trip, or a luxury car for your special day, we've got you covered.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2020, we have quickly grown to become one of the most trusted cab rental services in the region, serving thousands of satisfied customers every month.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=800"
              alt="City driving"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Why Choose Us?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <ShieldCheck className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Safety First</h3>
              <p className="mt-2 text-gray-500">All our drivers are verified and our vehicles are regularly inspected.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Punctuality</h3>
              <p className="mt-2 text-gray-500">We value your time. Our drivers arrive on time, every time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Customer Focus</h3>
              <p className="mt-2 text-gray-500">24/7 support to ensure your journey is smooth and pleasant.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Wide Coverage</h3>
              <p className="mt-2 text-gray-500">Operating across major cities and popular outstation routes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
