
import React from 'react';
import { Phone, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 animate-bounce">
          < Zap size={14} /> Future-Ready Solutions
        </div>

        <h1 className="font-cyber text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
          <span className="block text-white">Anik Cyber.Dev</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Smart Digital Solutions
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Fast • Secure • Professional • Trusted Cyber Service. Empowering your digital journey with premium-grade technology support in Bangladesh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-50 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Phone size={20} /> Call Now
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 border-white/20"
          >
            <MessageSquare size={20} className="text-green-400" /> WhatsApp Chat
          </a>
          <a
            href="#form"
            onClick={scrollToForm}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            Get Service <ArrowRight size={20} />
          </a>
        </div>

        {/* Dashboard-like stats mockup */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            { label: 'Uptime', val: '99.9%' },
            { label: 'Security', val: 'Enterprise' },
            { label: 'Response', val: '< 15m' },
            { label: 'Success', val: '100%' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5 group hover:border-cyan-500/50 transition-all">
              <div className="text-2xl font-cyber font-bold text-cyan-400 mb-1">{stat.val}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest group-hover:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
