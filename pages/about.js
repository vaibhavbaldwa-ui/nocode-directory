import React from 'react';
import { ArrowLeft, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About NoCode Directory</h1>
        
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              NoCode Directory is dedicated to helping entrepreneurs, creators, and businesses 
              discover the best no-code tools to bring their ideas to life without writing a 
              single line of code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Comprehensive Directory</h3>
                <p className="text-gray-600 text-sm">
                  50+ carefully curated no-code tools across 20+ categories
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tool Comparisons</h3>
                <p className="text-gray-600 text-sm">
                  Side-by-side comparisons to help you make informed decisions
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600 text-sm">
                  Constantly updated with the latest and greatest no-code tools
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why No-Code?</h2>
            <p className="text-gray-600 mb-4">
              The no-code movement is democratizing technology and enabling anyone with an idea 
              to build products, automate workflows, and solve problems without traditional coding skills.
            </p>
            <p className="text-gray-600">
              We believe that everyone should have access to the tools and resources they need 
              to turn their vision into reality, regardless of technical background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have a suggestion for a tool we should add? Want to collaborate? 
              We'd love to hear from you at{' '}
              <a href="mailto:contact@nocodedirectory.live" className="text-blue-600 hover:text-blue-700">
                contact@nocodedirectory.live
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}