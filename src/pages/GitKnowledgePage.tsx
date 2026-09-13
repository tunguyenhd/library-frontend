import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { gitGroups } from "../data/gitGroups";

interface GitKnowledgePageProps {
  onBack: () => void;
}

export default function GitKnowledgePage({ onBack }: GitKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Git"
      groups={gitGroups}
      onBack={onBack}
      themeClassName="git-knowledge-page"
    />
  );
}
