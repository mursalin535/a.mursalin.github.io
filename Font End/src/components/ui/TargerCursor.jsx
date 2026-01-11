import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

const TargetCursor = ({
  children,
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const dotRef = useRef(null);
  const spinTl = useRef(null);

  const targetCornerPositionsRef = useRef(null);
  const activeStrengthRef = useRef({ current: 0 });

  const isMobile = useMemo(() => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth <= 768
    );
  }, []);

  const moveCursor = useCallback((x, y) => {
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.12,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    spinTl.current = gsap
      .timeline({ repeat: -1 })
      .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });

    const moveHandler = (e) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const enterHandler = (e) => {
      const target = e.target.closest(targetSelector);
      if (!target || !cornersRef.current) return;

      spinTl.current.pause();
      gsap.set(cursor, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const cursorX = gsap.getProperty(cursor, "x");
      const cursorY = gsap.getProperty(cursor, "y");

      targetCornerPositionsRef.current = [
        { x: rect.left, y: rect.top },
        { x: rect.right, y: rect.top },
        { x: rect.right, y: rect.bottom },
        { x: rect.left, y: rect.bottom },
      ];

      gsap.to(activeStrengthRef.current, {
        current: 1,
        duration: hoverDuration,
      });

      cornersRef.current.forEach((corner, i) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current[i].x - cursorX,
          y: targetCornerPositionsRef.current[i].y - cursorY,
          duration: 0.25,
          ease: "power2.out",
        });
      });

      const leaveHandler = () => {
        gsap.to(activeStrengthRef.current, { current: 0, duration: 0.2 });

        gsap.to(cornersRef.current, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });

        spinTl.current.restart();
        target.removeEventListener("mouseleave", leaveHandler);
      };

      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [
    isMobile,
    hideDefaultCursor,
    spinDuration,
    hoverDuration,
    moveCursor,
    targetSelector,
  ]);

  if (isMobile) return <>{children}</>;

  return (
    <>
      {children}

      <div ref={cursorRef} className="target-cursor-wrapper">
        <div ref={dotRef} className="target-cursor-dot" />
        <div className="target-cursor-corner corner-tl" />
        <div className="target-cursor-corner corner-tr" />
        <div className="target-cursor-corner corner-br" />
        <div className="target-cursor-corner corner-bl" />
      </div>
    </>
  );
};

export default TargetCursor;
