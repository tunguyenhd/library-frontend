import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { scssGroups } from "../data/scssGroups";

interface ScssKnowledgePageProps {
  onBack: () => void;
}

export default function ScssKnowledgePage({ onBack }: ScssKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="SCSS"
      groups={scssGroups}
      onBack={onBack}
      themeClassName="scss-knowledge-page"
    />
  );
}
