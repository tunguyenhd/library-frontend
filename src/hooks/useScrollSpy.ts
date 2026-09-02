import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that tracks which card IDs are currently visible in the viewport.
 * Returns the ID of the card closest to the top of the viewport.
 */
export function useScrollSpy(cardIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibleEntries = useRef<Map<string, IntersectionObserverEntry>>(
    new Map()
  );

  useEffect(() => {
    if (cardIds.length === 0) return;

    visibleEntries.current.clear();

    const pickActive = () => {
      let bestId: string | null = null;
      let bestTop = Infinity;

      for (const [id, entry] of visibleEntries.current) {
        if (entry.isIntersecting) {
          const top = entry.boundingClientRect.top;
          if (top < bestTop) {
            bestTop = top;
            bestId = id;
          }
        }
      }

      if (bestId) {
        setActiveId(bestId);
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleEntries.current.set(entry.target.id, entry);
        }
        pickActive();
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const id of cardIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => {
      observerRef.current?.disconnect();
      visibleEntries.current.clear();
    };
  }, [cardIds]);

  return activeId;
}
