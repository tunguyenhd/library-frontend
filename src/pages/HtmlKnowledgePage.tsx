import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { htmlGroups } from "../data/htmlGroups";

interface HtmlKnowledgePageProps {
  onBack: () => void;
}

export default function HtmlKnowledgePage({ onBack }: HtmlKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="HTML"
      groups={htmlGroups}
      onBack={onBack}
    />
  );
}
