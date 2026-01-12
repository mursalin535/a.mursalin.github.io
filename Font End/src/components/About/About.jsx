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
  const eduArrow = useRef(null);
  
  const visionHead = useRef(null);
  const visionLine1 = useRef(null);
  const visionLine2 = useRef(null);
  const visionArrow = useRef(null);
  
  const eduSection = useRef(null);
  const visionSection = useRef(null);

  /* ================= EDUCATION HEADER - ENHANCED ================= */
  useGSAP(() => {
    if (!eduHead.current || !eduLine1.current || !eduLine2.current) return;
    
    const tl = gsap.timeline();
    
    // Split heading into characters for stagger animation
    const headingText = eduHead.current;
    const chars = headingText.textContent.split('');
    headingText.innerHTML = chars.map(char => 
      char === ' ' ? '<span>&nbsp;</span>' : `<span class="inline-block">${char}</span>`
    ).join('');
    
    tl.from(headingText.querySelectorAll('span'), {
      y: -100,
      opacity: 0,
      rotationX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
    .from(eduLine1.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.3")
    .from(eduLine2.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.7")
    .from(eduArrow.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "bounce.out",
    }, "-=0.3");
  }, []);

  /* ================= VISION HEADER - ENHANCED ================= */
  useGSAP(() => {
    if (!visionHead.current || !visionLine1.current || !visionLine2.current) return;
    
    // Split heading into characters
    const headingText = visionHead.current;
    const chars = headingText.textContent.split('');
    headingText.innerHTML = chars.map(char => 
      char === ' ' ? '<span>&nbsp;</span>' : `<span class="inline-block">${char}</span>`
    ).join('');
    
    gsap.from(headingText.querySelectorAll('span'), {
      y: -100,
      opacity: 0,
      rotationX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(visionLine1.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(visionLine2.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(visionArrow.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: visionHead.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

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

        <span ref={eduArrow} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 animate-bounce">⬇️⬇️⬇️</span>
      </section>

      {/* ================= EDUCATION VERTICAL SCROLL ================= */}
      <section ref={eduSection} className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <EducationBlock
            title="School"
            year="2010 – 2020"
            img="/scl.jpeg"
            accent="from-cyan-400 to-blue-500"
            desc="An exploring, wicked, and carefree kid — I spent most of my time playing, hanging out with friends, and chasing fun. Studying felt like a ghost haunting me, while cartoons, mobile games, and PC games were the holy saviors that kept me safe from it.

But somewhere along the way, I fell in love with technology — the PC itself, the keyboard buttons, the mouse, even the spinning wheel inside the CPU. Those tiny details fascinated me. Science, meanwhile, felt like a roller-coaster ride for little me. Nature’s wonders truly wondered me.

Curiosity slowly took over — how things work, what lies in the unknown, in the air, under the sea, and beyond outer space. All of it became my personal dreamland. That curiosity made physics and math my favorite subjects, and in that innocent mind, I dreamed of becoming a scientist 😄 — a crazy one, running experiments and discovering new things.

I don’t really know how I ended up finishing school with pretty good grades — maybe it was that adventurous mindset, always trying to find excitement and meaning beyond the textbook pages."
            link="https://khsc.edu.bd/"
            index={0}
          />
          <EducationBlock
            title="College"
            year="2020 – 2022"
            img="/clg.jpeg"
            accent="from-green-400 to-emerald-500"
            desc="Rush. No time to breathe. The big war—admission war. Life wasn't smooth; hardships tested me at every turn. Many ups, many downs, countless sleepless nights preparing for the battle ahead. But by the grace of Allah, I never felt defeated. Never gave up. Gave my absolute best to complete the dream that little me had: to study in an engineering university, to become a scientist, to work with research. College was the battleground where discipline met determination, where late-night studies became routine, where friends became warriors fighting the same fight. Those two years forged resilience, patience, and an unbreakable spirit. The dream was clear—engineering university or nothing."
            link="https://www.gsctd.edu.bd/"
            index={1}
          />
          <EducationBlock
            title="University"
            year="2022 – Present"
            img="/uni.jpeg"
            accent="from-pink-400 to-red-500"
            desc="Living the dream. The dream that little me imagined, that teenage me fought for—now it's real. Engineering university life isn't just about academics; it's about evolution. Gaining skills around computer science—web development, competitive programming, algorithms, data structures, system design. But it's more than code. It's about developing character, leadership, teamwork, communication, time management, and resilience. Learning to balance passion projects with academic responsibilities. Building networks, making lifelong friends who share the same fire. Facing challenges that push boundaries—hackathons, tech fests, late-night debugging sessions, project deadlines. University taught me that growth happens outside comfort zones. Every semester is a level up. Every project is a new achievement unlocked. Currently grinding, learning, building, and preparing for what's next—whether it's AI research, cutting-edge development, or innovation that impacts millions. The scientist dream is evolving into something bigger."
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

        <span ref={visionArrow} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 animate-bounce">⬇️⬇️⬇️</span>
      </section>

      {/* ================= VISION VERTICAL SCROLL ================= */}
      <section ref={visionSection} className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <VisionBlock
            title="Currently"
            phase="Web Developer"
            img="/web2.jpeg"
            accent="from-purple-400 to-violet-500"
            desc="Started my development journey from absolute zero—no bootcamp, no mentor, just me, documentation, and countless YouTube tutorials. The path to becoming a full stack developer wasn't easy. Lots of hardships, frustration, and moments where I questioned if I could actually do this. Self-learning meant facing bugs alone at 3 AM, debugging for hours without anyone to ask. It meant reading error messages that felt like a foreign language, building projects that broke a hundred times before they worked. But with every bug fixed, every feature implemented, every project deployed, I grew stronger. Learned React, Node.js, Express, databases, authentication, deployment—piece by piece, project by project. Now I build performant, cinematic web experiences that merge aesthetics with functionality. From struggling with basic HTML/CSS to crafting full-stack applications with GSAP animations, Three.js integrations, and complex backends—the journey transformed me. Self-taught and proud. Still learning, still building, still pushing boundaries."
            index={0}
          />
          <VisionBlock
            title="Future Aspect"
            phase="AI & ML"
            img="/future_aspect.avif"
            accent="from-orange-400 to-amber-500"
            desc="The journey continues. AI and Machine Learning—the next frontier. It's an ongoing process, just like web development was. Started learning the fundamentals: Python, NumPy, Pandas, scikit-learn, TensorFlow. Diving into neural networks, deep learning, natural language processing, computer vision. The goal? To become a specialist in AI just as I am in web development. Combining both worlds—building intelligent web applications, creating AI-powered solutions that solve real problems. Imagine: web apps that learn from user behavior, recommendation systems that actually understand context, chatbots with genuine intelligence, automation that makes life easier. AI isn't just a skill to add—it's a paradigm shift in how we build technology. The same curiosity that drove me through web dev is now pulling me into AI. Reading research papers, implementing algorithms from scratch, experimenting with models, failing, iterating, improving. This isn't a side quest—it's the evolution of my craft. Web development taught me how to build. AI will teach me how to build intelligently."
            index={1}
          />
          <VisionBlock
            title="Destination"
            phase="Research"
            img="/dest.jpeg"
            accent="from-emerald-400 to-teal-500"
            desc="Research. The ultimate destination. The dream that little boy had—becoming a scientist, working with research, exploring the unknown, pushing the boundaries of what's possible. That dream never died; it evolved. Now it's clearer than ever. After mastering web development and diving into AI, the next natural step is research—contributing to knowledge, not just consuming it. Whether it's AI research, human-computer interaction, distributed systems, or something yet undiscovered, the goal is to create impact through innovation. Research means asking questions no one has answered, solving problems no one has solved, building systems that change how we interact with technology. It's about publishing papers, collaborating with brilliant minds, pushing the frontiers of computer science. That little boy who wondered how things worked, who dreamed of being a scientist, is now creating the stairs to reach that dream—step by step, skill by skill, project by project. Web development was the foundation. AI is the next floor. Research is the rooftop where the view is limitless. The journey isn't just about reaching the destination; it's about building the ladder that others can climb too. The dream is alive, and every day I'm one step closer."
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

/* ================= SHARED COMPONENTS - ENHANCED ================= */

function TimelineBlock({ title, subtitle, img, desc, accent, link, index }) {
  const blockRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    if (!blockRef.current || !titleRef.current || !imageRef.current) return;
    
    const isEven = index % 2 === 0;

    // Split title into words for advanced animation
    const titleText = titleRef.current;
    const words = titleText.textContent.split(' ');
    titleText.innerHTML = words.map(word => 
      `<span class="inline-block mr-2">${word}</span>`
    ).join('');

    const wordSpans = titleText.querySelectorAll('span');

    // Timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blockRef.current,
        start: "top 75%",
        end: "top 25%",
        toggleActions: "play none none reverse",
      }
    });

    // Title animation - 3D perspective effect
    tl.from(wordSpans, {
      y: 100,
      opacity: 0,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
    // Subtitle animation - slide and fade
    .from(subtitleRef.current, {
      x: isEven ? -80 : 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    // Description animation - typewriter effect simulation
    .from(descRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    // Image animation - complex entrance
    gsap.from(imageRef.current, {
      scale: 0.7,
      rotation: isEven ? -15 : 15,
      x: isEven ? 150 : -150,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
      scrollTrigger: {
        trigger: blockRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    // Overlay animation
    if (overlayRef.current) {
      gsap.from(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Decorative line with wave effect
    gsap.from(lineRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Dots sequential animation
    if (dotsRef.current) {
      const dots = dotsRef.current.querySelectorAll('.dot');
      gsap.from(dots, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Parallax floating effect
    gsap.to(imageRef.current, {
      y: -30,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Glow pulse effect on image
    gsap.to(imageRef.current, {
      boxShadow: "0 0 60px rgba(255,255,255,0.4)",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

  }, { dependencies: [index], scope: blockRef });

  return (
    <div ref={blockRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        
        {/* TEXT CONTENT - ENHANCED */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 text-center lg:text-left">
          <h1
            ref={titleRef}
            className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r ${accent} bg-clip-text text-transparent leading-tight perspective-1000`}
          >
            {title}
          </h1>
          <h2 
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-white/70 tracking-wider"
          >
            {subtitle}
          </h2>
          <p 
            ref={descRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 font-mono leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            {desc}
          </p>
        </div>

        {/* IMAGE WITH ENHANCED HOVER - 3D EFFECT */}
        <div ref={imageRef} className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
          <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.12)] lg:shadow-[0_0_40px_rgba(255,255,255,0.15)] aspect-[4/3] hover:shadow-[0_0_80px_rgba(255,255,255,0.35)] transition-all duration-700 transform-gpu hover:scale-[1.05]">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-3 group-hover:brightness-110"
            />
            {link && (
              <a
                ref={overlayRef}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-md"
              >
                <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-3 md:px-8 md:py-4 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-125 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Visit
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* DECORATIVE LINE WITH ANIMATED DOTS - ENHANCED */}
      <div ref={lineRef} className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
        <div className="relative w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent">
          <div ref={dotsRef}>
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className="dot absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse"
                style={{ 
                  left: `${i * 15}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const EducationBlock = (p) => <TimelineBlock {...p} subtitle={p.year} />;
const VisionBlock = (p) => <TimelineBlock {...p} subtitle={p.phase} />;