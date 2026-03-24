import React from 'react';
import { getPostsWithAuthors } from '@/data/posts';
import { Heart, MessageCircle, Share, BadgeCheck, Repeat2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

export function Feed() {
  const posts = getPostsWithAuthors();

  return (
    <div className="bg-black font-sans">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 cursor-pointer">
        <h1 className="text-xl font-bold text-white">Home</h1>
      </header>

      <div className="flex flex-col">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-4 border-b border-white/10 hover:bg-white/[0.03] transition-colors flex gap-3"
          >
            <div className="shrink-0">
              <Link to={`/profile/${post.authorId}`}>
                <img
                  src={post.author?.avatarUrl}
                  alt={post.author?.name}
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-[15px] mb-0.5">
                <Link to={`/profile/${post.authorId}`} className="font-bold text-white hover:underline flex items-center gap-1 truncate">
                  {post.author?.name}
                  {post.author?.isVerified && (
                    <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </Link>
                <span className="text-gray-500 truncate">{post.author?.handle}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500 hover:underline cursor-pointer shrink-0">2h</span>
              </div>

              <p className="text-white text-[15px] leading-normal mb-3 whitespace-pre-wrap">
                {post.content}
              </p>

              {post.imageUrl && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="mb-3 rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                      <img
                        src={post.imageUrl}
                        alt="Post content"
                        className="w-full h-auto object-cover max-h-[500px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">Image Preview</DialogTitle>
                    <img
                      src={post.imageUrl}
                      alt="Post content full"
                      className="w-full h-auto object-contain max-h-[85vh] rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </DialogContent>
                </Dialog>
              )}

              <div className="flex items-center justify-between text-gray-500 max-w-md mt-1">
                <button className="flex items-center gap-1 hover:text-blue-400 group transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs">{post.comments.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-green-400 group transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                    <Repeat2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs">{Math.floor(post.likes / 5).toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-pink-500 group transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-xs">{post.likes.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-400 group transition-colors">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <Share className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
