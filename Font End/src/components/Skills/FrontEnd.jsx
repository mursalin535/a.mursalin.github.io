import { OrbitingCircles } from "../ui/orbiting-circles";

function FrontEnd() {
  return (
    <div className="relative flex h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full items-center justify-center overflow-hidden bg-black rounded-xl md:rounded-2xl border border-blue-500/20">
      
      {/* OUTER ORBIT - Larger icons */}
      <OrbitingCircles iconSize={60} radius={140}>
        <Skill icon={<Icons.react />} name="React" />
        <Skill icon={<Icons.nextjs />} name="Next.js" />
        <Skill icon={<Icons.tailwind />} name="Tailwind" />
        <Skill icon={<Icons.javascript />} name="JavaScript" />
      </OrbitingCircles>

      {/* INNER ORBIT - Medium icons */}
      <OrbitingCircles iconSize={45} radius={90} reverse speed={1.8}>
        <Skill icon={<Icons.html />} name="HTML" small />
        <Skill icon={<Icons.css />} name="CSS" small />
        <Skill icon={<Icons.gsap />} name="GSAP" small />
      </OrbitingCircles>

    </div>
  );
}

export default FrontEnd;

/* ───────────────────────────── */

function Skill({ icon, name, small }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 group select-none">
      <div className="transition duration-300 group-hover:drop-shadow-[0_0_15px_#00ff9c] group-hover:scale-110">
        {icon}
      </div>
      <span
        className={`font-semibold tracking-wider font-mono uppercase transition-all duration-300
        ${small ? "text-xs sm:text-sm opacity-70" : "text-sm sm:text-base opacity-85"}
        text-[#00ff9c] group-hover:opacity-100`}
      >
        {name}
      </span>
    </div>
  );
}

/* ───────────────────────────── */

const Icons = {
  react: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <circle cx="64" cy="64" r="11.4" fill="#00D8FF"/>
      <ellipse cx="64" cy="64" rx="44" ry="16" fill="none" stroke="#00D8FF" strokeWidth="3"/>
      <ellipse cx="64" cy="64" rx="44" ry="16" transform="rotate(60 64 64)" fill="none" stroke="#00D8FF" strokeWidth="3"/>
      <ellipse cx="64" cy="64" rx="44" ry="16" transform="rotate(120 64 64)" fill="none" stroke="#00D8FF" strokeWidth="3"/>
    </svg>
  ),

  nextjs: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <circle cx="64" cy="64" r="60" fill="#000"/>
      <path d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z" fill="#fff"/>
      <path d="M81.778 38.4h8.614v51.2h-8.614z" fill="#fff"/>
    </svg>
  ),

  tailwind: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/>
    </svg>
  ),

  javascript: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#F0DB4F" d="M2 2h124v124H2z"/>
      <path fill="#323330" d="M67.83 81.417c1.462 2.39 3.369 4.145 6.736 4.145 2.832 0 4.635-1.415 4.635-3.369 0-2.34-1.857-3.167-4.974-4.531l-1.709-.732c-4.943-2.107-8.225-4.746-8.225-10.32 0-5.139 3.914-9.053 10.03-9.053 4.354 0 7.482 1.514 9.733 5.481l-5.33 3.418c-1.173-2.107-2.438-2.938-4.403-2.938-2.002 0-3.271 1.27-3.271 2.938 0 2.056 1.27 2.887 4.199 4.162l1.709.732c5.823 2.496 9.105 5.052 9.105 10.783 0 6.18-4.857 9.549-11.379 9.549-6.377 0-10.499-3.039-12.521-7.026l5.665-3.238zm-29.209.284c1.086 1.926 2.069 3.549 4.438 3.549 2.266 0 3.697-.886 3.697-4.325V58.07h6.955v22.938c0 7.126-4.174 10.373-10.268 10.373-5.505 0-8.694-2.854-10.329-6.284l5.507-3.38z"/>
    </svg>
  ),

  html: () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 drop-shadow-lg">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#FFF" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),

  css: () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 drop-shadow-lg">
      <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26z"/>
      <path fill="#33A9DC" d="M64 28.063v91.811l29.164-8.084 6.842-76.655z"/>
      <path fill="#fff" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#EBEBEB" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),

  gsap: () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 drop-shadow-lg">
      <defs>
        <linearGradient id="gsap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#88CE02"/>
          <stop offset="100%" stopColor="#0AE448"/>
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="60" fill="url(#gsap-gradient)"/>
      <path d="M45 85V43h10v32h20v10H45zm30-42h10l15 42h-11l-3-9H71l-3 9H57l15-42zm5 24h8l-4-12-4 12z" fill="#000"/>
    </svg>
  ),
};