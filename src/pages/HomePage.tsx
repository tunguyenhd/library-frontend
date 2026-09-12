import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import type { Navigate, Page } from "../types/navigation";
import { searchAllTopics, type SearchResult } from "../data/allGroups";

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

/** Map topic slug → color for the badge */
const topicColors: Record<string, string> = {
  html: "#e34f26",
  css: "#1572b6",
  scss: "#cc6699",
  tailwind: "#06b6d4",
  js: "#f7df1e",
  ts: "#3178c6",
  react: "#61dafb",
  next: "#111827",
  node: "#339933",
  nest: "#e0234e",
  go: "#00add8",
  python: "#3776ab",
  database: "#f59e0b",
};

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <mark className="home-search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const results: SearchResult[] = useMemo(
    () => searchAllTopics(query, 15),
    [query]
  );

  const showDropdown = isFocused && query.trim().length > 0;

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      setQuery("");
      setIsFocused(false);
      // Navigate to the topic page. After the page renders, the card ID
      // will be in the URL hash so the KnowledgePageLayout can scroll to it.
      const url = new URL(window.location.href);
      url.searchParams.set("page", result.topicSlug);
      url.hash = result.cardId;
      window.history.pushState({}, "", `${url.pathname}${url.search}#${result.cardId}`);
      onNavigate(result.topicSlug as Page);
    },
    [onNavigate]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    } else if (e.key === "Escape") {
      setIsFocused(false);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && resultRefs.current[activeIndex]) {
      resultRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <main className="home">
      <section className="hero">
        <h1>Code Knowledge</h1>
        <p>Nơi lưu trữ kiến thức học lập trình Front-End</p>

        {/* ─── Global Search ─── */}
        <div className="home-search" ref={searchRef}>
          <div className="home-search-input-wrapper">
            <span className="home-search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              ref={inputRef}
              type="text"
              className="home-search-input"
              placeholder="Tìm kiếm kiến thức trên tất cả các chủ đề..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
              role="combobox"
              aria-expanded={showDropdown}
              aria-autocomplete="list"
              aria-controls="home-search-results"
              aria-activedescendant={activeIndex >= 0 ? `home-sr-${activeIndex}` : undefined}
            />
            {query && (
              <button
                className="home-search-clear"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>

          {showDropdown && (
            <div className="home-search-dropdown" id="home-search-results" role="listbox">
              {results.length > 0 ? (
                results.map((r, i) => {
                  const color = topicColors[r.topicSlug] ?? "#6b7280";
                  const isDarkText = ["js", "react", "database"].includes(r.topicSlug);

                  return (
                    <button
                      key={`${r.topicSlug}-${r.cardId}`}
                      id={`home-sr-${i}`}
                      ref={(el) => { resultRefs.current[i] = el; }}
                      role="option"
                      aria-selected={i === activeIndex}
                      className={`home-search-result ${i === activeIndex ? "active" : ""}`}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => handleSelect(r)}
                    >
                      <span
                        className="home-sr-badge"
                        style={{
                          backgroundColor: color,
                          color: isDarkText ? "#111827" : "#fff",
                        }}
                      >
                        {r.topicLabel}
                      </span>
                      <span className="home-sr-info">
                        <span className="home-sr-title">
                          {highlightMatch(r.cardTitle, query)}
                        </span>
                        <span className="home-sr-desc">
                          {r.cardDescription.length > 100
                            ? highlightMatch(r.cardDescription.slice(0, 100) + "...", query)
                            : highlightMatch(r.cardDescription, query)}
                        </span>
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="home-search-empty">
                  Không tìm thấy kết quả nào cho "<strong>{query}</strong>"
                </div>
              )}
            </div>
          )}
        </div>

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
