import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          company: '',
          phone: '',
          interest: '',
          message: '',
        });
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {formStatus === 'success' ? (
        <div className="glassmorphism p-8 rounded-xl shadow-glow text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-white mb-2">Thank You!</h3>
          <p className="text-neutral-300 mb-6">
            We've received your message and will get back to you soon.
          </p>
          <button
            onClick={() => setFormStatus('idle')}
            className="btn-secondary mx-auto"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-neutral-300 text-sm font-medium mb-2">
                Full Name<span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="John Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-300 text-sm font-medium mb-2">
                Email Address<span className="text-white">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-neutral-300 text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="Acme Inc."
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-neutral-300 text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="interest" className="block text-neutral-300 text-sm font-medium mb-2">
              I'm interested in<span className="text-white">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formState.interest}
              onChange={handleChange}
              className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all appearance-none"
            >
              <option value="" disabled>Select your interest</option>
              <option value="ai-assistance">AI Assistance</option>
              <option value="voice-assistance">AI Voice Assistance</option>
              <option value="both">Both Solutions</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-neutral-300 text-sm font-medium mb-2">
              Message<span className="text-white">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-black/40 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none"
              placeholder="Tell us about your project needs..."
            />
          </div>
          
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`btn-primary w-full flex justify-center items-center gap-2 ${
              formStatus === 'submitting' ? 'opacity-75' : ''
            }`}
          >
            {formStatus === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;