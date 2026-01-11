import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import MursalinNav from "../Mursalin/MursalinNav";
import { 
  Code2, 
  Rocket, 
  Bug, 
  Brain, 
  Zap, 
  Layers,
  Cpu,
  Terminal,
  Sparkles,
  Target
} from "lucide-react";

function Portfolio() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Title animation with glitch effect
    gsap.fromTo(titleRef.current,
      { 
        y: 100,
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      }
    );

    // Grid background animation
    const gridItems = gridRef.current?.children;
    if (gridItems) {
      gsap.fromTo(gridItems,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.03,
          duration: 1,
          stagger: 0.02,
          ease: "power2.out"
        }
      );
    }

    // Moving glow effect
    gsap.to(glowRef.current, {
      x: "100%",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const learnings = [
    { icon: Bug, title: "Debugging Mastery", desc: "Learned to systematically hunt down and fix complex bugs" },
    { icon: Brain, title: "Problem Solving", desc: "Transformed obstacles into learning opportunities" },
    { icon: Layers, title: "Architecture Design", desc: "Designed scalable, maintainable project structure" },
    { icon: Zap, title: "Performance Optimization", desc: "Made critical optimizations for better user experience" },
    { icon: Terminal, title: "CLI & Tools", desc: "Mastered development tools and command line" },
    { icon: Cpu, title: "Technical Depth", desc: "Gained deep understanding of core concepts" }
  ];

  const stats = [
    { value: "500+", label: "Hours Coding", color: "text-cyan-400" },
    { value: "100+", label: "Bugs Fixed", color: "text-purple-400" },
    { value: "50+", label: "Components Built", color: "text-green-400" },
    { value: "∞", label: "Lessons Learned", color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <MursalinNav />

      {/* Animated Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-1 opacity-5 pointer-events-none"
      >
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="bg-cyan-500/20 rounded-[1px]"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20">
        {/* Glow Effect */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" ref={glowRef}></div>

        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-12 h-12" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-500"
              ></motion.div>
            </div>
          </motion.div>

          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            PORTFOLIO PROJECT
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            My first full-stack journey where theory met practice. 
            A proving ground for everything I learned, executed with passion and precision.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 font-semibold"
          >
            <Rocket className="w-5 h-5" />
            <span>Launch Pad to Mastery</span>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Journey */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Target className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold">The Transformation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-cyan-300">From Theory to Reality</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                This project was my crucible. Every line of code was a battle, 
                every bug a puzzle, every error a lesson. I took fragmented knowledge 
                and forged it into a cohesive, functional application.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The process taught me more than any tutorial could. I learned to read 
                between the lines of error messages, to think in systems rather than 
                isolated components, and to embrace the iterative nature of true craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-green-400 font-mono">Active: Learning Mode</span>
                  </div>
                  <div className="h-px bg-gray-800"></div>
                  <div className="font-mono text-sm">
                    {`> `}<span className="text-cyan-400">const</span> lessons = {`{`}
                    <div className="ml-4">
                      <div><span className="text-yellow-300">debugging</span>: <span className="text-green-400">"mastered"</span>,</div>
                      <div><span className="text-yellow-300">architecture</span>: <span className="text-green-400">"understood"</span>,</div>
                      <div><span className="text-yellow-300">perseverance</span>: <span className="text-green-400">"unlocked"</span></div>
                    </div>
                    {`}`}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Skills Forged in Fire</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative mb-8">
              <div className="text-6xl opacity-10 font-bold">🚀</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  The Beginning, Not The End
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              This portfolio was more than a project—it was my awakening. 
              It transformed me from someone who knew concepts to someone who could build systems. 
              The bugs, the late nights, the breakthroughs—they all contributed to a fundamental 
              shift in how I approach technology.
            </p>
            
            <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-lg cursor-pointer hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-shadow">
              Ready for the Next Challenge
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-900">
        <p className="text-gray-500">
          Built with grit and curiosity | Portfolio v1.0
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;