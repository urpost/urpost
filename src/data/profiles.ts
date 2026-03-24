export interface Profile {
  id: string;
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  isVerified: boolean;
  joinDate: string;
  followers: number;
  following: number;
  website?: string;
}

export const profiles: Profile[] = [
  {
    id: "user_1",
    name: "Elena Rostova",
    handle: "@elenar",
    bio: "Design Director at Studio V. Exploring the intersection of digital and physical spaces.",
    avatarUrl: "https://picsum.photos/seed/elena/200/200",
    isVerified: true,
    joinDate: "October 2023",
    followers: 14200,
    following: 340,
    website: "elenarostova.design"
  },
  {
    id: "user_2",
    name: "Marcus Chen",
    handle: "@mchen",
    bio: "Computational Architect. Building tools for the next generation of creators.",
    avatarUrl: "https://picsum.photos/seed/marcus/200/200",
    isVerified: true,
    joinDate: "November 2023",
    followers: 8900,
    following: 120,
    website: "mchen.xyz"
  },
  {
    id: "user_3",
    name: "Sarah Jenkins",
    handle: "@sarahj",
    bio: "Visual Artist & Typographer. Currently obsessed with variable fonts.",
    avatarUrl: "https://picsum.photos/seed/sarah/200/200",
    isVerified: false,
    joinDate: "January 2024",
    followers: 3200,
    following: 450,
  },
  {
    id: "user_4",
    name: "David Alaba",
    handle: "@davida",
    bio: "Creative Technologist. Making things that look nice and work well.",
    avatarUrl: "https://picsum.photos/seed/david/200/200",
    isVerified: true,
    joinDate: "February 2024",
    followers: 21500,
    following: 800,
    website: "davida.dev"
  }
];
