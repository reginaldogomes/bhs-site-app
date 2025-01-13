// src/components/Header.tsx
'use client'; // Adicione esta linha

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './NavBar';

const logo = '/bh-solutions-logo.webp'


const Header: React.FC = () => {
  return (
    <header className="bg-primary sticky m-auto top-0 z-50 flex justify-between items-center p-6">
      <div className="text-xl font-semibold text-slate-50">
        <Link href="#top">
            <Image
                src={logo}
                alt="BH Solutions"
                width={100}
                height={30}
            />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
