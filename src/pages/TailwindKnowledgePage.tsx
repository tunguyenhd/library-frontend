import KnowledgePageLayout from "../components/KnowledgePageLayout";
import { tailwindGroups } from "../data/tailwindGroups";

interface TailwindKnowledgePageProps {
  onBack: () => void;
}

export default function TailwindKnowledgePage({ onBack }: TailwindKnowledgePageProps) {
  return (
    <KnowledgePageLayout
      topic="Tailwind CSS"
      groups={tailwindGroups}
      onBack={onBack}
      themeClassName="tailwind-knowledge-page"
    />
  );
}
