export interface CodeBlock {
  title: string;
  code: string;
}

export interface KnowledgeCard {
  id: string;
  title: string;
  description: string;
  exampleText: string | null;
  codeBlocks: CodeBlock[];
}

export interface KnowledgeGroup {
  label: string;
  title: string;
  cards: KnowledgeCard[];
}
