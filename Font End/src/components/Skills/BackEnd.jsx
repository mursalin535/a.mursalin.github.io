import { OrbitingCircles } from "../ui/orbiting-circles";

function BackEnd() {
  return (
    <div className="relative flex h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full items-center justify-center overflow-hidden bg-black rounded-xl md:rounded-2xl border border-red-500/20">
      
      {/* OUTER ORBIT - Larger icons */}
      <OrbitingCircles iconSize={60} radius={140}>
        <Skill icon={<Icons.node />} name="Node.js" />
        <Skill icon={<Icons.express />} name="Express" />
        <Skill icon={<Icons.mysql />} name="MySQL" />
        <Skill icon={<Icons.restapi />} name="REST API" />
      </OrbitingCircles>

      {/* INNER ORBIT - Medium icons */}
      <OrbitingCircles iconSize={45} radius={90} reverse speed={1.8}>
        <Skill icon={<Icons.node />} name="Node.js" small />
        <Skill icon={<Icons.express />} name="Express" small />
      </OrbitingCircles>

    </div>
  );
}

export default BackEnd;

/* ───────────────────────────── */

function Skill({ icon, name, small }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 group select-none">
      <div className="transition duration-300 group-hover:drop-shadow-[0_0_15px_#ff6b6b] group-hover:scale-110">
        {icon}
      </div>
      <span
        className={`font-semibold tracking-wider font-mono uppercase transition-all duration-300
        ${small ? "text-xs sm:text-sm opacity-70" : "text-sm sm:text-base opacity-85"}
        text-[#ff6b6b] group-hover:opacity-100`}
      >
        {name}
      </span>
    </div>
  );
}

/* ───────────────────────────── */

const Icons = {
  node: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828V42.539c0-.401-.331-.734-.748-.734h-3.239c-.416 0-.748.333-.748.734v50.726c0 3.919-4.071 7.832-10.684 4.526l-12.304-7.087c-.257-.145-.423-.404-.423-.682V38.407c0-.278.166-.537.423-.682l43.863-25.417c.252-.145.577-.145.828 0l43.929 25.417c.257.145.423.404.423.682v51.142c0 .278-.166.537-.423.682l-43.929 25.417c-.252.145-.577.145-.828 0l-11.172-6.592c-.231-.144-.521-.169-.749-.063-2.848 1.609-3.413 1.823-6.103 2.769-.233.084-.558.247.171.697l14.527 8.59c1.389.827 2.982 1.236 4.598 1.236 1.616 0 3.209-.409 4.598-1.236l43.929-25.417c2.869-1.66 4.953-4.764 4.953-8.083V38.407c0-3.319-2.084-6.423-4.954-8.073z"/>
    </svg>
  ),

  express: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#fff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08z"/>
    </svg>
  ),

  mysql: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <path fill="#00758F" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197z"/>
      <path fill="#E48E00" d="M116.427 90.458c3-10 3-50 0-60h-10c-3 10-3 50 0 60h10z"/>
    </svg>
  ),

  restapi: () => (
    <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg">
      <defs>
        <linearGradient id="api-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667EEA"/>
          <stop offset="100%" stopColor="#764BA2"/>
        </linearGradient>
      </defs>
      <rect x="10" y="20" width="108" height="88" rx="8" fill="url(#api-gradient)" opacity="0.9"/>
      <line x1="30" y1="40" x2="50" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <line x1="30" y1="64" x2="50" y2="64" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <line x1="30" y1="88" x2="50" y2="88" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="64" cy="40" r="8" fill="#fff"/>
      <circle cx="64" cy="64" r="8" fill="#fff"/>
      <circle cx="64" cy="88" r="8" fill="#fff"/>
      <line x1="78" y1="40" x2="98" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <line x1="78" y1="64" x2="98" y2="64" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
      <line x1="78" y1="88" x2="98" y2="88" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
};