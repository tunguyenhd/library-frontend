import { useCallback, useEffect, useRef, useState } from "react";
import type { CodeBlock } from "../types/knowledge";
import hljs from "highlight.js/lib/core";

// Register languages
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import sql from "highlight.js/lib/languages/sql";
import go from "highlight.js/lib/languages/go";
import python from "highlight.js/lib/languages/python";
import yaml from "highlight.js/lib/languages/yaml";
import dockerfile from "highlight.js/lib/languages/dockerfile";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("go", go);
hljs.registerLanguage("python", python);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("dockerfile", dockerfile);

type CodeBoxProps = CodeBlock;

function wrapPreview(html: string): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; padding: 16px; color: #1a1a1a; line-height: 1.5; }
</style>
<script>
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      e.preventDefault();
    }
  });
</script>
</head>
<body>${html}</body>
</html>`;
}

export default function CodeBox({ title, code, codeTsx, preview }: CodeBoxProps) {
  const [showTsx, setShowTsx] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const displayCode = showTsx && codeTsx ? codeTsx : code;

  useEffect(() => {
    if (codeRef.current) {
      // Reset highlight state
      codeRef.current.removeAttribute("data-highlighted");
      codeRef.current.className = "";
      codeRef.current.textContent = displayCode;
      hljs.highlightElement(codeRef.current);
    }
  }, [displayCode]);

  const iframeRef = useCallback((iframe: HTMLIFrameElement | null) => {
    if (!iframe) return;
    const resize = () => {
      try {
        const h = iframe.contentDocument?.documentElement?.scrollHeight;
        if (h) iframe.style.height = `${h + 2}px`;
      } catch { /* cross-origin */ }
    };
    iframe.addEventListener("load", resize);
  }, []);

  return (
    <div className="code-box">
      <div className="code-title">
        <span>{title}</span>

        {codeTsx && (
          <div className="code-lang-tabs">
            <button
              className={`code-lang-tab${!showTsx ? " active" : ""}`}
              onClick={() => setShowTsx(false)}
            >
              JSX
            </button>
            <button
              className={`code-lang-tab${showTsx ? " active" : ""}`}
              onClick={() => setShowTsx(true)}
            >
              TSX
            </button>
          </div>
        )}
      </div>
      <pre><code ref={codeRef}>{displayCode}</code></pre>

      {preview && (
        <div className="code-preview">
          <div className="code-preview-label">▶ Preview</div>
          <iframe
            ref={iframeRef}
            srcDoc={wrapPreview(preview)}
            sandbox="allow-scripts allow-same-origin"
            title={`Preview: ${title}`}
          />
        </div>
      )}
    </div>
  );
}
