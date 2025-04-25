import React from 'react';
import { ArrowDown, ArrowRight, Phone, MessageSquare, Plug, TrendingUp, Zap, Database, 
  Server, Cloud, Store, Video, MessageCircle, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import VoiceDemo from '../components/VoiceDemo';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import { HeroWithSpline } from '../components/ui/hero-sections'; 
import { Product2 } from '../components/Product2'; 
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import Cta from '../components/Cta';


const HomePage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      {/* Hero Section with Spline Integration */}
      <HeroWithSpline />
      
      {/* Products Section */}
      <section className="py-28 bg-gradient-to-b from-black to-black/90 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-white/[0.03] blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[25%] animate-pulse" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[65%] left-[10%] animate-pulse" style={{animationDelay: "0.9s"}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] right-[20%] animate-pulse" style={{animationDelay: "0.3s"}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] right-[15%] animate-pulse" style={{animationDelay: "0.7s"}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[75%] right-[25%] animate-pulse" style={{animationDelay: "1.1s"}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-white/80 text-sm font-medium">Innovative AI Solutions</span>
            </div>
            <h2 className="mb-6">Two Powerful Solutions</h2>
            <p className="text-neutral-300 text-lg">
              Choose the AI solution that fits your business needs—or combine both for a complete customer engagement system.
            </p>
          </div>
          
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                reversed={index % 2 === 1}
              />
            ))}
          </div>
          
          {/* Products comparison or alternative view */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="glassmorphism rounded-xl p-10 md:p-12 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="text-center mb-12 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16H6C4.89543 16 4 15.1046 4 14V10C4 8.89543 4.89543 8 6 8H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Complete AI Ecosystem</h3>
                <p className="text-neutral-300 max-w-2xl mx-auto">
                  For maximum impact, many businesses implement both solutions for a comprehensive approach to customer engagement.
                </p>
              </div>

            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Your Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {products.map(product => (
                  <div 
                    key={product.id}
                    className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-xl p-7 hover:border-neutral-700 transition-all duration-300 group hover:shadow-glow-sm"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-neutral-600 transition-colors">
                        {product.id === 'ai-assistance' ? (
                          <MessageSquare className="w-5 h-5 text-white" />
                        ) : (
                          <Phone className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <h4 className="text-white text-xl font-semibold">
                        {product.title}
                      </h4>
                    </div>
                    
                    <p className="text-neutral-400 text-sm mb-5 pl-16">
                      {product.description.split('.')[0]}.
                    </p>
                    
                    <div className="flex justify-between items-center mt-4 pl-16">
                      <Link 
                        to={`/products#${product.id}`}
                        className="text-white text-sm font-medium flex items-center gap-1 group-hover:text-neutral-300 transition-colors group-hover:translate-x-0.5 transform transition-transform"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      
                      <div className="px-3 py-1 bg-black/40 border border-neutral-800 rounded-full">
                        <span className="text-white/80 text-xs">
                          {product.id === 'ai-assistance' ? 'Chatbot' : 'Voice AI'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Combined solution callout */}
              <div className="mt-10 bg-gradient-to-r from-black/60 to-black/40 border border-neutral-800 rounded-lg p-5 flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">Combined Power</h5>
                  <p className="text-neutral-400 text-sm">
                    Get the best of both worlds with our integrated solution package for comprehensive AI-powered customer engagement.
                  </p>
                </div>
                <Link 
                  to="/contact" 
                  className="whitespace-nowrap px-4 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg text-white transition-colors"
                >
                  Request Combined Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Sections */}
      <Product2 />
  
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-2xl text-center">
            <h2 className="mb-6">Ready to Grow Your Business?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              See how our AI solutions can help you capture more leads, delight customers, and reduce costs. Book a personalized demo today.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Your Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-6">Choose Our AI for Unmatched Results</h2>
            <p className="text-neutral-300 text-lg mb-10">
              Missed leads and stretched teams drain your profits. Our AI solutions empower businesses—from startups to enterprises—with seamless CRM integration (HubSpot, Salesforce) and tangible outcomes:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['300% Lead Growth', '80% Faster Response', '50% Cost Reduction'].map((metric) => (
                <div key={metric} className="feature-stat bg-white/5 border border-neutral-800 rounded-xl px-6 py-3">
                  <p className="text-white font-semibold">{metric}</p>
                </div>
              ))}
            </div>
          </div>
          
          <BentoGrid className="mb-16">
            <BentoItem className="feature-card">
              <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">AI Assistance</h4>
              <p className="text-neutral-300">
                Intelligent chatbot for lead capture, support ticket management, and appointment scheduling. Our clients achieve 300% lead growth with automated engagement.
              </p>
            </BentoItem>
            
            <BentoItem className="feature-card">
              <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">AI Voice Assistance</h4>
              <p className="text-neutral-300">
                  Life-like AI agents for 24/7 call handling and lead nurturing, delivering 80% faster responses. Transform your phone support with intelligent automation.
              </p>
            </BentoItem>
            
            <BentoItem className="feature-card">
              <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
                <Plug className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">Effortless Integration</h4>
              <p className="text-neutral-300">
                Connects seamlessly to your existing systems with minimal setup. Compatible with leading CRMs like HubSpot and Salesforce.
              </p>
            </BentoItem>
            
            <BentoItem className="feature-card">
              <div className="feature-icon w-14 h-14 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">Proven ROI</h4>
              <p className="text-neutral-300">
                Slash operational costs by 50% while boosting conversions. Get measurable results with AI that pays for itself.
              </p>
            </BentoItem>
          </BentoGrid>
        </div>
        <Cta />

      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Success Stories</h2>
            <p className="text-neutral-300 text-lg">
              Don't just take our word for it. See how businesses like yours achieved measurable results with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Your Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl font-semibold mb-4">Schedule a Quick Call</h2>
              <p className="text-neutral-300">
                Book a 30-minute introductory call to discuss your AI needs and see how we can help.
              </p>
            </div>
            
            <div className="glassmorphism rounded-xl overflow-hidden">
              <div className="h-[600px]">
                <Cal
                  calLink="aiorganization/introductory-meeting"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{
                    layout: "month_view",
                    theme: "dark"
                  }}
                />
              </div>
            </div>
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

export default HomePage;