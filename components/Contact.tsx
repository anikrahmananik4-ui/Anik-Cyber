
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-950/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold text-white mb-4">Direct Connection</h2>
          <p className="text-gray-400">Reach out through your preferred channel for immediate assistance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/50 transition-all text-center group"
          >
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="text-cyan-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Voice Comms</h3>
            <p className="text-gray-500 mb-4">{PHONE_NUMBER}</p>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              CALL NOW <ExternalLink size={12} />
            </span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-8 rounded-3xl border-white/5 hover:border-green-500/50 transition-all text-center group"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-green-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">WhatsApp Protocol</h3>
            <p className="text-gray-500 mb-4">24/7 Priority Chat</p>
            <span className="text-green-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              START CHAT <ExternalLink size={12} />
            </span>
          </a>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="glass p-8 rounded-3xl border-white/5 hover:border-purple-500/50 transition-all text-center group"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="text-purple-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Secure Email</h3>
            <p className="text-gray-500 mb-4">{EMAIL_ADDRESS}</p>
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              SEND MAIL <ExternalLink size={12} />
            </span>
          </a>
        </div>

        {/* Mock Map */}
        <div className="glass rounded-3xl overflow-hidden h-[400px] border-white/10 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2625291410654!2d90.3995878!3d23.7371131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858f2762a4d%3A0x6b0402e3b2b3ccb9!2sDhaka!5e0!3m2!1sen!2sbd!4v1625482349021!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Service Location"
          ></iframe>
          <div className="absolute top-4 left-4 glass px-4 py-2 rounded-lg flex items-center gap-2 border-cyan-500/30">
            <MapPin size={16} className="text-cyan-400" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Base Operations: Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
