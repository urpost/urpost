import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { profiles } from '@/data/profiles';
import { getPostsWithAuthors } from '@/data/posts';
import { BadgeCheck, Calendar, MapPin, Link as LinkIcon, ArrowLeft, Heart, MessageCircle, Share, Repeat2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AwardBadge } from '@/components/ui/award-badge';

export function Profile() {
  const { id } = useParams<{ id: string }>();
  const profile = profiles.find(p => p.id === id) || profiles[0]; // Default to first for demo
  const userPosts = getPostsWithAuthors().filter(post => post.authorId === profile.id);

  if (!profile) return <div className="text-white p-4">User not found</div>;

  return (
    <div className="bg-black min-h-screen font-sans">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center gap-6">
        <Link to="/" className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-1">
            {profile.name}
            {profile.isVerified && <BadgeCheck className="w-5 h-5 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
          </h1>
          <p className="text-sm text-gray-500">{userPosts.length} posts</p>
        </div>
      </header>

      <div className="relative">
        <div className="h-32 sm:h-48 bg-gray-800 w-full">
          {/* Cover photo would go here */}
        </div>
        <div className="px-4 pb-4">
          <div className="flex justify-between items-start relative -mt-12 sm:-mt-16 mb-4">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-black object-cover bg-black"
              referrerPolicy="no-referrer"
            />
            <button className="mt-14 sm:mt-16 px-4 py-1.5 rounded-full border border-white/30 font-bold text-white hover:bg-white/10 transition-colors">
              Edit profile
            </button>
          </div>

          <div className="mb-4">
            <h1 className="text-xl font-bold text-white flex items-center gap-1">
              {profile.name}
              {profile.isVerified && <BadgeCheck className="w-5 h-5 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
            </h1>
            <p className="text-gray-500">{profile.handle}</p>
          </div>

          <p className="text-white mb-3 whitespace-pre-wrap">{profile.bio}</p>

          <div className="flex flex-wrap gap-y-2 gap-x-4 text-gray-500 text-sm mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            {profile.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{profile.website}</a>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined {profile.joinDate}</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm mb-4">
            <div className="flex gap-1 hover:underline cursor-pointer">
              <span className="font-bold text-white">{profile.following.toLocaleString()}</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex gap-1 hover:underline cursor-pointer">
              <span className="font-bold text-white">{profile.followers.toLocaleString()}</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
          
          <div className="mb-4">
            <AwardBadge rank={profile.rank} />
          </div>
        </div>
      </div>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-start border-b border-white/10 rounded-none bg-transparent h-14 p-0">
          <TabsTrigger 
            value="posts" 
            className="group flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-500 h-full relative hover:bg-white/10 transition-colors"
          >
            Posts
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger 
            value="replies" 
            className="group flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-500 h-full relative hover:bg-white/10 transition-colors"
          >
            Replies
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger 
            value="media" 
            className="group flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-500 h-full relative hover:bg-white/10 transition-colors"
          >
            Media
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger 
            value="likes" 
            className="group flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-white text-gray-500 h-full relative hover:bg-white/10 transition-colors"
          >
            Likes
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full hidden group-data-[state=active]:block" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="m-0">
          <div className="flex flex-col">
            {userPosts.map((post) => (
              <article
                key={post.id}
                className="p-4 border-b border-white/10 hover:bg-white/[0.03] transition-colors flex gap-3"
              >
                <div className="shrink-0">
                  <img
                    src={post.author?.avatarUrl}
                    alt={post.author?.name}
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[15px] mb-0.5">
                    <span className="font-bold text-white hover:underline flex items-center gap-1 truncate">
                      {post.author?.name}
                      {post.author?.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      )}
                    </span>
                    <span className="text-gray-500 truncate">{post.author?.handle}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500 hover:underline cursor-pointer shrink-0">2h</span>
                  </div>

                  <p className="text-white text-[15px] leading-normal mb-3 whitespace-pre-wrap">
                    {post.content}
                  </p>

                  {post.imageUrl && (
                    <div className="mb-3 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={post.imageUrl}
                        alt="Post content"
                        className="w-full h-auto object-cover max-h-[500px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
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
            {userPosts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No posts yet.
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="likes">
          <div className="text-center py-12 text-gray-500">
            Likes are private.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
