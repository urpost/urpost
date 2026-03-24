import React from 'react';
import { BadgeCheck } from 'lucide-react';

export function GetVerified() {
  return (
    <div className="bg-black font-sans min-h-screen">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <h1 className="text-xl font-bold text-white">Get Verified</h1>
      </header>
      <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <BadgeCheck className="w-20 h-20 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Stand out with Premium</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Join the elite creators. Get the glowing verified badge, prioritized ranking in the leaderboard, and exclusive features.
        </p>
        <button className="bg-white text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
          Subscribe for $8/month
        </button>
      </div>
    </div>
  );
}
