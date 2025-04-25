import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

type CategoryFilter = 'all' | 'ai-assistance' | 'voice-assistance' | 'both';
type IndustryFilter = 'all' | string;

const CaseStudiesPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [industryFilter, setIndustryFilter] = useState<IndustryFilter>('all');
  
  // Get unique industries for filter
  const industries = Array.from(new Set(caseStudies.map(cs => cs.industry)));
  
  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesCategory = categoryFilter === 'all' || caseStudy.category === categoryFilter;
    const matchesIndustry = industryFilter === 'all' || caseStudy.industry === industryFilter;
    return matchesCategory && matchesIndustry;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black/96 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Success Stories</h1>
            <p className="text-neutral-300 text-lg mb-8">
              See how businesses across industries have transformed their operations and customer experience with our AI solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-10 bg-black border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-white text-black font-medium'
                    : 'bg-black/60 text-neutral-300 hover:bg-black/80 hover:text-white border border-neutral-800'
                }`}
              >
                All Solutions
              </button>
              <button
                onClick={() => setCategoryFilter('ai-assistance')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  categoryFilter === 'ai-assistance'
                    ? 'bg-white text-black font-medium'
                    : 'bg-black/60 text-neutral-300 hover:bg-black/80 hover:text-white border border-neutral-800'
                }`}
              >
                AI Assistance
              </button>
              <button
                onClick={() => setCategoryFilter('voice-assistance')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  categoryFilter === 'voice-assistance'
                    ? 'bg-white text-black font-medium'
                    : 'bg-black/60 text-neutral-300 hover:bg-black/80 hover:text-white border border-neutral-800'
                }`}
              >
                Voice Assistance
              </button>
              <button
                onClick={() => setCategoryFilter('both')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  categoryFilter === 'both'
                    ? 'bg-white text-black font-medium'
                    : 'bg-black/60 text-neutral-300 hover:bg-black/80 hover:text-white border border-neutral-800'
                }`}
              >
                Combined Solutions
              </button>
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full md:w-auto bg-black/60 border border-neutral-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
              >
                <option value="all">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-white text-xl font-medium mb-2">No case studies found</h3>
              <p className="text-neutral-400">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-2xl text-center">
            <h2 className="mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Join these businesses in transforming your operations with cutting-edge AI solutions. Book a demo to see how we can help you achieve similar results.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Your Demo
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;