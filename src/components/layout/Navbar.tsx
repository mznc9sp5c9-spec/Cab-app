import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400 text-black">
                <Car className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Cab for Everyone
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-yellow-500",
                  location.pathname === link.path
                    ? "text-yellow-500"
                    : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/"
              className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  location.pathname === link.path
                    ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md bg-yellow-400 px-4 py-2 text-center text-base font-semibold text-black shadow-sm hover:bg-yellow-500"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
