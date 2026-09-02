export type Page = "home" | "html" | "css" | "scss" | "tailwind" | "js" | "ts" | "react" | "next" | "node" | "nest" | "go" | "python"  | "database"
  | "projects"
  | "exercises"
  | "notes";

export type Navigate = (page: Page) => void;
