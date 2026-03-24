import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Have a question or need help with a booking? We're here for you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-100">
                    <MapPin className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                  <p className="mt-1 text-gray-500">
                    123 Mobility Street<br />
                    Tech Hub, City 10001<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-100">
                    <Phone className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="mt-1 text-gray-500">
                    +1 (555) 123-4567<br />
                    Mon-Fri 9am to 6pm
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-100">
                    <Mail className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-500">
                    support@cabforeveryone.com<br />
                    We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-sm ring-1 ring-gray-200">
              {/* Placeholder for Google Map */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Google Map Integration Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
