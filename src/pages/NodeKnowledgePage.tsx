import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { nodeGroups } from "../data/nodeGroups";

interface NodeKnowledgePageProps {
  onBack: () => void;
}

export default function NodeKnowledgePage({ onBack }: NodeKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Node.js"
      groups={nodeGroups}
      onBack={onBack}
      themeClassName="node-knowledge-page"
    />
  );
}
