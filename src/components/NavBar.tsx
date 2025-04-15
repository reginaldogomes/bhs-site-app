import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { label: "Inicial", href: "/" },
  { label: "Serviços", href: "/services" },
  { label: "Sobre", href: "/about" },
  { label: "Contato", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:text-secondary font-bold text-lg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {/*isMenuOpen ? <FaTimes /> : <FaBars />*/}
          <FaBars />
        </button>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed inset-0 bg-bhs-100 text-white flex flex-col items-center justify-center space-y-6 transform transition-all duration-700 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl text-white"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          <ul className="text-center space-y-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-2xl font-bold hover:text-secondary transition duration-300"
                  onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LinkedIn Icon */}
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/company/bh-solutions-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-secondary transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
