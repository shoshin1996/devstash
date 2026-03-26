export interface User {
  id: string;
  name: string;
  email: string;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  isSystem: boolean;
  count: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  isFavorite: boolean;
  icons: string[];
}

export interface Item {
  id: string;
  title: string;
  description: string;
  typeId: string;
  collectionId?: string;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  language?: string;
  createdAt: string;
}

// Current user
export const currentUser: User = {
  id: "user_1",
  name: "John Doe",
  email: "john@example.com",
  isPro: false,
};

// System item types
export const itemTypes: ItemType[] = [
  { id: "type_1", name: "Snippets", icon: "Code", color: "#3b82f6", isSystem: true, count: 24 },
  { id: "type_2", name: "Prompts", icon: "MessageSquare", color: "#a855f7", isSystem: true, count: 18 },
  { id: "type_3", name: "Commands", icon: "Terminal", color: "#22c55e", isSystem: true, count: 15 },
  { id: "type_4", name: "Notes", icon: "FileText", color: "#eab308", isSystem: true, count: 12 },
  { id: "type_5", name: "Files", icon: "File", color: "#f97316", isSystem: true, count: 5 },
  { id: "type_6", name: "Images", icon: "Image", color: "#ec4899", isSystem: true, count: 3 },
  { id: "type_7", name: "Links", icon: "Link", color: "#06b6d4", isSystem: true, count: 8 },
];

// Collections
export const collections: Collection[] = [
  { id: "col_1", name: "React Patterns", description: "Common React patterns and hooks", itemCount: 12, isFavorite: true, icons: ["Code", "FileText", "MessageSquare"] },
  { id: "col_2", name: "Python Snippets", description: "Useful Python code snippets", itemCount: 8, isFavorite: false, icons: ["Code", "Terminal"] },
  { id: "col_3", name: "Context Files", description: "AI context files for projects", itemCount: 5, isFavorite: true, icons: ["FileText"] },
  { id: "col_4", name: "Interview Prep", description: "Technical interview preparation", itemCount: 24, isFavorite: false, icons: ["Code", "FileText", "MessageSquare", "Link"] },
  { id: "col_5", name: "Git Commands", description: "Frequently used git commands", itemCount: 15, isFavorite: true, icons: ["Terminal", "FileText"] },
  { id: "col_6", name: "AI Prompts", description: "Curated AI prompts for coding", itemCount: 18, isFavorite: false, icons: ["MessageSquare", "Code"] },
];

// Items
export const items: Item[] = [
  {
    id: "item_1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeId: "type_1",
    collectionId: "col_1",
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    createdAt: "2026-03-16",
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeId: "type_1",
    collectionId: "col_1",
    tags: ["api", "error-handling", "typescript"],
    isFavorite: false,
    isPinned: true,
    language: "typescript",
    createdAt: "2026-03-15",
  },
  {
    id: "item_3",
    title: "Docker Compose for Postgres",
    description: "Quick postgres setup for local development",
    typeId: "type_3",
    collectionId: "col_5",
    tags: ["docker", "postgres", "devops"],
    isFavorite: false,
    isPinned: false,
    language: "yaml",
    createdAt: "2026-03-14",
  },
  {
    id: "item_4",
    title: "Code Review Prompt",
    description: "AI prompt for thorough code review with security focus",
    typeId: "type_2",
    collectionId: "col_6",
    tags: ["ai", "code-review", "prompt"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-03-13",
  },
  {
    id: "item_5",
    title: "Python List Comprehensions",
    description: "Common list comprehension patterns and examples",
    typeId: "type_1",
    collectionId: "col_2",
    tags: ["python", "patterns"],
    isFavorite: false,
    isPinned: false,
    language: "python",
    createdAt: "2026-03-12",
  },
  {
    id: "item_6",
    title: "Git Rebase Workflow",
    description: "Step-by-step guide for clean git rebase",
    typeId: "type_3",
    collectionId: "col_5",
    tags: ["git", "workflow"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-03-11",
  },
  {
    id: "item_7",
    title: "Next.js Server Actions Cheatsheet",
    description: "Quick reference for server actions patterns",
    typeId: "type_4",
    collectionId: "col_1",
    tags: ["nextjs", "server-actions", "reference"],
    isFavorite: true,
    isPinned: false,
    language: "typescript",
    createdAt: "2026-03-10",
  },
  {
    id: "item_8",
    title: "System Design Context",
    description: "AI context file for system design discussions",
    typeId: "type_5",
    collectionId: "col_3",
    tags: ["ai", "context", "system-design"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-03-09",
  },
];
