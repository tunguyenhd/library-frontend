import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { reactNativeGroups } from "../data/reactNativeGroups";

interface ReactNativeKnowledgePageProps {
  onBack: () => void;
}

export default function ReactNativeKnowledgePage({ onBack }: ReactNativeKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="React Native"
      groups={reactNativeGroups}
      onBack={onBack}
      themeClassName="rn-knowledge-page"
    />
  );
}
