interface TopicPlaceholderProps {
  topic: string;
  onBack: () => void;
}

export default function TopicPlaceholder({
  topic,
  onBack,
}: TopicPlaceholderProps) {
  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <span>Code Knowledge</span>
        <h1>{topic}</h1>
        <p>Nội dung cho chủ đề này sẽ được bổ sung sau.</p>
        <a
          href="./"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          ← Quay về trang chủ
        </a>
      </section>
    </main>
  );
}
