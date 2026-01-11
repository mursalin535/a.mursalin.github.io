"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import MursalinIntroGreet from "./MursalinIntroGreet";

function MursalinIntro() {
  const container = useRef(null);
  const name = useRef(null);
  const desc = useRef(null);
  const hr = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.from(container.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
    })
      .from(name.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
      .from(hr.current, {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.6,
      })
      .from(desc.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      });
  }, []);

  return (
    <section
      ref={container}
      className="relative max-w-5xl w-full text-center text-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/me.jpg"
          alt="Mursalin"
          className="h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 
                     rounded-full border-4 border-cyan-400
                     shadow-[0_0_25px_rgba(34,211,238,0.6)]"
        />

        <div>
          <MursalinIntroGreet />
          <h1
            ref={name}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
                       font-mono font-bold"
          >
            I'm Mursalin
          </h1>
        </div>
      </div>

      <hr
        ref={hr}
        className="my-10 mx-auto w-3/4 border-t-4 border-cyan-300"
      />

      <p
        ref={desc}
        className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl 
                   leading-relaxed font-mono text-gray-300"
      >
       Md Afiujjaman Mursalin is a university student based in Bangladesh, specializing in full-stack web development and competitive programming. He focuses on building scalable, performance-driven applications with clean architecture and modern UI. Constantly exploring new technologies, he enjoys solving complex problems and turning ideas into efficient digital solutions.
      </p>
    </section>
  );
}

export default MursalinIntro;
