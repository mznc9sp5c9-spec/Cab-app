import { Link } from "react-router-dom";
import { Car, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400 text-black">
                <Car className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cab for Everyone
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Reliable rides for every journey. Affordable, comfortable, and on-time cab services across the city and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-yellow-400">
                  Daily Rental
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-yellow-400">
                  Outstation Trips
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-yellow-400">
                  Wedding Rentals
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-sm text-gray-400 hover:text-yellow-400">
                  Our Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-yellow-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-gray-400 hover:text-yellow-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-yellow-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 shrink-0 text-yellow-400" />
                <span>123 Mobility Street, Tech Hub, City 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 shrink-0 text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 shrink-0 text-yellow-400" />
                <span>support@cabforeveryone.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cab for Everyone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
