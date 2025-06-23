// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { label: "Inicial", href: "/" },
  { label: "Soluções", href: "/solutions" },
  { label: "Sobre", href: "/about" },
  { label: "Produtos", href: "/products" },
  { label: "Contato", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto py-4 px-6">
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-white hover:text-secondary font-semibold text-base transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="ml-4 bg-white text-primary font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-200"
        >
          Solicitar Consultoria
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl"
          aria-label="Abrir Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary text-white flex flex-col items-center justify-center gap-8 transform transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-5 text-3xl text-white"
          aria-label="Fechar Menu"
        >
          <FaTimes />
        </button>

        <ul className="text-center space-y-6 text-xl font-semibold">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-secondary transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/especialista"
          className="bg-white text-primary px-6 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition-all duration-200"
          onClick={closeMenu}
        >
          Falar com Especialista
        </Link>

        <a
          href="https://www.linkedin.com/company/bh-solutions-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-secondary transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
