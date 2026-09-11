import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import HtmlKnowledgePage from "./pages/HtmlKnowledgePage";
import CssKnowledgePage from "./pages/CssKnowledgePage";
import JsKnowledgePage from "./pages/JsKnowledgePage";
import TsKnowledgePage from "./pages/TsKnowledgePage";
import ReactKnowledgePage from "./pages/ReactKnowledgePage";
import NextKnowledgePage from "./pages/NextKnowledgePage";
import NodeKnowledgePage from "./pages/NodeKnowledgePage";
import NestKnowledgePage from "./pages/NestKnowledgePage";
import GoKnowledgePage from "./pages/GoKnowledgePage";
import PythonKnowledgePage from "./pages/PythonKnowledgePage";
import ScssKnowledgePage from "./pages/ScssKnowledgePage";
import TailwindKnowledgePage from "./pages/TailwindKnowledgePage";
import DbKnowledgePage from "./pages/DbKnowledgePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExercisesPage from "./pages/ExercisesPage";
import TopicPlaceholder from "./pages/TopicPlaceholder";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";
import type { Navigate, Page } from "./types/navigation";

const pageTitles: Record<Page, string> = {
  home: "Code Knowledge",
  html: "HTML Knowledge",
  css: "CSS Knowledge",
  js: "JavaScript Knowledge",
  ts: "TypeScript Knowledge",
  react: "ReactJS Knowledge",
  next: "NextJS Knowledge",
  node: "Node.js Knowledge",
  nest: "NestJS Knowledge",
  go: "Go Knowledge",
  python: "Python Knowledge",
  scss: "SCSS Knowledge",
  tailwind: "Tailwind CSS Knowledge",
  database: "Database Knowledge",
  projects: "Dự án Thực tế",
  exercises: "Bài tập Thực hành",
};

function isPage(value: string | null): value is Page {
  return value !== null && Object.prototype.hasOwnProperty.call(pageTitles, value);
}

function readPageFromUrl(): Page {
  const page = new URLSearchParams(window.location.search).get("page");
  return isPage(page) ? page : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(readPageFromUrl);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handlePopState = () => setPage(readPageFromUrl());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  const navigate: Navigate = (nextPage) => {
    const url = new URL(window.location.href);

    url.hash = "";
    if (nextPage === "home") {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", nextPage);
    }

    window.history.pushState({}, "", `${url.pathname}${url.search}`);
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const renderPage = () => {
    if (page === "home") {
      return <HomePage onNavigate={navigate} />;
    }

  if (page === "html") {
    return <HtmlKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "css") {
    return <CssKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "js") {
    return <JsKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "ts") {
    return <TsKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "react") {
    return <ReactKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "next") {
    return <NextKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "node") {
    return <NodeKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "nest") {
    return <NestKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "go") {
    return <GoKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "python") {
    return <PythonKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "scss") {
    return <ScssKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "tailwind") {
    return <TailwindKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "database") {
    return <DbKnowledgePage onBack={() => navigate("home")} />;
  }

  if (page === "projects") {
    return <ProjectsPage onBack={() => navigate("home")} />;
  }

  if (page === "exercises") {
    return <ExercisesPage onBack={() => navigate("home")} />;
  }

  return (
    <TopicPlaceholder
      topic={(pageTitles[page as Page] || "").replace(" Knowledge", "")}
      onBack={() => navigate("home")}
    />
  );
  };

  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {renderPage()}
    </>
  );
}
