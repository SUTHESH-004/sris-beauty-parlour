import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

type Phase = "idle" | "growing" | "grown" | "fading";

const GROW_MS = 340;
const FADE_MS = 220;

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [phase, setPhase] = useState<Phase>("idle");
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current === location.pathname) return;
    prevPathname.current = location.pathname;

    window.scrollTo({ top: 0 });
    setPhase("growing");

    const raf1 = requestAnimationFrame(() => setPhase("grown"));
    const toFading = setTimeout(() => setPhase("fading"), GROW_MS);
    const toIdle = setTimeout(() => setPhase("idle"), GROW_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(toFading);
      clearTimeout(toIdle);
    };
  }, [location.pathname]);

  const active = phase !== "idle";
  const expanded = phase === "grown" || phase === "fading";
  const fading = phase === "fading";

  return (
    <>
      {active && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-90 bg-primary pink-reveal ${expanded ? "pink-reveal-expanded" : ""} ${fading ? "pink-reveal-fading" : ""}`}
        />
      )}

      <div key={location.pathname} className="animate-page-in">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
