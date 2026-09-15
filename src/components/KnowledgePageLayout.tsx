import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { KnowledgeGroup as KnowledgeGroupData } from "../types/knowledge";
import KnowledgeGroup from "./KnowledgeGroup";
import Sidebar from "./Sidebar";
import { useScrollSpy } from "../hooks/useScrollSpy";

interface KnowledgePageLayoutProps {
  topic: string;
  groups: KnowledgeGroupData[];
  onBack: () => void;
  themeClassName?: string;
  themeToggle?: ReactNode;
}

export default function KnowledgePageLayout({
  topic,
  groups,
  onBack,
  themeClassName = "",
  themeToggle,
}: KnowledgePageLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  // Collect all card IDs for scroll spy from groups
  const cardIds = useMemo(
    () => groups.flatMap((g) => g.cards.map((c) => c.id)),
    [groups]
  );

  const activeId = useScrollSpy(cardIds);

  useEffect(() => {
    const scrollToCurrentHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));

      if (id) {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    // Use multiple timeouts to handle pages that render progressively
    const t1 = window.setTimeout(scrollToCurrentHash, 100);
    const t2 = window.setTimeout(scrollToCurrentHash, 400);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchError("");
      return;
    }

    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      let matchId = null;

      for (const group of groups) {
        if (group.title.toLowerCase().includes(query)) {
          if (group.cards.length > 0) matchId = group.cards[0].id;
          break;
        }

        const matchedCard = group.cards.find(
          (card) =>
            card.title.toLowerCase().includes(query) ||
            card.description.toLowerCase().includes(query)
        );

        if (matchedCard) {
          matchId = matchedCard.id;
          break;
        }
      }

      if (matchId) {
        setSearchError("");
        const el = document.getElementById(matchId);
        if (el) {
          // Calculate offset to prevent sticky search bar from covering the item
          const y = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        setSearchError(`Không tìm thấy kết quả nào cho "${searchQuery}"`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, groups]);

  return (
    <main className={`html-page ${themeClassName}`.trim()}>
      <Sidebar
        topic={topic}
        groups={groups}
        onBack={onBack}
        activeId={activeId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        themeToggle={themeToggle}
      />

      <section className="html-content">
        <div className="content-search-wrapper">
          <div className="search-container">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="search-input"
                placeholder="Tìm kiếm kiến thức..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingRight: '40px' }}
              />
              {searchQuery && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
                  title="Xóa tìm kiếm"
                >
                  ✕
                </button>
              )}
            </div>
            {searchError && (
              <div className="search-error" style={{ color: '#ef4444', marginTop: '8px', fontSize: '14px', fontWeight: 500 }}>
                {searchError}
              </div>
            )}
          </div>
        </div>

        {groups.map((group, index) => (
          <KnowledgeGroup key={`${group.label}-${index}`} group={group} />
        ))}
      </section>
    </main>
  );
}
