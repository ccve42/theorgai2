import { ArrowRight } from 'lucide-react'
import { SplineScene } from './spline'
import { Link } from 'react-router-dom'
import { Spotlight } from './spotlight'

export function HeroWithSpline() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/96 z-0"></div>
      <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-30" fill="white" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-gradient">
              Boost Your Business <span className="text-white">with Powerful AI</span>
            </h1>
            <p className="text-neutral-300 text-lg mb-8 max-w-lg">
              Transform customer engagement with our AI Assistance and AI Voice Assistance solutions. Streamline operations, capture leads, and deliver 24/7 support. Say goodbye to missed opportunities and high costs—our AI drives growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                See Our Solutions
              </Link>
              <Link to="/contact" className="btn-secondary">
                Book a Demo
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}