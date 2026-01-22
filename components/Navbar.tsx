
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass w-full max-w-6xl rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <Shield className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span className="font-cyber font-bold text-xl tracking-tighter text-white">
            ANIK <span className="text-cyan-400">CYBER.DEV</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#form"
            onClick={(e) => handleNavClick(e, '#form')}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            GET STARTED
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-cyan-400 text-lg font-bold"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#form"
            onClick={(e) => handleNavClick(e, '#form')}
            className="bg-cyan-500 text-center text-slate-900 font-bold py-3 rounded-lg"
          >
            GET STARTED
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
