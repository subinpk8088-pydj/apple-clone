import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import { navigation } from "../../constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          Lumina
        </NavLink>

        {/* Desktop */}

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}

        <div className="hidden items-center gap-5 lg:flex">
          <Search
            className="cursor-pointer transition hover:scale-110"
            size={20}
          />

          <ShoppingBag
            className="cursor-pointer transition hover:scale-110"
            size={20}
          />
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block border-b px-6 py-4"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}