import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Vortex } from "../ui/vortex";
import { Link, useLocation } from "react-router-dom";

const navLinks = ["mursalin", "skills", "about", "projects", "contact"];

function MursalinNav() {
  const orbFloatRef = useRef(null);
  const orbContainerRef = useRef(null);
  const linkRefs = useRef({});
  const location = useLocation();
  const orbAnimationRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particleCount, setParticleCount] = useState(80);

  // Optimized responsive particles with debounce
  useEffect(() => {
    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width < 640) {
          setParticleCount(30);
        } else if (width < 768) {
          setParticleCount(40);
        } else if (width < 1024) {
          setParticleCount(60);
        } else {
          setParticleCount(80);
        }
      }, 150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP animations
  useGSAP(() => {
    if (!orbContainerRef.current || !orbFloatRef.current) return;

    gsap.fromTo(
      orbContainerRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    orbAnimationRef.current = gsap.to(orbFloatRef.current, {
      x: "100%",
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  // Memoized handlers for performance
  const handleMouseEnter = useCallback((link) => {
    if (!orbFloatRef.current || !orbContainerRef.current) return;

    gsap.killTweensOf(orbFloatRef.current);

    const target = linkRefs.current[link];
    if (!target) return;

    const container = orbContainerRef.current.getBoundingClientRect();
    const rect = target.getBoundingClientRect();

    gsap.to(orbFloatRef.current, {
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top + rect.height / 2,
      scale: 1.5,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!orbFloatRef.current) return;

    gsap.to(orbFloatRef.current, {
      scale: 1,
      duration: 0.3,
      onComplete: () => {
        gsap.to(orbFloatRef.current, {
          x: "100%",
          duration: 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Memoized nav items
  const navItems = useMemo(() => 
    navLinks.map((link) => {
      const path = `/${link}`;
      const isActive = location.pathname === path;
      return { link, path, isActive };
    }), 
    [location.pathname]
  );

  return (
    <>
      {/* STICKY WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4 bg-gradient-to-b from-black via-black/95 to-transparent">
        {/* VISUAL CONTAINER */}
        <div
          ref={orbContainerRef}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl flex items-center justify-between p-3 sm:p-4 w-full max-w-7xl mx-auto shadow-cyan-glow border border-white/30 backdrop-blur-lg bg-black/40"
        >
          <Vortex
            rangeY={20}
            particleCount={particleCount}
            baseHue={210}
            className="absolute inset-0 -z-10"
          />

          {/* LOGO/BRAND (Optional - you can add your logo here) */}
          <div className="md:hidden text-white font-bold text-lg z-10">
            M.
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex z-10 w-full justify-center">
            <ul className="flex items-center space-x-4 lg:space-x-8 text-white font-mono text-base lg:text-lg">
              {navItems.map(({ link, path, isActive }) => (
                <li
                  key={link}
                  ref={(el) => (linkRefs.current[link] = el)}
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "bg-green-400/20 text-green-300" 
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <Link to={path} className="capitalize">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-10 text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* FLOATING ORB */}
          <div
            ref={orbFloatRef}
            className="hidden md:block absolute top-1/2 -left-7 -translate-y-1/2 h-12 w-12 lg:h-14 lg:w-14 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.9), rgba(59,130,246,0.2))",
              filter: "blur(20px)",
              boxShadow: "0 0 40px rgba(34,211,238,0.8)",
            }}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex items-center justify-center md:hidden"
          onClick={closeMenu}
        >
          <nav onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col space-y-6 text-white text-2xl sm:text-3xl font-mono">
              {navItems.map(({ link, path, isActive }) => (
                <li 
                  key={link} 
                  onClick={closeMenu}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-green-400/20 text-green-300 scale-110" 
                      : "hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <Link to={path} className="capitalize block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* SPACER to prevent content from being hidden under fixed nav */}
      <div className="h-16 sm:h-20 md:h-24" />
    </>
  );
}

export default MursalinNav;