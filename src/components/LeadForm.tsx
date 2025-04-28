import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Check, Loader2, Lock } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mdkgaodl");
  if (state.succeeded) {
    return (
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl animate-fade-in">
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thanks for joining!</h3>
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-600"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-600"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
        >
          {state.submitting ? (
            <>
              <Loader2 size={20} className="mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            'Submit'
          )}
        </button>
        <div className="flex items-center gap-2 justify-center mt-4">
          <Lock size={14} className="text-gray-400" />
          <p className="text-sm text-gray-500">Your information is secure and encrypted</p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;