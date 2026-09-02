import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { nextGroups } from "../data/nextGroups";

interface NextKnowledgePageProps {
  onBack: () => void;
}

export default function NextKnowledgePage({ onBack }: NextKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="NextJS"
      groups={nextGroups}
      onBack={onBack}
      themeClassName="next-knowledge-page"
    />
  );
}
