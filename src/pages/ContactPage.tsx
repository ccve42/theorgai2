import React from 'react';
import { Mail, MapPin, Phone, ArrowDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import BookingCalendar from '../components/BookingCalendar';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black/96 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-neutral-300 text-lg mb-10">
              Have questions about our AI solutions? Ready for a demo? Our team is here to help you transform your business with intelligent automation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-white text-3xl font-semibold mb-6">Contact Information</h2>
                <p className="text-neutral-300 mb-10">
                  Fill out the form or reach out directly through any of our contact channels. We'll get back to you promptly to discuss how our AI solutions can meet your business needs.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Office Location</h3>
                      <p className="text-neutral-400">
                        123 AI Boulevard, San Francisco, CA 94107, United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email Us</h3>
                      <p className="text-neutral-400">
                        <a href="mailto:info@nexusai.tech" className="hover:text-white transition-colors">
                          info@theorgai.com
                        </a>
                      </p>
                      <p className="text-neutral-400">
                        <a href="mailto:support@nexusai.tech" className="hover:text-white transition-colors">
                          support@theorgai.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Call Us</h3>
                      <p className="text-neutral-400">
                        <a href="tel:+15551234567" className="hover:text-white transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </p>
                      <p className="text-neutral-400">
                        Mon-Fri, 9:00 AM - 6:00 PM (PT)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                      <a 
                        key={social}
                        href={`https://${social}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-white hover:text-white transition-colors"
                        aria-label={`${social} link`}
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-white text-3xl font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Calendar Section */}
      <section id="booking-calendar" className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl font-semibold mb-4">Schedule a Demo</h2>
              <p className="text-neutral-300">
                Choose a convenient time for your personalized demo of our AI solutions.
              </p>
            </div>
            <BookingCalendar />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-neutral-300">
                Find quick answers to common questions about our AI solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I implement your AI solutions?",
                  answer: "Our AI solutions can be deployed in as little as 2-4 weeks, depending on the complexity of your requirements and the level of customization needed. Our implementation team works closely with you to ensure a smooth integration with your existing systems."
                },
                {
                  question: "Do your AI solutions integrate with my existing CRM?",
                  answer: "Yes, our AI solutions are designed to integrate seamlessly with popular CRM platforms including Salesforce, HubSpot, Zoho, Microsoft Dynamics, and many others. We also offer custom integration services for proprietary systems."
                },
                {
                  question: "How is the AI trained to understand my business needs?",
                  answer: "We use a combination of pre-trained models and custom training specific to your industry and business requirements. During implementation, we gather example conversations, common queries, and business rules to tailor the AI to your specific needs."
                },
                {
                  question: "Can the AI handle multiple languages?",
                  answer: "Yes, our AI solutions support multiple languages including English, Spanish, French, German, Chinese, Japanese, and many others. This allows you to provide consistent service to customers around the world."
                },
                {
                  question: "What kind of ROI can I expect from implementing your solutions?",
                  answer: "Most of our clients see ROI within 3-6 months of implementation. Typical results include 30-60% reduction in customer service costs, 40% increase in lead conversion rates, and significant improvements in customer satisfaction scores."
                },
                {
                  question: "Still have questions?",
                  answer: "Click the orange cicle on the bottom right of your screen. Ask anything about AI Organization to the Live Chat."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-6"
                >
                  <h3 className="text-white text-xl font-medium mb-4">{faq.question}</h3>
                  <p className="text-neutral-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 space-y-4">
              <h3 className="text-white text-2xl font-semibold">Ready to Transform Your Business?</h3>
              <p className="text-neutral-300 mb-6">Book your personalized demo call in just 10 seconds - no lengthy forms required.</p>
              <div>
                <button
                  onClick={() => {
                    const demoSection = document.getElementById('booking-calendar');
                    demoSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Book Your Call in 10 Seconds

                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;