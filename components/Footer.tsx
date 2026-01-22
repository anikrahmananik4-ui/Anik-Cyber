
import React from 'react';
import { Shield, Facebook, Youtube, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Newsletter service coming soon! Thank you for your interest.");
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-cyan-400 w-8 h-8" />
              <span className="font-cyber font-bold text-xl tracking-tighter text-white">
                ANIK <span className="text-cyan-400">CYBER.DEV</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              The premier ultra-luxury digital service platform in Bangladesh. Fast, secure, and future-focused solutions for a smarter tomorrow.
            </p>
            <div className="flex gap-4">
              {[Facebook, Youtube, Github, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 glass rounded-lg text-gray-500 hover:text-cyan-400 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-cyber font-bold text-white mb-6 uppercase tracking-widest text-sm">Operation Hub</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-cyan-400 transition-colors">Home Base</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-cyan-400 transition-colors">Service Archive</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">Internal Ops (About)</a></li>
              <li><a href="#form" onClick={(e) => handleLinkClick(e, '#form')} className="hover:text-cyan-400 transition-colors">Deploy Request</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cyber font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal & Data</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">Privacy Protocol</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">Terms of Engagement</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">Refund Logic</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">Data Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cyber font-bold text-white mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Subscribe for futuristic tech updates.</p>
            <form className="flex flex-col gap-2" onSubmit={handleNewsletter}>
              <input
                required
                type="email"
                placeholder="Enter Email"
                className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 text-sm"
              />
              <button 
                type="submit"
                className="bg-cyan-500 text-slate-900 font-bold py-2 rounded-lg text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ANIK CYBER.DEV | ALL PROTOCOLS RESERVED | BUILT FOR SMART BANGLADESH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
