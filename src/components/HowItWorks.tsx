import React from 'react';
import { ClipboardCheck, PackageCheck, Truck, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4 z-10 relative">
          {icon}
        </div>
        {number < 4 && (
          <div className="absolute top-8 left-16 w-full h-0.5 bg-blue-200 hidden md:block" />
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step {number}</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 max-w-xs">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={24} />,
      title: "Request a Quote",
      description: "Fill out our simple form with your delivery details to get an instant quote."
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Schedule Pickup",
      description: "Choose your preferred pickup time and our courier will arrive promptly."
    },
    {
      icon: <Truck size={24} />,
      title: "Track Delivery",
      description: "Monitor your package in real-time as it makes its way to the destination."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Delivery Confirmation",
      description: "Receive confirmation when your package is successfully delivered."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Delivery Service Works
          </h2>
          <p className="text-xl text-gray-600">
            Getting your parcels delivered is simple and hassle-free with our streamlined process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#get-quote" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;