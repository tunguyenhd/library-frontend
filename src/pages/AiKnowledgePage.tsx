import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { aiGroups } from "../data/aiGroups";

interface AiKnowledgePageProps {
  onBack: () => void;
}

export default function AiKnowledgePage({ onBack }: AiKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="AI Training"
      groups={aiGroups}
      onBack={onBack}
      themeClassName="ai-knowledge-page"
    />
  );
}
