import React from 'react';
import { getLeaderboardWithProfiles } from '@/data/leaderboard';
import { AwardBadge } from '@/components/ui/award-badge';
import { BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LeaderboardSidebar() {
  const leaderboard = getLeaderboardWithProfiles().slice(0, 5); // Show top 5

  return (
    <div className="bg-[#16181C] rounded-2xl p-4">
      <h2 className="font-bold text-xl mb-4 text-white">Leaderboard</h2>
      <div className="flex flex-col gap-4">
        {leaderboard.map((entry, index) => (
          <Link
            key={entry.userId}
            to={`/profile/${entry.userId}`}
            className="flex items-center gap-3 hover:bg-white/[0.03] transition-colors rounded-lg p-2 -mx-2"
          >
            <div className="shrink-0">
              <img
                src={entry.profile?.avatarUrl}
                alt={entry.profile?.name}
                className="w-10 h-10 rounded-full object-cover"
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
              <div className="text-gray-500 text-[14px] truncate">{entry.profile?.handle}</div>
            </div>

            <div className="flex-shrink-0 text-right flex flex-col items-end gap-1">
              <span className="font-bold text-white text-sm">{entry.score.toLocaleString()}</span>
              {index < 3 && <AwardBadge rank={entry.rank} />}
            </div>
          </Link>
        ))}
      </div>
      <Link to="/leaderboard" className="text-blue-500 hover:text-blue-400 text-[15px] mt-4 block p-2 -mx-2 hover:bg-white/[0.03] rounded-lg transition-colors">
        Show more
      </Link>
    </div>
  );
}
