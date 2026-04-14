import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: To make this fully functional, replace with actual EmailJS keys
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Mock simulation for now
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      e.target.reset();
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glow to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 group">
              <div className="flex bg-slate-800/50 rounded-2xl border border-slate-700 p-2 items-center gap-6 mb-8 group-hover:border-glow/50 transition-colors">
                <div className="p-4 bg-slate-900 rounded-xl text-glow group-hover:scale-110 transition-transform shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-medium mb-1">Email</h4>
                  <a href={`mailto:${personalDetails.email}`} className="text-lg text-white font-medium hover:text-glow transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex bg-slate-800/50 rounded-2xl border border-slate-700 p-2 items-center gap-6 mb-8 group-hover:border-accent/50 transition-colors">
                <div className="p-4 bg-slate-900 rounded-xl text-accent group-hover:scale-110 transition-transform shadow-inner">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-medium mb-1">Phone</h4>
                  <a href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`} className="text-lg text-white font-medium hover:text-accent transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex bg-slate-800/50 rounded-2xl border border-slate-700 p-2 items-center gap-6 group-hover:border-fuchsia-500/50 transition-colors">
                <div className="p-4 bg-slate-900 rounded-xl text-fuchsia-500 group-hover:scale-110 transition-transform shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 font-medium mb-1">Location</h4>
                  <span className="text-lg text-white font-medium">
                    Pune, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 group relative overflow-hidden">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-glow/50 to-transparent"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group/input">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within/input:text-glow transition-colors">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-glow focus:border-glow transition-all hover:border-slate-600 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative group/input">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within/input:text-glow transition-colors">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-glow focus:border-glow transition-all hover:border-slate-600 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="relative group/textarea">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 group-focus-within/textarea:text-glow transition-colors">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-glow focus:border-glow transition-all hover:border-slate-600 shadow-inner resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary group mt-2"
                >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>

              </div>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center text-sm shadow-[0_0_15px_rgba(34,197,94,0.1)] mt-4"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
