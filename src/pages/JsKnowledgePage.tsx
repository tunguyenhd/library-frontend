import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { jsGroups } from "../data/jsGroups";

interface JsKnowledgePageProps {
  onBack: () => void;
}

export default function JsKnowledgePage({ onBack }: JsKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="JavaScript"
      groups={jsGroups}
      onBack={onBack}
      themeClassName="js-knowledge-page"
    />
  );
}