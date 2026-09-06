"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/* -----------------------------------------------------------------
   Context
----------------------------------------------------------------- */
type TransitionCtxType = {
  triggerTransition: (href: string, snapshot: React.ReactNode) => void;
};

const TransitionCtx = createContext<TransitionCtxType>({
  triggerTransition: () => { },
});

export function usePageTransition() {
  return useContext(TransitionCtx);
}

/* -----------------------------------------------------------------
   Provider
-----------------------------------------------------------------

   HOW THE ERASE-REVEAL TRANSITION WORKS
   ──────────────────────────────────────
   1. triggerTransition() is called with the destination href and a
      visual snapshot (ReactNode) of the current page.

   2. The snapshot is mounted as a position:fixed overlay (z-100)
      covering the entire viewport. The user sees no change.

   3. router.push(href) is called immediately after — the destination
      route mounts silently UNDERNEATH the overlay at the same
      scroll/coordinate position (scroll is always 0 for the welcome
      page, so no coordinate mismatch).

   4. The overlay's clip-path animates:
        inset(0% 0% 0% 0%)   ← full rectangle (nothing cut)
        inset(0% 0% 100% 0%) ← bottom boundary moves to top
                               → element is erased top-first
      This progressively reveals the destination page from the
      TOP of the viewport downward, at the exact same coordinates.
      The destination never moves — only the masking changes.

   5. onAnimationComplete removes the overlay.
      The destination page is now fully visible and interactive.

----------------------------------------------------------------- */
export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [snapshot, setSnapshot] = useState<React.ReactNode>(null);
  const locked = useRef(false);

  const triggerTransition = useCallback(
    (href: string, snap: React.ReactNode) => {
      if (locked.current) return;
      locked.current = true;

      // 1. Paint the overlay immediately so no visual gap occurs
      setSnapshot(snap);

      // 2. Navigate after one paint tick so the overlay renders first
      setTimeout(() => router.push(href), 40);
    },
    [router]
  );

  const handleDone = useCallback(() => {
    setSnapshot(null);
    locked.current = false;
  }, []);

  return (
    <TransitionCtx.Provider value={{ triggerTransition }}>
      {children}

      {/* ── Erase-reveal overlay (z-100, position:fixed) ── */}
      {snapshot ? (
        <motion.div
          key="page-transition-overlay"
          // Clip-path erase: top-to-bottom reveal of destination
          // The overlay starts fully visible, then the bottom
          // boundary rises to the top, erasing the overlay from
          // top downward — revealing what was underneath at the
          // exact same viewport coordinates.
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleDone}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            willChange: "clip-path",
            overflow: "hidden",
          }}
        >
          {snapshot}
        </motion.div>
      ) : null}
    </TransitionCtx.Provider>
  );
}
