import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export function SubmitPost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-black font-sans min-h-screen">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Submit Post</h1>
        <button 
          className="bg-blue-500 text-white font-bold px-4 py-1.5 rounded-full hover:bg-blue-600 disabled:opacity-50 transition-colors"
          disabled={!content.trim()}
        >
          Post
        </button>
      </header>
      <div className="p-4 flex gap-4">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What is happening?!"
            className="w-full bg-transparent text-white text-xl resize-none outline-none placeholder:text-gray-600 min-h-[150px]"
            autoFocus
          />
          <div className="border-t border-white/10 pt-3 flex items-center gap-4">
            <button className="text-blue-500 hover:bg-blue-500/10 p-2 rounded-full transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
