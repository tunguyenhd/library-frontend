import { useEffect } from "react";
import type { KnowledgeGroup as KnowledgeGroupData } from "../types/knowledge";
import KnowledgeGroup from "./KnowledgeGroup";
import Sidebar from "./Sidebar";

interface KnowledgePageLayoutProps {
  topic: string;
  groups: KnowledgeGroupData[];
  onBack: () => void;
  themeClassName?: string;
}

export default function KnowledgePageLayout({
  topic,
  groups,
  onBack,
  themeClassName = "",
}: KnowledgePageLayoutProps) {
  useEffect(() => {
    const scrollToCurrentHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));

      if (id) {
        document.getElementById(id)?.scrollIntoView();
      }
    };

    const frameId = window.requestAnimationFrame(scrollToCurrentHash);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  return (
    <main className={`html-page ${themeClassName}`.trim()}>
      <Sidebar topic={topic} groups={groups} onBack={onBack} />

      <section className="html-content">
        {groups.map((group) => (
          <KnowledgeGroup key={group.label} group={group} />
        ))}
      </section>
    </main>
  );
}
