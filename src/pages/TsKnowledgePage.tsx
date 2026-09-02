import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { tsGroups } from "../data/tsGroups";

interface TsKnowledgePageProps {
  onBack: () => void;
}

export default function TsKnowledgePage({ onBack }: TsKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="TypeScript"
      groups={tsGroups}
      onBack={onBack}
      themeClassName="ts-knowledge-page"
    />
  );
}
