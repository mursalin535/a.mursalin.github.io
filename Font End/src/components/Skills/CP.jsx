import { OrbitingCircles } from "../ui/orbiting-circles";

function CP() {
  return (
    <div className="relative flex h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full items-center justify-center overflow-hidden bg-black rounded-xl md:rounded-2xl border border-green-500/20">
      
      {/* OUTER ORBIT - Larger icons */}
      <OrbitingCircles iconSize={60} radius={140}>
        <Skill icon={<Icons.c />} name="C" />
        <Skill icon={<Icons.cpp />} name="C++" />
        <Skill icon={<Icons.dsa />} name="DSA" />
        <Skill icon={<Icons.algo />} name="Algorithms" />
      </OrbitingCircles>

      {/* INNER ORBIT - Medium icons */}
      <OrbitingCircles iconSize={45} radius={90} reverse speed={1.8}>
        <Skill icon={<Icons.cpp />} name="C++" small />
        <Skill icon={<Icons.dsa />} name="DSA" small />
      </OrbitingCircles>

    </div>
  );
}

export default CP;

/* ───────────────────────────── */

function Skill({ icon, name, small }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 group select-none">
      <div className="transition duration-300 group-hover:drop-shadow-[0_0_15px_#a78bfa] group-hover:scale-110">
        {icon}
      </div>
      <span
        className={`font-semibold tracking-wider font-mono uppercase transition-all duration-300
        ${small ? "text-xs sm:text-sm opacity-70" : "text-sm sm:text-base opacity-85"}
        text-[#a78bfa] group-hover:opacity-100`}
      >
        {name}
      </span>
    </div>
  );
}

/* ───────────────────────────── */

const Icons = {
  c: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
    </svg>
  ),

  cpp: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM82 57h7v7h7v7h-7v7h-7v-7h-7v-7h7v-7zm28 0h7v7h7v7h-7v7h-7v-7h-7v-7h7v-7z"/>
    </svg>
  ),

  dsa: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <defs>
        <linearGradient id="dsa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B"/>
          <stop offset="100%" stopColor="#C92A2A"/>
        </linearGradient>
      </defs>
      <circle cx="64" cy="20" r="12" fill="url(#dsa-gradient)"/>
      <line x1="64" y1="32" x2="40" y2="52" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="40" cy="60" r="10" fill="url(#dsa-gradient)"/>
      <line x1="40" y1="70" x2="28" y2="88" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="28" cy="96" r="8" fill="url(#dsa-gradient)"/>
      <line x1="40" y1="70" x2="52" y2="88" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="52" cy="96" r="8" fill="url(#dsa-gradient)"/>
      <line x1="64" y1="32" x2="88" y2="52" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="88" cy="60" r="10" fill="url(#dsa-gradient)"/>
      <line x1="88" y1="70" x2="76" y2="88" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="76" cy="96" r="8" fill="url(#dsa-gradient)"/>
      <line x1="88" y1="70" x2="100" y2="88" stroke="url(#dsa-gradient)" strokeWidth="3"/>
      <circle cx="100" cy="96" r="8" fill="url(#dsa-gradient)"/>
    </svg>
  ),

  algo: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <defs>
        <linearGradient id="algo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4"/>
          <stop offset="100%" stopColor="#44A08D"/>
        </linearGradient>
      </defs>
      <rect x="44" y="10" width="40" height="20" rx="10" fill="url(#algo-gradient)"/>
      <line x1="64" y1="30" x2="64" y2="45" stroke="url(#algo-gradient)" strokeWidth="3"/>
      <polygon points="64,50 60,43 68,43" fill="url(#algo-gradient)"/>
      <polygon points="64,55 84,70 64,85 44,70" fill="url(#algo-gradient)"/>
      <line x1="44" y1="70" x2="25" y2="70" stroke="url(#algo-gradient)" strokeWidth="3"/>
      <line x1="25" y1="70" x2="25" y2="95" stroke="url(#algo-gradient)" strokeWidth="3"/>
      <rect x="15" y="95" width="20" height="15" rx="3" fill="url(#algo-gradient)"/>
      <line x1="84" y1="70" x2="103" y2="70" stroke="url(#algo-gradient)" strokeWidth="3"/>
      <line x1="103" y1="70" x2="103" y2="95" stroke="url(#algo-gradient)" strokeWidth="3"/>
      <rect x="93" y="95" width="20" height="15" rx="3" fill="url(#algo-gradient)"/>
    </svg>
  ),
};