import React, { useState } from 'react';
import { Check, Loader2, Lock, Timer } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    needs: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setStep(1);
        setFormData({
          email: '',
          name: '',
          phone: '',
          needs: '',
        });
      }, 3000);
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 shadow-xl animate-fade-in">
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Free Quote is on the Way!</h3>
          <p className="text-gray-600 mb-4">
            We'll email your personalized quote within the next 30 minutes.
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Check your inbox for a special first-time customer discount!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-800">Be the first to know when we launch!</h3>
        </div>
        <div className="flex items-center mb-4">
          <p className="text-sm text-gray-600">
            Enter your email below to join our early access list and get priority updates, exclusive offers.
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <div className="overflow-hidden h-1 flex rounded bg-gray-200">
            <div
              className="bg-blue-600 transition-all duration-300"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
          <div className="absolute -top-6 right-0 text-sm text-gray-500">
            Step {step} of 2
          </div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={nextStep} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your work email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
          >
            Continue - It's Free
          </button>

          <div className="flex items-center gap-2 justify-center mt-4">
            <Lock size={14} className="text-gray-400" />
            <p className="text-sm text-gray-500">Your information is secure and encrypted</p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="For delivery updates"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          
          <div>
            <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Needs
            </label>
            <textarea
              id="needs"
              name="needs"
              value={formData.needs}
              onChange={handleChange}
              placeholder="What would you like to ship?"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">You'll receive:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-blue-800">
                <Check size={16} className="text-blue-600" />
                Personalized quote within 30 minutes
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-800">
                <Check size={16} className="text-blue-600" />
                First-time customer discount code
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-800">
                <Check size={16} className="text-blue-600" />
                Free delivery insurance up to $1000
              </li>
            </ul>
          </div>
          
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Get Your Free Quote Now'
            )}
          </button>

          <div className="flex items-center gap-2 justify-center">
            <Lock size={14} className="text-gray-400" />
            <p className="text-xs text-gray-500">
              We respect your privacy. Read our{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;