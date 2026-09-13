import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { flutterGroups } from "../data/flutterGroups";

interface FlutterKnowledgePageProps {
  onBack: () => void;
}

export default function FlutterKnowledgePage({ onBack }: FlutterKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Flutter"
      groups={flutterGroups}
      onBack={onBack}
      themeClassName="flutter-knowledge-page"
    />
  );
}
