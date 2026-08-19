import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { reactGroups } from "../data/reactGroups";

interface ReactKnowledgePageProps {
  onBack: () => void;
}

export default function ReactKnowledgePage({ onBack }: ReactKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="ReactJS"
      groups={reactGroups}
      onBack={onBack}
      themeClassName="react-knowledge-page"
    />
  );
}