import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function RequestJoin() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black font-sans min-h-screen">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 cursor-pointer">
        <h1 className="text-xl font-bold text-white">Join</h1>
      </header>

      <div className="p-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <div className="space-y-8">
              <header className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">Request Access</h1>
                <p className="text-gray-500 text-[15px]">
                  Join an exclusive community of creators, designers, and innovators.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-[15px] text-white placeholder:text-gray-500"
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <input
                    type="url"
                    id="portfolio"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-[15px] text-white placeholder:text-gray-500"
                    placeholder="Portfolio URL"
                  />
                </div>

                <div>
                  <textarea
                    id="why"
                    rows={3}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-[15px] text-white placeholder:text-gray-500 resize-none"
                    placeholder="Why do you want to join?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full font-bold transition-colors mt-6"
                >
                  Submit Request
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-6 py-12">
              <div className="mx-auto w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Request Received</h2>
              <p className="text-gray-500 text-[15px]">
                Thank you for your interest. We'll review your portfolio and get back to you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-blue-500 hover:underline font-bold transition-colors"
              >
                Submit another request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
