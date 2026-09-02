import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { goGroups } from "../data/goGroups";

interface GoKnowledgePageProps {
  onBack: () => void;
}

export default function GoKnowledgePage({ onBack }: GoKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Go"
      groups={goGroups}
      onBack={onBack}
      themeClassName="go-knowledge-page"
    />
  );
}
