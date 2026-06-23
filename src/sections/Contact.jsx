import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfos = [
    { name: 'Email', value: 'erikaayufebrianti@gmail.com', icon: <Mail size={18} />, href: 'mailto:erikaayufebrianti@gmail.com' },
    { name: 'GitHub', value: 'inthumaktics', icon: <Github size={18} />, href: 'https://github.com/inthumaktics' },
    { name: 'LinkedIn', value: 'erika ayu febrianti', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/erika-ayu-febrianti-32a024286/' },
    { name: 'Instagram', value: '@erikayfebti', icon: <Instagram size={18} />, href: 'https://instagram.com/erikayfebti' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900/40 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Contact</h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Info & Handles */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4">
              Let's Build Something Meaningful Together!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
              I’m open to collaboration opportunities, internships, and research projects.
              Feel free to reach out via email or connect with me on social platforms!
            </p>

            {/* Contacts list */}
            <div className="flex flex-col gap-4">
              {contactInfos.map((info) => (
                <a
                  key={info.name}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-blue-50/40 dark:hover:bg-slate-800/40 hover:border-blue-200/50 dark:hover:border-slate-700 transition-all duration-205 group"
                >
                  <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1.5">
                      {info.name}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-205 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-none">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form fields */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-3xl p-6 md:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary dark:focus:border-blue-500 focus:ring-1 focus:ring-primary dark:focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary dark:focus:border-blue-500 focus:ring-1 focus:ring-primary dark:focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Erika, I'd love to collaborate on..."
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary dark:focus:border-blue-500 focus:ring-1 focus:ring-primary dark:focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-blue-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 w-full shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={15} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="py-12 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-full text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-100 dark:border-emerald-900/30">
                      <CheckCircle2 size={40} className="animate-bounce" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 max-w-xs leading-relaxed">
                      Thank you for reaching out. Erika will get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
