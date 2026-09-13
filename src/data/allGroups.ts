import type { KnowledgeGroup } from "../types/knowledge";
import type { Page } from "../types/navigation";
import { htmlGroups } from "./htmlGroups";
import { cssGroups } from "./cssGroups";
import { scssGroups } from "./scssGroups";
import { tailwindGroups } from "./tailwindGroups";
import { jsGroups } from "./jsGroups";
import { tsGroups } from "./tsGroups";
import { reactGroups } from "./reactGroups";
import { nextGroups } from "./nextGroups";
import { reactNativeGroups } from "./reactNativeGroups";
import { flutterGroups } from "./flutterGroups";
import { nodeGroups } from "./nodeGroups";
import { nestGroups } from "./nestGroups";
import { goGroups } from "./goGroups";
import { pythonGroups } from "./pythonGroups";
import { gitGroups } from "./gitGroups";
import { aiGroups } from "./aiGroups";
import { dbGroups } from "./dbGroups";

export interface TopicData {
  slug: Exclude<Page, "home" | "exercises" | "projects">;
  label: string;
  groups: KnowledgeGroup[];
}

export const allTopics: TopicData[] = [
  { slug: "html", label: "HTML", groups: htmlGroups },
  { slug: "css", label: "CSS", groups: cssGroups },
  { slug: "scss", label: "SCSS", groups: scssGroups },
  { slug: "tailwind", label: "Tailwind", groups: tailwindGroups },
  { slug: "js", label: "JavaScript", groups: jsGroups },
  { slug: "ts", label: "TypeScript", groups: tsGroups },
  { slug: "react", label: "ReactJS", groups: reactGroups },
  { slug: "next", label: "NextJS", groups: nextGroups },
  { slug: "react-native", label: "React Native", groups: reactNativeGroups },
  { slug: "flutter", label: "Flutter", groups: flutterGroups },
  { slug: "node", label: "Node.js", groups: nodeGroups },
  { slug: "nest", label: "NestJS", groups: nestGroups },
  { slug: "go", label: "Go", groups: goGroups },
  { slug: "python", label: "Python", groups: pythonGroups },
  { slug: "git", label: "Git", groups: gitGroups },
  { slug: "ai", label: "AI Training", groups: aiGroups },
  { slug: "database", label: "Database", groups: dbGroups },
];

export interface SearchResult {
  topicSlug: TopicData["slug"];
  topicLabel: string;
  cardId: string;
  cardTitle: string;
  cardDescription: string;
  groupTitle: string;
}

export function searchAllTopics(query: string, maxResults = 20): SearchResult[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const topic of allTopics) {
    for (const group of topic.groups) {
      for (const card of group.cards) {
        const titleMatch = card.title.toLowerCase().includes(q);
        const descMatch = card.description.toLowerCase().includes(q);

        if (titleMatch || descMatch) {
          results.push({
            topicSlug: topic.slug,
            topicLabel: topic.label,
            cardId: card.id,
            cardTitle: card.title,
            cardDescription: card.description,
            groupTitle: group.title,
          });

          if (results.length >= maxResults) return results;
        }
      }
    }
  }

  return results;
}
