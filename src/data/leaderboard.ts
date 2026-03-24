import { profiles } from "./profiles";

export interface LeaderboardEntry {
  userId: string;
  rank: number;
  score: number;
  category: string;
}

export const leaderboard: LeaderboardEntry[] = [
  {
    userId: "user_4",
    rank: 1,
    score: 9850,
    category: "Top Creator"
  },
  {
    userId: "user_1",
    rank: 2,
    score: 8420,
    category: "Design Excellence"
  },
  {
    userId: "user_2",
    rank: 3,
    score: 7100,
    category: "Technical Innovation"
  },
  {
    userId: "user_3",
    rank: 4,
    score: 4500,
    category: "Rising Star"
  }
];

export const getLeaderboardWithProfiles = () => {
  return leaderboard.map(entry => {
    const profile = profiles.find(p => p.id === entry.userId);
    return { ...entry, profile };
  }).sort((a, b) => a.rank - b.rank);
};
