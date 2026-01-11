"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function MursalinBG({ children }) {
  const BGref = useRef(null);
  const cursor = useRef(null);

  // Animate the background on mount
  useGSAP(() => {
    gsap.from(BGref.current, {
      opacity: 0,
      x: "-100%",
      delay: 0.5,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  // Handle cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1   ,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={BGref}
      style={{
     background:"black",
      }}
      className="h-screen w-screen"
      className="flex items-center justify-center overflow-hidden relative"
    >
      {/* Cyber glowing cursor */}
      <div
        ref={cursor}
        className=" pointer-events-none 
                    rounded-full border-2 border-cyan-400 
                   shadow-[0_0_20px_4px_rgba(34,211,238,0.7)]
                   mix-blend-difference transition-all duration-75"
      ></div>

      {children}
    </div>
  );
}

export default MursalinBG;
