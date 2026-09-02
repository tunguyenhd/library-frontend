import { useCallback, useState } from "react";
import type { CodeBlock } from "../types/knowledge";

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
      <pre><code>{showTsx && codeTsx ? codeTsx : code}</code></pre>

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
