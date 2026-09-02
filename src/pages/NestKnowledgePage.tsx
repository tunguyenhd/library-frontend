import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { nestGroups } from "../data/nestGroups";

interface NestKnowledgePageProps {
  onBack: () => void;
}

export default function NestKnowledgePage({ onBack }: NestKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="NestJS"
      groups={nestGroups}
      onBack={onBack}
      themeClassName="nest-knowledge-page"
    />
  );
}
