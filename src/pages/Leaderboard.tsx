import React from 'react';
import { getLeaderboardWithProfiles } from '@/data/leaderboard';
import { AwardBadge } from '@/components/ui/award-badge';
import { BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Leaderboard() {
  const leaderboard = getLeaderboardWithProfiles();

  return (
    <div className="bg-black font-sans min-h-screen">
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 cursor-pointer">
        <h1 className="text-xl font-bold text-white">Leaderboard</h1>
      </header>

      <div className="flex flex-col">
        {leaderboard.map((entry, index) => (
          <Link
            key={entry.userId}
            to={`/profile/${entry.userId}`}
            className="p-4 border-b border-white/10 hover:bg-white/[0.03] transition-colors flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-8 text-center">
              <span className="text-xl font-bold text-gray-500">{entry.rank}</span>
            </div>

            <div className="shrink-0">
              <img
                src={entry.profile?.avatarUrl}
                alt={entry.profile?.name}
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-[15px]">
                <span className="font-bold text-white hover:underline flex items-center gap-1 truncate">
                  {entry.profile?.name}
                  {entry.profile?.isVerified && (
                    <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </span>
              </div>
              <div className="text-gray-500 text-[15px] truncate">{entry.profile?.handle}</div>
              <div className="text-sm text-gray-500 mt-0.5">{entry.category}</div>
            </div>

            <div className="flex-shrink-0 text-right flex flex-col items-end gap-1">
              <span className="font-bold text-white">{entry.score.toLocaleString()}</span>
              {index < 3 && <AwardBadge rank={entry.rank} />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
