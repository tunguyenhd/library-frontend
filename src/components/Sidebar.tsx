import { useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import type { KnowledgeGroup } from "../types/knowledge";

interface SidebarProps {
  topic: string;
  groups: KnowledgeGroup[];
  onBack: () => void;
  activeId: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  themeToggle?: ReactNode;
}

export default function Sidebar({
  topic,
  groups,
  onBack,
  activeId,
  searchQuery,
  onSearchChange,
  themeToggle,
}: SidebarProps) {
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);

  // Determine which group the active card belongs to
  const activeGroupLabel = useMemo(() => {
    if (!activeId) return null;
    for (const group of groups) {
      if (group.cards.some((card) => card.id === activeId)) {
        return group.label;
      }
    }
    return null;
  }, [activeId, groups]);

  // Auto-scroll the sidebar so the active link stays visible
  useEffect(() => {
    const link = activeLinkRef.current;
    const sidebar = sidebarRef.current;
    if (!link || !sidebar) return;

    const linkRect = link.getBoundingClientRect();
    const sidebarRect = sidebar.getBoundingClientRect();

    // Check if link is outside the visible area of the sidebar
    const isAbove = linkRect.top < sidebarRect.top + 60;
    const isBelow = linkRect.bottom > sidebarRect.bottom - 60;

    if (isAbove || isBelow) {
      const delta = linkRect.top - (sidebarRect.top + sidebarRect.height / 2);
      sidebar.scrollBy({
        top: delta,
        behavior: "auto",
      });
    }
  }, [activeId]);

  return (
    <aside className="html-sidebar" ref={sidebarRef}>
      <div className="sidebar-header">
        <div className="sidebar-header-top">
          <a
            href="./"
            className="back-btn"
            onClick={(event) => {
              event.preventDefault();
              onBack();
            }}
          >
            ← Trang chủ
          </a>
          {themeToggle}
        </div>

        <h2>{topic}</h2>
      </div>

      <nav
        className="html-menu"
        aria-label={`Mục lục kiến thức ${topic}`}
      >
        {groups.map((group, index) => {
          const isGroupActive = activeGroupLabel === group.label;

          return (
            <div
              className={`html-menu-group${isGroupActive ? " menu-group-active" : ""}`}
              key={`${group.label}-${index}`}
            >
              <h3 className="html-menu-title"># {group.title}</h3>

              {group.cards.map((card) => {
                const isActive = activeId === card.id;
                return (
                  <a
                    href={`#${card.id}`}
                    key={card.id}
                    ref={isActive ? activeLinkRef : null}
                    className={isActive ? "menu-link-active" : ""}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(card.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      history.replaceState(null, "", `#${card.id}`);
                    }}
                  >
                    {card.title}
                  </a>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
