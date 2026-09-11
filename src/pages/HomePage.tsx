import type { Navigate, Page } from "../types/navigation";

interface Topic {
  slug: Exclude<Page, "home">;
  label: string;
  className: string;
}

interface HomePageProps {
  onNavigate: Navigate;
}

const topics: Topic[] = [
  { slug: "html", label: "HTML", className: "html" },
  { slug: "css", label: "CSS", className: "css" },
  { slug: "scss", label: "SCSS", className: "scss" },
  { slug: "tailwind", label: "Tailwind", className: "tailwind" },
  { slug: "js", label: "JavaScript", className: "js" },
  { slug: "ts", label: "TypeScript", className: "ts" },
  { slug: "react", label: "ReactJS", className: "react" },
  { slug: "next", label: "NextJS", className: "next" },
  { slug: "node", label: "Node.js", className: "node" },
  { slug: "nest", label: "NestJS", className: "nest" },
  { slug: "go", label: "Go", className: "go" },
  { slug: "python", label: "Python", className: "python" },
  { slug: "database", label: "Database", className: "database" },
  { slug: "exercises", label: "Bài tập", className: "exercises" },
  { slug: "projects", label: "Dự án", className: "projects" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="home">
      <section className="hero">
        <h1>Code Knowledge</h1>
        <p>Nơi lưu trữ kiến thức học lập trình Front-End</p>

        <div className="topic-list">
          {topics.map((topic) => (
            <a
              href={`?page=${topic.slug}`}
              className={`topic-btn ${topic.className}`}
              key={topic.slug}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(topic.slug);
              }}
            >
              {topic.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
