import React from 'react';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <p className="text-gray-600 text-lg mb-8">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">For general inquiries and support</p>
                <a 
                  href="mailto:contact@nocodedirectory.live" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  contact@nocodedirectory.live
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Submit a Tool</h3>
                <p className="text-gray-600 mb-2">Know a great no-code tool we should add?</p>
                <a 
                  href="mailto:contact@nocodedirectory.live?subject=Tool Submission" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  Submit a tool
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="font-bold text-gray-900 mb-4">What can we help you with?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Questions about tools or features</li>
              <li>• Suggestions for new tools to add</li>
              <li>• Partnership and collaboration opportunities</li>
              <li>• Advertising and sponsorship inquiries</li>
              <li>• Technical issues or bug reports</li>
              <li>• General feedback</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}