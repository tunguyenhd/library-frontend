import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { cssGroups } from "../data/cssGroups";

interface CssKnowledgePageProps {
  onBack: () => void;
}

export default function CssKnowledgePage({ onBack }: CssKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="CSS"
      groups={cssGroups}
      onBack={onBack}
      themeClassName="css-knowledge-page"
    />
  );
}
