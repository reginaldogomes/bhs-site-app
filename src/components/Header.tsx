// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User, ChevronDown } from "lucide-react"; // ícones do Lucide

import Navbar from "./NavBar";

const logo = "/bh-solutions-logo.webp";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 flex justify-between items-center px-6 py-4">
      <div className="text-xl font-semibold text-slate-50">
        <Link href="/">
          <Image src={logo} alt="BH Solutions" width={100} height={30} />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Navbar />

        {/* {!isLoggedIn ? (
          <Link
            href="/login"
            className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition"
          >
            <User size={22} />
          </Link>
        ) : (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition"
            >
              <User size={18} />
              <span>Meu Perfil</span>
              <ChevronDown size={16} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Painel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Meu Perfil
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
