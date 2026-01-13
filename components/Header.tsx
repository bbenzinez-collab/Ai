import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
            <img 
                src="https://i.ibb.co/wjYWwXT/PGSOFT-Logo-Secondary-Reserved.png" 
                alt="PG SOFT" 
                className="h-8 md:h-10 object-contain" 
            />

            {/* Nav Items (Desktop) */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-bold tracking-wide text-slate-300">
                <a href="#" className="text-white hover:text-white transition">HOME</a>
                <a href="#" className="hover:text-white transition">GAMES</a>
                <a href="#" className="hover:text-white transition">NEWS</a>
                <a href="#" className="hover:text-white transition">MATH</a>
                <a href="#" className="hover:text-white transition">COMPANY</a>
                <a href="#" className="hover:text-white transition">EVENTS</a>
                <a href="#" className="hover:text-white transition">PARTNERS</a>
            </nav>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;