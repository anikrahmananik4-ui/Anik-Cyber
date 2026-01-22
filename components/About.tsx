
import React from 'react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: <ShieldCheck className="text-cyan-400" />, title: 'Ultra-Secure', desc: 'Enterprise-grade protection for your data and identity.' },
    { icon: <Zap className="text-blue-400" />, title: 'Future-Focused', desc: 'Utilizing modern tech stacks for smart digital solutions.' },
    { icon: <Heart className="text-purple-400" />, title: 'Customer First', desc: 'Honest, reliable, and beginner-friendly support system.' },
    { icon: <Award className="text-emerald-400" />, title: 'Certified Pro', desc: 'Professional service delivery for all Bangladesh-focused needs.' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
            <img 
              src="https://picsum.photos/seed/cyberabout/800/800" 
              alt="Anik Cyber Tech" 
              className="relative rounded-3xl object-cover w-full h-[500px] border border-white/10 shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border-cyan-500/30">
              <div className="font-cyber font-bold text-white text-xl mb-1">Anik Cyber.Dev</div>
              <div className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Digital Service Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="font-cyber text-4xl font-bold text-white mb-8">Trusted by Thousands in Bangladesh</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              We are not just a service provider; we are your digital partner. Anik Cyber.Dev focuses on bridging the gap between complex technology and everyday digital needs for the people of Bangladesh. From government applications to high-end technical support, we ensure every interaction is fast, secure, and professional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 p-3 glass rounded-xl h-fit border-white/5 group-hover:border-cyan-500/50 transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
