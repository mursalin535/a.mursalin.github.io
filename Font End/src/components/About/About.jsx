import MursalinNav from "../Mursalin/MursalinNav";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import MursalinLoader from '../Mursalin/MursalinLoader'

gsap.registerPlugin(ScrollTrigger);

function About() {
  const eduHead = useRef(null);
  const eduLine1 = useRef(null);
  const eduLine2 = useRef(null);
  const visionHead = useRef(null);
  const visionLine1 = useRef(null);
  const visionLine2 = useRef(null);
  
  const eduSection = useRef(null);
  const visionSection = useRef(null);

  /* ================= EDUCATION HEADER ================= */
  useGSAP(() => {
    // Add null checks to prevent errors
    if (!eduHead.current || !eduLine1.current || !eduLine2.current) return;
    
    const tl = gsap.timeline();
    
    tl.from(eduHead.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    })
    .from([eduLine1.current, eduLine2.current], {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=0.3");
  }, []); // Add empty dependency array

  /* ================= VISION HEADER ================= */
  useGSAP(() => {
    // Add null checks
    if (!visionHead.current || !visionLine1.current || !visionLine2.current) return;
    
    gsap.from(visionHead.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });

    gsap.from([visionLine1.current, visionLine2.current], {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 75%",
        end: "top 35%",
        scrub: 1,
      },
    });
  }, []); // Add empty dependency array

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MursalinLoader />;

  return (
    <div className="w-full min-h-screen flex flex-col bg-black overflow-x-hidden">
      <MursalinNav />

      {/* ================= EDUCATION HEADER ================= */}
      <section className="min-h-[60vh] md:min-h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center gap-4 md:gap-6 px-4 py-8 md:py-12">
        <h1
          ref={eduHead}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-blue-200 text-center leading-tight px-2"
        >
          Education ✒️
        </h1>

        <div
          ref={eduLine1}
          className="w-[75%] sm:w-[65%] md:w-[60%] h-[1.2vh] md:h-[1.5vh] lg:h-[2vh] rounded-full bg-gradient-to-r from-cyan-400 via-green-400 to-lime-300 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
        />
        <div
          ref={eduLine2}
          className="w-[65%] sm:w-[55%] md:w-[50%] h-[1.2vh] md:h-[1.5vh] lg:h-[2vh] rounded-full bg-gradient-to-r from-cyan-400 via-green-400 to-lime-300 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
        />

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 animate-bounce">⬇️⬇️⬇️</span>
      </section>

      {/* ================= EDUCATION VERTICAL SCROLL ================= */}
      <section ref={eduSection} className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <EducationBlock
            title="School"
            year="2010 – 2020"
            img="/scl.jpeg"
            accent="from-cyan-400 to-blue-500"
            desc="Completed my school journey with curiosity and discipline."
            link="https://khsc.edu.bd/"
            index={0}
          />
          <EducationBlock
            title="College"
            year="2020 – 2022"
            img="/clg.jpeg"
            accent="from-green-400 to-emerald-500"
            desc="Where coding became a passion and direction."
            link="https://www.gsctd.edu.bd/"
            index={1}
          />
          <EducationBlock
            title="University"
            year="2022 – Present"
            img="/uni.jpeg"
            accent="from-pink-400 to-red-500"
            desc="Living the engineering dream and leveling up daily."
            link="https://www.ruet.ac.bd/"
            index={2}
          />
        </div>
      </section>

      {/* ================= VISION HEADER ================= */}
      <section className="min-h-[60vh] md:min-h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center gap-4 md:gap-6 px-4 py-8 md:py-12">
        <h1
          ref={visionHead}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-red-200 text-center leading-tight px-2"
        >
          Visions 🔍
        </h1>

        <div
          ref={visionLine1}
          className="w-[75%] sm:w-[65%] md:w-[60%] h-[1.2vh] md:h-[1.5vh] lg:h-[2vh] rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 shadow-[0_0_12px_rgba(251,191,36,0.5)]"
        />
        <div
          ref={visionLine2}
          className="w-[65%] sm:w-[55%] md:w-[50%] h-[1.2vh] md:h-[1.5vh] lg:h-[2vh] rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]"
        />

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 animate-bounce">⬇️⬇️⬇️</span>
      </section>

      {/* ================= VISION VERTICAL SCROLL ================= */}
      <section ref={visionSection} className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <VisionBlock
            title="Currently"
            phase="Web Developer"
            img="/web2.jpeg"
            accent="from-purple-400 to-violet-500"
            desc="Building performant and cinematic web experiences."
            index={0}
          />
          <VisionBlock
            title="Future Aspect"
            phase="AI & ML"
            img="/future_aspect.avif"
            accent="from-orange-400 to-amber-500"
            desc="Exploring AI and intelligent systems."
            index={1}
          />
          <VisionBlock
            title="Destination"
            phase="Research"
            img="/dest.jpeg"
            accent="from-emerald-400 to-teal-500"
            desc="Pushing knowledge through research and discovery."
            index={2}
          />
        </div>
      </section>

      {/* ================= FOOTER SPACER ================= */}
      <div className="h-[8vh] sm:h-[12vh] md:h-[15vh] lg:h-[20vh]" />
    </div>
  );
}

export default About;

/* ================= SHARED COMPONENTS ================= */

function TimelineBlock({ title, subtitle, img, desc, accent, link, index }) {
  const blockRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // Add null checks before animating
    if (!blockRef.current || !textRef.current || !imageRef.current || !lineRef.current) return;
    
    const isEven = index % 2 === 0;

    // Text animation - alternating from left/right
    gsap.from(textRef.current, {
      x: isEven ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: blockRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });

    // Image animation - scale + rotate + opposite direction
    gsap.from(imageRef.current, {
      x: isEven ? 100 : -100,
      scale: 0.8,
      rotation: isEven ? 5 : -5,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: blockRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });

    // Decorative line animation
    gsap.from(lineRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    // Floating animation on scroll
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: blockRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
  }, { dependencies: [index], scope: blockRef }); // Add proper dependencies

  return (
    <div ref={blockRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        
        {/* TEXT CONTENT */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 text-center lg:text-left">
          <h1
            className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r ${accent} bg-clip-text text-transparent leading-tight`}
          >
            {title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-white/70">
            {subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 font-mono leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {desc}
          </p>
        </div>

        {/* IMAGE WITH HOVER BUTTON */}
        <div ref={imageRef} className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
          <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.12)] lg:shadow-[0_0_40px_rgba(255,255,255,0.15)] aspect-[4/3] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-shadow duration-500">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-sm"
              >
                <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-3 md:px-8 md:py-4 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110">
                  Visit
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* DECORATIVE LINE WITH ANIMATED DOTS */}
      <div ref={lineRef} className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
        <div className="relative w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-pulse"
              style={{ 
                left: `${i * 15}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const EducationBlock = (p) => <TimelineBlock {...p} subtitle={p.year} />;
const VisionBlock = (p) => <TimelineBlock {...p} subtitle={p.phase} />;