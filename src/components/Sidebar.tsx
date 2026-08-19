import type { KnowledgeGroup } from "../types/knowledge";

interface SidebarProps {
  topic: string;
  groups: KnowledgeGroup[];
  onBack: () => void;
}

export default function Sidebar({ topic, groups, onBack }: SidebarProps) {
  return (
    <aside className="html-sidebar">
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

      <h2>{topic}</h2>

      <nav
        className="html-menu"
        aria-label={`Mục lục kiến thức ${topic}`}
      >
        {groups.map((group) => (
          <div className="html-menu-group" key={group.label}>
            <h3 className="html-menu-title"># {group.title}</h3>

            {group.cards.map((card) => (
              <a href={`#${card.id}`} key={card.id}>
                {card.title}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
