import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <Link 
      to="/contact" 
      className="btn-primary inline-flex items-center gap-2"
    >
      Book Your Free Demo
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export default Cta;