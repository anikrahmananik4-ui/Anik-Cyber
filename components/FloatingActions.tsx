
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-90 animate-in slide-in-from-right-10 md:hidden"
      >
        <Phone size={24} />
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-90 animate-in slide-in-from-right-10 delay-100"
      >
        <MessageCircle size={30} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Chat with Anik
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
