import type { KnowledgeCard as KnowledgeCardData } from "../types/knowledge";
import CodeBox from "./CodeBox";

interface KnowledgeCardProps {
  card: KnowledgeCardData;
}

export default function KnowledgeCard({ card }: KnowledgeCardProps) {
  return (
    <article className="html-card" id={card.id}>
      <h3>{card.title}</h3>

      <p className="card-desc">
        {card.description}
        {card.exampleText && (
          <>
            <br />
            <strong>Ví dụ:</strong> {card.exampleText}
          </>
        )}
      </p>

      {card.codeBlocks.map((block, index) => (
        <CodeBox
          key={`${card.id}-${index}`}
          title={block.title}
          code={block.code}
          codeTsx={block.codeTsx}
          preview={block.preview}
        />
      ))}
    </article>
  );
}
