import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BarChart2, Database, Server, Cloud, Lock, LineChart, Settings, MessageSquare, Phone } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [expanded, setExpanded] = useState(false);

  // Define technology logos based on industry or category
  const getTechnologyLogos = () => {
    if (caseStudy.industry === 'Technology') {
      return [
        { icon: <Database className="w-4 h-4 text-white" />, name: 'CloudDB' },
        { icon: <Server className="w-4 h-4 text-white" />, name: 'TechStack' },
        { icon: <MessageSquare className="w-4 h-4 text-white" />, name: 'ChatPro' }
      ];
    } else if (caseStudy.industry === 'Healthcare') {
      return [
        { icon: <Cloud className="w-4 h-4 text-white" />, name: 'HealthCloud' },
        { icon: <Lock className="w-4 h-4 text-white" />, name: 'SecureHealth' },
        { icon: <Phone className="w-4 h-4 text-white" />, name: 'VoiceAssist' }
      ];
    } else if (caseStudy.industry === 'Retail') {
      return [
        { icon: <BarChart2 className="w-4 h-4 text-white" />, name: 'SalesTracker' },
        { icon: <MessageSquare className="w-4 h-4 text-white" />, name: 'ChatPro' },
        { icon: <Phone className="w-4 h-4 text-white" />, name: 'VoiceAssist' }
      ];
    } else {
      return [
        { icon: <LineChart className="w-4 h-4 text-white" />, name: 'FinancialAI' },
        { icon: <Settings className="w-4 h-4 text-white" />, name: 'AutoAdvisor' },
        { icon: <Phone className="w-4 h-4 text-white" />, name: 'ClientVoice' }
      ];
    }
  };

  const technologyLogos = getTechnologyLogos();

  return (
    <div className="card h-full group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="inline-block px-2 py-1 text-xs bg-black/80 backdrop-blur-md border border-neutral-800 rounded-md text-neutral-300 mb-2">
            {caseStudy.industry} - {caseStudy.category === 'ai-assistance' 
              ? 'AI Assistance' 
              : caseStudy.category === 'voice-assistance' 
                ? 'Voice Assistance' 
                : 'Combined Solution'}
          </div>
          <h4 className="text-white text-xl font-medium leading-tight mb-1">{caseStudy.title}</h4>
          <p className="text-neutral-400 text-sm">{caseStudy.client}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {caseStudy.results.slice(0, 2).map((result, index) => (
            <div key={index} className="text-center p-3 bg-black/40 backdrop-blur-md rounded-lg border border-neutral-800">
              <p className="text-white font-bold text-xl mb-1">{result.value}</p>
              <p className="text-neutral-400 text-xs">{result.label}</p>
            </div>
          ))}
        </div>
        
        <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
          {caseStudy.description}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-white text-sm font-medium group/link bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-all border border-neutral-700"
        >
          {expanded ? 'Show Less' : 'View Details'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-neutral-800 animate-fadeIn">
            <h5 className="text-white font-medium mb-2">Challenge</h5>
            <p className="text-neutral-300 text-sm mb-3">
              {caseStudy.industry === 'Technology' ? 
                'Facing growing customer inquiries and limited support capacity, they needed a solution to handle routine questions efficiently.' : 
                caseStudy.industry === 'Healthcare' ? 
                'Patient scheduling and reminders were consuming staff time, leading to inefficiencies and appointment no-shows.' :
                caseStudy.industry === 'Retail' ? 
                'Converting website visitors to qualified leads was inconsistent, with many potential customers dropping off before engagement.' :
                'Managing high volume of client inquiries was stretching their team thin and impacting advisor productivity.'}
            </p>
            
            <h5 className="text-white font-medium mb-2">Solution</h5>
            <p className="text-neutral-300 text-sm mb-3">
              {caseStudy.category === 'ai-assistance' ? 
                'We implemented our AI Assistance solution to provide 24/7 support, answer common questions, and intelligently route complex issues to human agents.' : 
                caseStudy.category === 'voice-assistance' ? 
                'Our AI Voice Assistance was deployed to manage appointment scheduling, send intelligent reminders, and handle routine patient questions.' :
                'A comprehensive implementation of both our AI Assistance for digital channels and Voice Assistance for phone interactions created a unified customer experience.'}
            </p>
            
            {/* Software Technologies Used Section */}
            <h5 className="text-white font-medium mb-2">Technologies Used</h5>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologyLogos.map((tech, index) => (
                <div key={index} className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-neutral-700">
                  {tech.icon}
                  <span className="text-neutral-300 text-xs font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            
            <h5 className="text-white font-medium mb-2">All Results</h5>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center p-3 bg-black/40 backdrop-blur-md rounded-lg border border-neutral-800">
                  <p className="text-white font-bold text-xl mb-1">{result.value}</p>
                  <p className="text-neutral-400 text-xs">{result.label}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-lg p-3 border border-neutral-800">
              <p className="text-neutral-400 text-xs italic">
                "The implementation transformed our {caseStudy.industry.toLowerCase()} operations, allowing us to scale efficiently while improving customer satisfaction."
                <span className="block mt-1 text-white">— {caseStudy.client} Leadership Team</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;