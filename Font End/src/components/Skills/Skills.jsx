'use client'

import MursalinNav from "../Mursalin/MursalinNav";
import skillVideo from "../../../public/skillLanding.mp4";

import { AuroraText } from "../ui/aurora-text";
import { WavyBackground } from "../ui/wavy-background";
import { EncryptedText } from "../ui/encrypted-text";
import FuzzyText from "../ui/FuzzyText";

import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import CP from './CP';
import Wishlist from "./Wishlist";
import { useRef, forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import MursalinLoader from '../Mursalin/MursalinLoader'

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const vdo = useRef(null);
  const skill = useRef(null);
  const web = useRef(null);
  const cp = useRef(null);
  const wish = useRef(null);

  useGSAP(() => {
    // Hero animations
    const tl = gsap.timeline();

    tl.from(skill.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .from(vdo.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    }, "-=0.6");

    // Scroll-triggered card animations
    gsap.from(web.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: web.current,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
      }
    });

    gsap.from(cp.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cp.current,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
      }
    });

    gsap.from(wish.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wish.current,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
      }
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MursalinLoader />;

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <MursalinNav />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
        <video
          ref={vdo}
          src={skillVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-50 object-[50%_20%]"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          <h1 className="font-extrabold" ref={skill}>
            <span className="block text-[clamp(2.5rem,8vw,8rem)] leading-tight">
              <AuroraText>Skills</AuroraText>
            </span>
          </h1>

          <div className="max-w-3xl mx-auto px-2">
            <EncryptedText
              text="Explore, experiment, and excel—every skill you acquire expands your horizon and potential."
              encryptedClassName="text-neutral-500 font-mono text-xs sm:text-sm md:text-base lg:text-lg"
              revealedClassName="text-white font-mono text-xs sm:text-sm md:text-base lg:text-lg"
              revealDelayMs={40}
            />
          </div>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 w-full h-[15vh] sm:h-[20vh] opacity-20 md:opacity-30">
          <WavyBackground colors={["#00FFFF", "#FF00FF", "#FFFF00"]} />
        </div>
        <div className="absolute bottom-0 w-full h-[4vh] sm:h-[6vh] bg-black" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* ================= WEB DEV ================= */}
        <SkillCard
          ref={web}
          title="Web Development"
          description="After ups and downs, I became a full stack developer — self-taught, obsessed, struggling, but deeply in love with tech creation."
          color="blue"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-3 sm:mb-4">Front End</h3>
              <FrontEnd />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-400 mb-3 sm:mb-4">Back End</h3>
              <BackEnd />
            </div>
          </div>
        </SkillCard>

        {/* ================= CP ================= */}
        <SkillCard
          ref={cp}
          title="CP"
          description="I started clueless, learned C and C++, mastered DSA and algorithms, embraced CP, and discovered curiosity, joy, and growth."
          color="green"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-green-500 mb-4 sm:mb-6">CP Skills</h3>
          <CP />
        </SkillCard>

        {/* ================= WISHLIST ================= */}
        <SkillCard
          ref={wish}
          title="Wish List"
          description="Future-focused skills I'm actively exploring to push boundaries and evolve as an engineer."
          color="orange"
        >
          <Wishlist />
        </SkillCard>
      </section>

      {/* Footer spacing */}
      <div className="h-[8vh] sm:h-[12vh] md:h-[16vh]" />
    </div>
  );
}

export default Skills;

/* ================= REUSABLE CARD ================= */

const SkillCard = forwardRef(({ title, description, color, children }, ref) => {
  const colorMap = {
    blue: "from-blue-900 via-blue-800 to-blue-700",
    green: "from-purple-900 via-purple-800 to-purple-700",
    orange: "from-teal-900 via-teal-800 to-teal-700",
  };

  

  return (
    <div ref={ref} className={`relative rounded-2xl md:rounded-3xl bg-gradient-to-b ${colorMap[color]} overflow-hidden transform transition-all duration-300 hover:scale-[1.01]`}>
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6 md:space-y-8 scale-80">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.4}>
          "{title}"
        </FuzzyText>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed font-mono">
          {description}
        </p>

        {children}
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';