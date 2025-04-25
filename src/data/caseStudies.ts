import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'tech-startup-support',
    title: 'Revolutionizing Customer Support',
    client: 'TechNova',
    category: 'ai-assistance',
    industry: 'Technology',
    results: [
      { label: 'Response time', value: '90% faster' },
      { label: 'Customer satisfaction', value: '35% increase' },
      { label: 'Support costs', value: '50% reduction' }
    ],
    description: 'TechNova implemented our AI Assistance solution to handle increasing customer support requests. The AI chatbot now manages 80% of inquiries without human intervention, dramatically reducing response times and improving customer satisfaction.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
  },
  {
    id: 'healthcare-scheduling',
    title: 'Streamlining Patient Scheduling',
    client: 'MediCare Clinic',
    category: 'voice-assistance',
    industry: 'Healthcare',
    results: [
      { label: 'Appointment bookings', value: '200% increase' },
      { label: 'No-shows', value: '75% reduction' },
      { label: 'Staff hours saved', value: '30 hours/week' }
    ],
    description: 'MediCare Clinic deployed our AI Voice Assistance to handle patient scheduling and reminders. The system now books appointments 24/7, confirms appointments, and significantly reduces no-shows through intelligent follow-ups.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg'
  },
  {
    id: 'retail-lead-generation',
    title: 'Transforming E-commerce Lead Generation',
    client: 'Fashion Forward',
    category: 'both',
    industry: 'Retail',
    results: [
      { label: 'Qualified leads', value: '300% increase' },
      { label: 'Conversion rate', value: '40% higher' },
      { label: 'Customer engagement', value: '2.5x improvement' }
    ],
    description: 'Fashion Forward implemented both our AI Assistance for website interactions and Voice Assistance for phone inquiries. This integrated approach created a seamless omnichannel experience that dramatically improved lead quality and conversion rates.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
  },
  {
    id: 'financial-services-support',
    title: 'Enhancing Financial Advisory Services',
    client: 'Wealth Managers Inc.',
    category: 'voice-assistance',
    industry: 'Financial Services',
    results: [
      { label: 'Client inquiries handled', value: '85% automated' },
      { label: 'Advisor productivity', value: '45% increase' },
      { label: 'Client satisfaction', value: '28% improvement' }
    ],
    description: 'Wealth Managers Inc. deployed our AI Voice Assistance to handle routine client inquiries and schedule consultations with financial advisors. The solution now handles thousands of calls daily, freeing advisors to focus on high-value client interactions.',
    image: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg'
  }
];