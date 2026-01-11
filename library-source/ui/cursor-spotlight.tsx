"use client";

import { useState, useEffect } from "react";

/**
 * Cursor Spotlight
 * 
 * Adds a premium "flashlight" effect that follows the mouse.
 * Perfect for dark mode AI interfaces to reveal content or add depth.
 * 
 * Usage:
 * <CursorSpotlight />
 * or wrap content:
 * <CursorSpotlight>
 *   <YourContent />
 * </CursorSpotlight>
 */

export default function CursorSpotlight({ 
  children,
  className = "",
  size = 400
}: { 
  children?: React.ReactNode;
  className?: string;
  size?: number;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setOpacity(1);
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      // Calculate relative to the parent if wrapping, or screen if fixed
      if (children) {
        // Relative tracking (requires reference, simplified here for global use case)
        // For simple global cursor, we use e.clientX/Y
      }
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [children]);

  return (
    <>
      <div
        className={`pointer-events-none fixed -inset-px z-50 transition-opacity duration-300 ${className}`}
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
        }}
      />
      {children}
    </>
  );
}
