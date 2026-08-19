import type { KnowledgeGroup as KnowledgeGroupData } from "../types/knowledge";
import KnowledgeCard from "./KnowledgeCard";

interface KnowledgeGroupProps {
  group: KnowledgeGroupData;
}

export default function KnowledgeGroup({ group }: KnowledgeGroupProps) {
  return (
    <section className="html-group">
      <span>{group.label}</span>
      <h2>{group.title}</h2>

      {group.cards.map((card) => (
        <KnowledgeCard key={card.id} card={card} />
      ))}
    </section>
  );
}
