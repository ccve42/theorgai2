import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find(study => 
    study.id === caseStudyId || study.slug === caseStudyId
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
        <button
          onClick={() => navigate('/case-studies')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={20} />
          Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/case-studies')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Case Studies
        </button>
        
        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>
          
          {caseStudy.image && (
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-3 prose max-w-none">
              <p className="text-xl text-gray-700 mb-6">{caseStudy.description}</p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenge</h2>
              <p className="text-gray-700 mb-6">{caseStudy.challenge}</p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solution</h2>
              <p className="text-gray-700 mb-6">{caseStudy.solution}</p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
              <p className="text-gray-700">{caseStudy.results}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Industry</dt>
                  <dd className="text-sm text-gray-900">{caseStudy.industry}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                  <dd className="text-sm text-gray-900">{caseStudy.timeline}</dd>
                </div>
                {caseStudy.technologies && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                    <dd className="text-sm text-gray-900">
                      {Array.isArray(caseStudy.technologies) 
                        ? caseStudy.technologies.join(', ')
                        : caseStudy.technologies}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;