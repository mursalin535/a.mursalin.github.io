import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MursalinNav from "../Mursalin/MursalinNav";
import Spotlight from "../ui/spotlight";
import HolographicCard from "../ui/3dCard";
import { ChevronLeft, ChevronRight, ExternalLink, Info } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from '../ui/ShinyText';
import MursalinLoader from '../Mursalin/MursalinLoader'

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "My personal site showcasing skills, animations and UI experiments.",
    image: "/protpholio.png",
    liveUrl: "https://your-site.com",
    detailsUrl: "/projects/portfolio",
    tech: ["React", "GSAP", "Tailwind", ' Framer Motion',"Next.js","Express.js","MySQL"],
  },
  {
    id: 2,
    title: "Rental Service",
    description:
      "A Student Accomodation Problem Solver web application.",
    image: "/bariwala.png",
    liveUrl: "https://shop-demo.com",
    detailsUrl: "/projects/bariwala",
    tech: ["Next.js", "Express.js", "MySQL", "Tailwind","React","GSAP","Framer Motion"],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const isAnimating = useRef(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const indicatorRefs = useRef([]);
  const bgParticlesRef = useRef(null);

  const project = projects[index];

  useEffect(() => {
    // Entrance animation for header
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Floating particles animation
    gsap.to(bgParticlesRef.current?.children || [], {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      rotation: "random(-180, 180)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random",
      },
    });

    // Initial card entrance
    gsap.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0, rotationY: -15 },
      { scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, []);

  useEffect(() => {
    // Update indicators
    indicatorRefs.current.forEach((el, i) => {
      gsap.to(el, {
        scale: i === index ? 1.5 : 1,
        backgroundColor: i === index ? "#06b6d4" : "#ffffff40",
        duration: 0.3,
      });
    });
  }, [index]);

  const animateChange = (dir) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline();

    // Exit animation with 3D effect
    tl.to(cardRef.current, {
      x: dir === "next" ? -150 : 150,
      rotationY: dir === "next" ? 25 : -25,
      opacity: 0,
      scale: 0.85,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.call(() => {
      setIndex((prev) =>
        dir === "next"
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
    });

    // Entrance animation
    tl.fromTo(
      cardRef.current,
      {
        x: dir === "next" ? 150 : -150,
        rotationY: dir === "next" ? -25 : 25,
        opacity: 0,
        scale: 0.85,
      },
      {
        x: 0,
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MursalinLoader />;

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <MursalinNav />

      {/* Animated background particles */}
      <div
        ref={bgParticlesRef}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <section className="relative h-[70vh] flex items-center justify-center">
        <Spotlight className="absolute inset-0 z-0" />

        {/* Navigation buttons with glow effect */}
        <button
          onClick={() => animateChange("prev")}
          className="absolute left-6 z-20 p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 group"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, { rotation: -180, duration: 0.3 });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, { rotation: 0, duration: 0.3 });
          }}
        >
          <ChevronLeft size={28} className="text-black" />
        </button>

        {/* Project card */}
        <div ref={cardRef} className="z-10 w-full flex justify-center px-4">
          <HolographicCard className="w-full max-w-md p-6 backdrop-blur-xl bg-black/30 border border-cyan-500/30">
            <div className="relative overflow-hidden rounded-lg mb-5 group">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <h2 className="text-2xl text-white font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {project.title}
            </h2>
            
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack badges */}
            <div className="flex gap-2 mb-5 flex-wrap">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Site <ExternalLink size={16} />
              </a>

              <button
                onClick={() => navigate(project.detailsUrl)}
                className="flex-1 py-3 rounded-lg border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:scale-105 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Know More <Info size={16} />
              </button>
            </div>
          </HolographicCard>
        </div>

        <button
          onClick={() => animateChange("next")}
          className="absolute right-6 z-20 p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 group"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, { rotation: 180, duration: 0.3 });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, { rotation: 0, duration: 0.3 });
          }}
        >
          <ChevronRight size={28} className="text-black" />
        </button>
      </section>

      {/* Project indicators */}
      <div className="flex justify-center gap-3 mb-8">
        {projects.map((_, i) => (
          <button
            key={i}
            ref={(el) => (indicatorRefs.current[i] = el)}
            onClick={() => {
              if (i !== index && !isAnimating.current) {
                animateChange(i > index ? "next" : "prev");
              }
            }}
            className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"
          />
        ))}
      </div>

      {/* Header section */}
      <div
        ref={headerRef}
        className="w-full flex flex-col items-center justify-center mt-12 mb-16"
      >
        <div className="text-4xl mb-4 animate-bounce">⬆️⬆️</div>

        <h1 className="text-6xl font-bold text-white mb-2">
          <ShinyText
            text="My Projects ⚒️"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </h1>

        <div className="text-4xl font-bold">
          <ShinyText
            text="-.-.-.-.-.-.-.-.-.-.-"
            speed={2}
            delay={0}
            color="#ddf20f"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
}