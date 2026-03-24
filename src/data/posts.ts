import { profiles } from "./profiles";

export interface Post {
  id: string;
  authorId: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: "post_1",
    authorId: "user_1",
    content: "Just wrapped up the new brand identity for Studio V. We focused on airy, breathable layouts that let the content speak for itself. What do you think?",
    imageUrl: "https://picsum.photos/seed/post1/1200/800",
    likes: 1240,
    comments: 84,
    createdAt: "2024-05-12T10:00:00Z"
  },
  {
    id: "post_2",
    authorId: "user_2",
    content: "Experimenting with WebGL shaders to create organic, fluid motion. The math behind this is surprisingly elegant.",
    imageUrl: "https://picsum.photos/seed/post2/1200/800",
    likes: 890,
    comments: 42,
    createdAt: "2024-05-11T14:30:00Z"
  },
  {
    id: "post_3",
    authorId: "user_4",
    content: "The beauty of minimalism isn't just about removing things; it's about making the things that remain absolutely perfect.",
    likes: 3400,
    comments: 210,
    createdAt: "2024-05-10T09:15:00Z"
  },
  {
    id: "post_4",
    authorId: "user_3",
    content: "A sneak peek at the new variable font family I've been developing. It scales beautifully from ultra-thin to black.",
    imageUrl: "https://picsum.photos/seed/post4/1200/800",
    likes: 560,
    comments: 28,
    createdAt: "2024-05-09T16:45:00Z"
  }
];

export const getPostsWithAuthors = () => {
  return posts.map(post => {
    const author = profiles.find(p => p.id === post.authorId);
    return { ...post, author };
  }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
