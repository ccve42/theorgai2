import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { products } from '../data/products';
import VoiceDemo from '../components/VoiceDemo';

const Product2: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to specific product section if hash is provided
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <>
      
      {/* Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-black/90'} relative overflow-hidden`}
        >
          {/* Background decorative elements */}
          <div className={`absolute ${index % 2 === 0 ? 'top-20 right-20' : 'bottom-20 left-20'} w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none`}></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[25%] animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] right-[20%] animate-pulse" style={{animationDelay: "0.3s"}}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Product Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5">
                    <span className="text-white/80 text-sm font-medium">
                      {product.id === 'ai-assistance' ? 'Chat Intelligence' : 'Voice Technology'}
                    </span>
                  </div>
                  <h2 className="mb-6">{product.title}</h2>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  {/* Stats indicators */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">
                        {product.id === 'ai-assistance' ? '300%' : '80%'}
                      </p>
                      <p className="text-neutral-400 text-xs">
                        {product.id === 'ai-assistance' ? 'Lead Growth' : 'Faster Response'}
                      </p>
                    </div>
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">24/7</p>
                      <p className="text-neutral-400 text-xs">Availability</p>
                    </div>
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">50%</p>
                      <p className="text-neutral-400 text-xs">Cost Reduction</p>
                    </div>
                  </div>
                </div>
                
                <div className={`h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40 z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Floating tag */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center gap-2 z-20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-white text-sm font-medium">{product.id === 'ai-assistance' ? 'AI Chatbot' : 'Voice AI'}</span>
                  </div>
                </div>
              </div>
              
              {/* Features Section with Enhanced Design */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl font-semibold">Key Features</h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-6 bg-black/60 backdrop-blur-sm border border-neutral-800 rounded-xl transition-all duration-300 hover:border-neutral-700 hover:bg-black/70 group hover:shadow-glow-sm hover:translate-y-[-2px]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/80 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-lg mb-2 group-hover:text-white/90 transition-colors">{feature}</p>
                        <p className="text-neutral-400 text-sm">
                          {/* Generate a short description based on the feature */}
                          {feature.includes('lead') ? 'Automatically identify and qualify potential customers.' :
                           feature.includes('CRM') ? 'Seamlessly connect with your existing customer systems.' :
                           feature.includes('support') ? 'Handle customer inquiries with intelligent automation.' :
                           feature.includes('appointment') ? 'Schedule meetings without human intervention.' :
                           feature.includes('voice') ? 'Natural-sounding conversations with customers.' :
                           feature.includes('language') ? 'Support customers in their preferred language.' :
                           feature.includes('24/7') ? 'Never miss an opportunity, day or night.' :
                           'Enhance your business operations with smart automation.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Demo Section - Different for each product */}
              {product.id === 'ai-assistance' ? (
                <div className="mb-20">
                  <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-white text-2xl font-semibold">See It In Action</h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="glassmorphism rounded-xl overflow-hidden p-8 shadow-glow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white text-xl font-medium mb-4">Interactive Chatbot</h4>
                        <p className="text-neutral-300 mb-6">
                          Experience how our AI assistance can engage with your customers, capture leads, and manage support tickets. Try the interactive demo on the bottom right of your screen.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                            <h5 className="text-white font-medium mb-2">Lead Capture</h5>
                            <p className="text-neutral-400 text-sm">
                              The AI identifies potential leads and collects relevant information to qualify them.
                            </p>
                          </div>
                          <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                            <h5 className="text-white font-medium mb-2">CRM Integration</h5>
                            <p className="text-neutral-400 text-sm">
                              Customer information is automatically added to your CRM, eliminating manual data entry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="h-full flex items-center justify-center">
                          <div className="w-64 h-96 rounded-2xl border border-neutral-800 bg-black/60 overflow-hidden shadow-lg relative">
                            <div className="absolute inset-0 flex flex-col">
                              <div className="p-4 border-b border-neutral-800">
                                <h4 className="text-white font-medium">AI Chat Assistant</h4>
                              </div>
                              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                                  <p className="text-sm">Hi there! How can I assist you today?</p>
                                </div>
                                <div className="bg-white text-black rounded-lg p-3 max-w-[80%] ml-auto">
                                  <p className="text-sm">I'm interested in your AI solutions</p>
                                </div>
                                <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                                  <p className="text-sm">Great! I'd be happy to tell you about our AI solutions. Would you like to schedule a demo?</p>
                                </div>
                              </div>
                              <div className="p-4 border-t border-neutral-800">
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 bg-black/60 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                                    disabled
                                  />
                                  <button className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-20">
                  <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-white text-2xl font-semibold">Hear It In Action</h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <VoiceDemo />
                </div>
              )}

            </div>
          </div>
        </section>
      ))}
    
    </>
  );
};

export default Product2;

export { Product2 }