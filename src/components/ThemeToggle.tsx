interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title={theme === "light" ? "Chuyển sang chế độ tối" : "Chuyển sang chế độ sáng"}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
