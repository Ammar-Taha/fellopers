export type QuestionAuthor = {
  _id: string;
  name: string;
  image?: string;
};

export type QuestionTag = {
  _id: string;
  name: string;
};

export type Question = {
  _id: string;
  title: string;
  tags: QuestionTag[];
  author: QuestionAuthor;
  createdAt: Date;
  votes: number;
  answers: number;
  views: number;
};

const minutesAgo = (minutes: number) =>
  new Date(Date.now() - minutes * 60 * 1000);

export const QUESTIONS: Question[] = [
  {
    _id: "1",
    title: "How to implement authentication in Next.js 15 with Auth.js?",
    tags: [
      { _id: "javascript", name: "javascript" },
      { _id: "nextjs", name: "next.js" },
      { _id: "authjs", name: "auth.js" },
    ],
    author: { _id: "u1", name: "Satheesh" },
    createdAt: minutesAgo(2),
    votes: 1200,
    answers: 900,
    views: 5200,
  },
  {
    _id: "2",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "javascript", name: "javascript" },
      { _id: "react", name: "react.js" },
      { _id: "redux", name: "redux" },
    ],
    author: { _id: "u2", name: "Ammar" },
    createdAt: minutesAgo(45),
    votes: 86,
    answers: 12,
    views: 1480,
  },
  {
    _id: "3",
    title: "How to handle async errors in an Express application?",
    tags: [
      { _id: "javascript", name: "javascript" },
      { _id: "nodejs", name: "node.js" },
      { _id: "express", name: "express" },
    ],
    author: { _id: "u3", name: "Lina" },
    createdAt: minutesAgo(60 * 8),
    votes: 340,
    answers: 0,
    views: 2100,
  },
  {
    _id: "4",
    title: "Difference between Prisma include and select?",
    tags: [
      { _id: "typescript", name: "typescript" },
      { _id: "prisma", name: "prisma" },
    ],
    author: { _id: "u1", name: "Satheesh" },
    createdAt: minutesAgo(60 * 26),
    votes: 54,
    answers: 7,
    views: 890,
  },
  {
    _id: "5",
    title: "Can I use Tailwind CSS with shadcn/ui and CSS variables?",
    tags: [
      { _id: "tailwindcss", name: "tailwindcss" },
      { _id: "react", name: "react.js" },
    ],
    author: { _id: "u4", name: "Noah" },
    createdAt: minutesAgo(60 * 50),
    votes: 210,
    answers: 18,
    views: 6400,
  },
];
