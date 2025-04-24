import React from 'react';
import { Clock, Map, Package, BarChart3 } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 group">
      <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={28} />,
      title: "Same-Day Delivery",
      description: "Get your parcels delivered within hours, not days. We operate 7 days a week across the GTA."
    },
    {
      icon: <Package size={28} />,
      title: "Safe Handling",
      description: "Your items are treated with care. We specialize in fragile, time-sensitive, and valuable deliveries."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Competitive Rates",
      description: "Affordable pricing with transparent fees. No hidden charges or unexpected costs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Delivery Service?
          </h2>
          <p className="text-xl text-gray-600">
            We combine speed, reliability, and exceptional customer service to ensure your parcels arrive safely and on time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;