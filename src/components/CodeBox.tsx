import type { CodeBlock } from "../types/knowledge";

type CodeBoxProps = CodeBlock;

export default function CodeBox({ title, code }: CodeBoxProps) {
  return (
    <div className="code-box">
      <div className="code-title">{title}</div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
