export type Page = "home" | "html" | "css" | "scss" | "tailwind" | "js" | "ts" | "react" | "next" | "react-native" | "flutter" | "node" | "nest" | "go" | "python" | "git" | "ai" | "database"
  | "projects"
  | "exercises";

export type Navigate = (page: Page) => void;
