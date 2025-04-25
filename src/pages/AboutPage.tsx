import React from 'react';
import { teamMembers } from '../data/team';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black/96 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About AI Organization</h1>
            <p className="text-neutral-300 text-lg mb-8">
              We're on a mission to solve problems others can't with AI that works tirelessly, learns continuously, and delivers exceptional results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Our Mission</h2>
                <p className="text-neutral-300 text-lg mb-6">
                  At NexusAI, we believe that AI should work seamlessly alongside humans, handling repetitive tasks so people can focus on creative and strategic work.
                </p>
                <p className="text-neutral-300 text-lg mb-6">
                  Our mission is to develop AI solutions that are accessible, practical, and transformative for businesses of all sizes, across all industries.
                </p>
                <p className="text-neutral-300 text-lg">
                  We're driven by a passion for innovation and a commitment to creating technology that makes a real difference in how businesses operate and serve their customers.
                </p>
              </div>
              
              <div className="h-full aspect-square overflow-hidden rounded-2xl">
                <div className="w-full h-full relative">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-neutral-300 text-lg">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of what AI can do to create solutions that deliver real business value.',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Human-Centered',
                description: 'We design AI that enhances human capabilities rather than replacing them, creating technology that feels intuitive and natural.',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C16 2.9 16.9 2 18 2C19.1 2 20 2.9 20 4C20 5.1 19.1 6 18 6C16.9 6 16 5.1 16 4ZM20.78 7.58C19.93 7.21 18.99 7 18 7C17.33 7 16.68 7.1 16.08 7.28C17.19 8.16 17.9 9.51 17.9 11V12H22V11C22 9.68 21.5 8.44 20.78 7.58ZM4.5 10.16V11H10.17L6.58 6.5H2.5V10.16H4.5ZM15 4C15 2.9 14.1 2 13 2C11.9 2 11 2.9 11 4C11 5.1 11.9 6 13 6C14.1 6 15 5.1 15 4ZM13 7C12.01 7 11.07 7.21 10.22 7.58C9.5 8.44 9 9.68 9 11V12H17V11C17 9.68 16.5 8.44 15.78 7.58C14.93 7.21 13.99 7 13 7ZM8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 5.1 4.9 6 6 6C7.1 6 8 5.1 8 4ZM9 7C8.01 7 7.07 7.21 6.22 7.58C5.5 8.44 5 9.68 5 11V12H13V11C13 9.68 12.5 8.44 11.78 7.58C10.93 7.21 9.99 7 9 7ZM2 18V20H22V18H2Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our work, from code quality to customer service to business outcomes.',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89 5 3 5.9 3 7V17C3 18.1 3.89 19 5 19H19C20.11 19 21 18.1 21 17V7C21 5.9 20.11 5 19 5ZM19 17H5V7H19V17ZM17 8H8V10H17V8ZM17 12H8V14H17V12Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Transparency',
                description: 'We believe in being open about how our AI works and setting realistic expectations about what it can and cannot do.',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Continuous Learning',
                description: "Just like our AI systems, we're constantly learning and improving to deliver better results for our customers.",
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Customer Success',
                description: 'We measure our success by the results we deliver for our customers, focusing on practical solutions that drive real business value.',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM9 7H7V17H9V7ZM13 7H11V17H13V7ZM17 7H15V17H17V7Z" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-xl p-6 hover:border-neutral-700 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Team</h2>
            <p className="text-neutral-300 text-lg">
              Meet the experts behind our cutting-edge AI solutions. Our team combines deep technical expertise with business acumen to create AI that delivers real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glassmorphism rounded-xl overflow-hidden group">
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white text-xl font-medium">{member.name}</h4>
                    <p className="text-neutral-400">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-neutral-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glassmorphism rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '5M+', label: 'Customer Interactions', description: 'Handled by our AI solutions each month' },
                { value: '98%', label: 'Satisfaction Rate', description: 'From businesses using our AI solutions' },
                { value: '60%', label: 'Average Cost Reduction', description: 'For customer service operations' },
                { value: '24/7', label: 'Availability', description: 'Our AI never sleeps, ensuring continuous support' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-8 ${
                    index < 3 ? 'border-r border-neutral-800' : ''
                  } ${
                    index < 2 ? 'border-b border-neutral-800 md:border-b-0' : 
                    index === 2 ? 'border-b border-neutral-800 lg:border-b-0' : ''
                  }`}
                >
                  <p className="text-white text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-neutral-300 font-medium">{stat.label}</p>
                  <p className="text-neutral-400 text-sm mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-2xl text-center">
            <h2 className="mb-6">Join Our Journey</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to experience the future of AI-powered business solutions? Get in touch to learn how our team can help transform your operations.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Contact Us
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

export default AboutPage;