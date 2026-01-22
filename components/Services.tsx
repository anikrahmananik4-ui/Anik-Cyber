
import React from 'react';
import { ArrowUpRight, Globe, FileText, Share2, CreditCard, Cpu } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const categories = Object.values(ServiceCategory);

  const getIcon = (cat: ServiceCategory) => {
    switch (cat) {
      case ServiceCategory.GOVERNMENT: return <Globe className="text-cyan-400" />;
      case ServiceCategory.DOCUMENT: return <FileText className="text-blue-400" />;
      case ServiceCategory.DIGITAL: return <Share2 className="text-purple-400" />;
      case ServiceCategory.PAYMENT: return <CreditCard className="text-emerald-400" />;
      case ServiceCategory.TECHNICAL: return <Cpu className="text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-3xl md:text-5xl font-bold text-white mb-4">Elite Service Hub</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our comprehensive suite of professional digital services designed for efficiency and results.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat} className="animate-in fade-in slide-in-from-bottom-10 duration-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 glass rounded-xl border-cyan-500/20">{getIcon(cat)}</div>
                <h3 className="font-cyber text-xl md:text-2xl font-bold text-white uppercase tracking-tight">{cat}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.filter(s => s.category === cat).map((service) => (
                  <div
                    key={service.id}
                    className="group relative glass p-6 rounded-2xl border-white/5 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="text-cyan-400 w-5 h-5" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-4 pr-4">
                        {service.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full mt-6 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-bold text-sm hover:bg-cyan-600 hover:border-cyan-500 transition-all transform active:scale-95"
                    >
                      GET SERVICE
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
