
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, User, Phone, Briefcase, MessageSquare, Shield } from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../constants';

interface ContactFormProps {
  initialService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    service: initialService || '',
    message: ''
  });

  // Sync initial service when it changes from parent
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct stylish WhatsApp message
    const whatsappBase = `https://wa.me/88${PHONE_NUMBER}`;
    
    const messageText = `🚀 *NEW CYBER SERVICE REQUEST* 🚀
━━━━━━━━━━━━━━━━━━━━
👤 *CLIENT:* ${formData.fullName.toUpperCase()}
📞 *CONTACT:* ${formData.mobile}
🛠️ *SERVICE:* ${formData.service}

💬 *MESSAGE:* 
_${formData.message || 'No additional instructions provided.'}_
━━━━━━━━━━━━━━━━━━━━
📡 *VIA:* ANIK CYBER.DEV PORTAL
💎 *STATUS:* PRIORITY ENCRYPTED`;

    const encodedMessage = encodeURIComponent(messageText);
    const finalUrl = `${whatsappBase}?text=${encodedMessage}`;

    // Show cinematic success state briefly then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open WhatsApp in new tab
      window.open(finalUrl, '_blank');
      
      // Reset form after some time
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          mobile: '',
          service: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="glass max-w-2xl mx-auto p-12 rounded-3xl text-center border-green-500/30 animate-in zoom-in duration-500">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle2 size={48} className="text-green-500" />
          </div>
        </div>
        <h3 className="font-cyber text-2xl font-bold text-white mb-4">Transmission Successful</h3>
        <p className="text-gray-400 mb-8">
          Your request has been formatted with premium protocols. Redirecting to our WhatsApp secure channel...
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-50 transition-colors"
        >
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <section id="form" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-cyber text-4xl md:text-5xl font-bold text-white mb-6">Initialize Project</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to take the next step? Fill out our secured request form. Clicking "Transmit" will generate a stylish, professional summary and forward it to our primary WhatsApp channel.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Secure Protocol', desc: 'Encrypted transfer directly to our WhatsApp.' },
                { title: 'Premium Formatting', desc: 'Your request is sent as a stylish priority message.' },
                { title: 'Active Response', desc: 'Our team monitors the encrypted feed 24/7.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 glass rounded-2xl border-white/5">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                  <div>
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="w-32 h-32 text-cyan-500" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <User size={14} className="text-cyan-400" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Phone size={14} className="text-cyan-400" /> Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="e.g. 017XXXXXXXX"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14} className="text-cyan-400" /> Service Required
                </label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a Service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} className="text-cyan-400" /> Message (Optional)
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-5 rounded-xl font-cyber font-bold tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl
                  ${isSubmitting ? 'bg-slate-800 text-gray-500 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 hover:-translate-y-1 active:scale-95'}`}
              >
                {isSubmitting ? 'ENCRYPTING MESSAGE...' : 'TRANSMIT STYLISH MESSAGE'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
