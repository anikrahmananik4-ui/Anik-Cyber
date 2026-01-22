
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone, MessageCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PHONE_NUMBER, WHATSAPP_LINK, SERVICES } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  detectedService?: string;
}

const AI_NAME = "Anik AI";
const SYSTEM_INSTRUCTION = `
You are ${AI_NAME}, the official ultra-luxury, high-tech Cyber & Digital Service Assistant for "Anik Cyber.Dev".
Your persona is professional, expert-level, polite, and trustworthy.

CORE KNOWLEDGE:
- Services: ${SERVICES.map(s => s.title).join(', ')}
- Phone: ${PHONE_NUMBER}
- Email: anikrahmananik4@gmail.com
- Location: Dhaka, Bangladesh (Operations worldwide/nationwide)

CONVERSATIONAL RULES:
1. Language: Always respond in the language the user uses (Bangla or English). If they use both, use a natural mix (Banglish).
2. Natural Tone: Use a helpful, human-like tone. Avoid robotic "I am an AI" phrases where possible.
3. Expertise: When users ask about NID, Passport, or Birth Certificates, provide specific lists of required documents and estimated processing times based on standard Bangladeshi procedures.
4. Service Detection: If the user mentions a specific service they need (e.g., "NID correction korbo"), acknowledge it and encourage them to use the "Get Service" button.
5. Guidance: If they are confused, guide them step-by-step.

MANDATORY OUTPUT FORMAT:
If you identify that the user is interested in a specific service from our list, start your response with the tag [SERVICE: Service Name] on its own line, then your natural response. 
Example:
[SERVICE: NID Correction Apply]
অবশ্যই! এনআইডি সংশোধনের জন্য আপনার এই ডকুমেন্টগুলো লাগবে...
`;

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: 'Hello! আমি Anik AI। আমি fresh session থেকে শুরু করছি 😊 আপনার ডিজিটাল সমস্যার স্মার্ট সমাধান দিতে আমি প্রস্তুত। NID, Passport বা অন্য যেকোনো অনলাইন সার্ভিস নিয়ে আপনার কী প্রশ্ন আছে?',
  timestamp: new Date()
};

const AIChatAssistant: React.FC<{ onSelectService: (s: string) => void }> = ({ onSelectService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDetectedService, setCurrentDetectedService] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  // Handle closing/opening logic for ephemeral sessions
  const toggleChat = () => {
    if (isOpen) {
      // If closing, we reset everything for a fresh start next time
      setMessages([{ ...WELCOME_MESSAGE, timestamp: new Date() }]);
      setInput('');
      setCurrentDetectedService(null);
    }
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMessage: Message = { role: 'user', content: userText, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct history for Gemini - purely from current session state
      const contents = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));
      contents.push({ role: 'user', parts: [{ text: userText }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
          topP: 0.95,
        }
      });

      let aiText = response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
      
      // Extract service detection tag if present
      let detectedSvc: string | undefined;
      const serviceMatch = aiText.match(/\[SERVICE:\s*(.+?)\]/);
      if (serviceMatch) {
        detectedSvc = serviceMatch[1];
        aiText = aiText.replace(/\[SERVICE:\s*.+?\]\n?/, '').trim();
        setCurrentDetectedService(detectedSvc);
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiText,
        timestamp: new Date(),
        detectedService: detectedSvc
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "নেটওয়ার্ক কানেকশন চেক করুন। অথবা সরাসরি কল বাটনে চাপ দিন।",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerServiceAction = () => {
    if (currentDetectedService) {
      onSelectService(currentDetectedService);
    } else {
      const element = document.getElementById('form');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    // Even if triggered via button, reset session on exit
    setMessages([{ ...WELCOME_MESSAGE, timestamp: new Date() }]);
    setCurrentDetectedService(null);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[70] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-500 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-900 rotate-90 scale-100' : 'bg-cyan-500'}`}
      >
        {isOpen ? <X className="text-white" /> : <Bot className="text-slate-900" size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 border-2 border-slate-950"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 left-4 md:left-auto md:w-[450px] md:right-6 z-[70] glass rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 animate-in slide-in-from-bottom-12 duration-500 max-h-[80vh] h-[600px]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <Bot className="text-cyan-400" size={28} />
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-slate-950 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-cyber font-bold text-white tracking-tight flex items-center gap-2">
                  Anik AI Assistant <Sparkles size={14} className="text-yellow-400 animate-pulse" />
                </h3>
                <span className="text-[10px] text-cyan-400/80 uppercase tracking-[0.2em] font-bold">Ephemeral Session Active</span>
              </div>
            </div>
            <button onClick={toggleChat} className="p-2 text-gray-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-950/20 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                  m.role === 'user' 
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-tr-none shadow-xl' 
                  : 'glass border-white/10 text-gray-200 rounded-tl-none shadow-lg'
                }`}>
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap font-medium">{m.content}</p>
                  <div className="flex items-center justify-between mt-3 opacity-40">
                    <span className="text-[9px] uppercase tracking-widest font-bold">
                      {m.role === 'user' ? 'Client Request' : 'AI Analysis'}
                    </span>
                    <span className="text-[9px]">
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-[10px] text-cyan-400/70 font-cyber uppercase tracking-widest">Processing Intent...</span>
                </div>
              </div>
            )}
          </div>

          {/* Persistent Action Hub (Smart Buttons) */}
          <div className="px-5 py-3 flex flex-wrap gap-2 border-t border-white/5 bg-slate-900/40">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-[10px] font-bold text-gray-300 hover:text-white hover:bg-slate-800 transition-all uppercase tracking-widest group">
              <Phone size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" /> Voice Call
            </a>
            <a href={WHATSAPP_LINK} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-[10px] font-bold text-gray-300 hover:text-white hover:bg-slate-800 transition-all uppercase tracking-widest group">
              <MessageCircle size={14} className="text-green-500 group-hover:scale-110 transition-transform" /> WhatsApp
            </a>
            <button 
              onClick={triggerServiceAction}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest group ${
                currentDetectedService 
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                : 'bg-slate-800 text-gray-400'
              }`}
            >
              <ArrowRight size={14} className={currentDetectedService ? 'animate-pulse' : ''} /> 
              {currentDetectedService ? `Start ${currentDetectedService}` : 'Get Service'}
            </button>
          </div>

          {/* Dynamic Input System */}
          <form onSubmit={handleSendMessage} className="p-5 border-t border-white/10 bg-slate-950">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message in বাংলা or English..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-[15px] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-gray-600 font-medium"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 top-2 bottom-2 px-5 rounded-xl flex items-center justify-center transition-all ${
                  input.trim() && !isLoading 
                  ? 'bg-cyan-500 text-slate-900 shadow-lg hover:bg-cyan-400 active:scale-90' 
                  : 'bg-slate-800 text-gray-600 cursor-not-allowed'
                }`}
              >
                <Send size={20} className={isLoading ? 'animate-pulse' : ''} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="h-px bg-white/5 flex-1"></span>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em]">
                Secure Ephemeral Session
              </p>
              <span className="h-px bg-white/5 flex-1"></span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatAssistant;
