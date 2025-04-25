import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 py-16 transform transition-all duration-500 hover:translate-y-[-5px] relative`}>
      {/* Decorative elements */}
      <div className={`absolute ${reversed ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/[0.02] blur-2xl pointer-events-none`}></div>
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden rounded-2xl shadow-lg shadow-black/30 relative">
        <div className="w-full h-full relative group">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-grain opacity-10" />
          
          {/* Product label */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-white text-sm font-medium">{product.id === 'ai-assistance' ? 'AI Chatbot' : 'Voice AI'}</span>
          </div>
          
          {/* Image overlay spotlight */}
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transformOrigin: 'center center' }}></div>
          
          {/* Stats badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-lg p-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-sm font-bold">
              {product.id === 'ai-assistance' ? '300% Lead Growth' : '80% Faster Response'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-4 w-fit px-3 py-1.5 bg-white/5 border border-neutral-700 rounded-full">
          <span className="text-neutral-300 text-sm">{product.id === 'ai-assistance' ? 'Customer Engagement' : 'Voice Communication'}</span>
        </div>
        
        <h3 className="mb-5">{product.title}</h3>
        <p className="text-neutral-300 mb-8 text-lg leading-relaxed">{product.description}</p>
        
        <ul className="space-y-4 mb-10">
          {product.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/feature transition-all p-2 rounded-lg hover:bg-white/5">
              <span className="text-white bg-black/60 p-1.5 rounded-full border border-neutral-700 mt-0.5 group-hover/feature:border-white/50 group-hover/feature:bg-white/10 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-neutral-300 group-hover/feature:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link 
            to={`/products#${product.id}`} 
            className="group w-fit"
          >
            <span className="btn-primary px-6 py-2.5 inline-flex items-center gap-2 overflow-hidden relative">
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          </Link>
          
          <Link 
            to="/contact" 
            className="text-white hover:text-neutral-300 transition-colors flex items-center gap-1 text-sm border-b border-transparent hover:border-neutral-500 pb-0.5"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;