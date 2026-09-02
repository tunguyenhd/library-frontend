import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { dbGroups } from "../data/dbGroups";

interface DbKnowledgePageProps {
  onBack: () => void;
}

export default function DbKnowledgePage({ onBack }: DbKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Database"
      groups={dbGroups}
      onBack={onBack}
      themeClassName="db-knowledge-page"
    />
  );
}
