import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { pythonGroups } from "../data/pythonGroups";

interface PythonKnowledgePageProps {
  onBack: () => void;
}

export default function PythonKnowledgePage({ onBack }: PythonKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Python"
      groups={pythonGroups}
      onBack={onBack}
      themeClassName="python-knowledge-page"
    />
  );
}
