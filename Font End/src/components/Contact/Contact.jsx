import ContactBG from "./ContactBG";
import MursalinNav from "../Mursalin/MursalinNav";
import { TypingAnimation } from "../ui/typing-animation";
import MursalinLoader from '../Mursalin/MursalinLoader'
import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DirectContactServer from '../../server/DirectContactServer' 

function Contact() {
  const [btn, setBtn] = useState("social");

  const left = useRef(null);
  const right = useRef(null);

  const name = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const address = useRef(null);
  const msg = useRef(null);

  function onSubmitt(e){
    e.preventDefault();

    DirectContactServer(
      name.current.value,
      email.current.value,
      number.current.value,
      address.current.value,
      msg.current.value
    );
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(left.current, {
      y: 80,
      opacity: 0,
      duration: 1.1,
    }).from(
      right.current,
      {
        y: 80,
        opacity: 0,
        duration: 1.1,
      },
      "-=0.6"
    );
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MursalinLoader />;

  return (
    <ContactBG>
      <div className="w-full">
        <MursalinNav />
      </div>

      <div
        className="
          flex flex-col lg:flex-row
          items-center justify-center
          gap-10 md:gap-14 lg:gap-28
          px-4 sm:px-8 lg:px-16
          flex-1
        "
      >
        {/* LEFT CARD */}
        <div
          ref={left}
          className="
            w-full max-w-[420px] lg:max-w-[460px]
            bg-gradient-to-b from-[#0a192f]/70 to-[#020617]/80
            backdrop-blur-xl
            border border-cyan-400/30
            rounded-3xl
            shadow-[0_0_50px_rgba(56,189,248,0.3)]
            p-6 sm:p-8
            flex flex-col items-center
            transition-transform duration-500
            hover:scale-[1.03]
          "
        >
          <div className="aspect-square w-48 sm:w-56 md:w-64 rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_30px_rgba(56,189,248,0.9)]">
            <img
              src="me2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mt-6 font-mono font-bold text-center text-[clamp(1.8rem,3vw,3rem)] text-cyan-300">
            Afiujjaman Mursalin
          </h2>

          <p className="mt-6 text-center font-mono text-white/80 text-[clamp(1rem,2.2vw,1.5rem)]">
            Full Stack Web Developer <br />
            Competitive Programmer <br />
            Tech Enthusiast
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div
          ref={right}
          className="
            w-full max-w-4xl
            flex flex-col
            justify-center
          "
        >
          <h1
            className="
              font-mono font-bold
              text-[clamp(2.2rem,4vw,4.5rem)]
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-green-200 to-purple-500
              drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]
            "
          >
            <TypingAnimation>
              Wanna Get In Touch With Me?
            </TypingAnimation>
          </h1>

          <p className="mt-6 max-w-2xl font-mono text-white/80 text-[clamp(1rem,2vw,1.4rem)]">
            Let's collaborate, innovate, and build something meaningful together.
            I'm always open to projects, ideas, and opportunities to grow.
          </p>

          {/* TOGGLE */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => setBtn("social")}
              className={`px-6 py-3 rounded-xl font-mono text-xl transition-all
                ${
                  btn === "social"
                    ? "text-cyan-300 bg-cyan-400/10 shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                    : "text-white/60 hover:text-cyan-200"
                }`}
            >
              Social Media
            </button>

            <button
              onClick={() => setBtn("direct")}
              className={`px-6 py-3 rounded-xl font-mono text-xl transition-all
                ${
                  btn === "direct"
                    ? "text-purple-300 bg-purple-500/10 shadow-[0_0_20px_rgba(147,51,234,0.7)]"
                    : "text-white/60 hover:text-purple-300"
                }`}
            >
              Direct Contact
            </button>
          </div>

          {/* CONTENT */}
          {btn === "social" ? (
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 gap-10">
              <a href="https://www.facebook.com/afiujjaman.mursalin.2025" target="_blank" rel="noreferrer">
                <FaFacebook className="icon text-cyan-300" />
              </a>
              <a href="https://www.instagram.com/murs.alin105/" target="_blank" rel="noreferrer">
                <FaInstagram className="icon text-pink-400" />
              </a>
              <a href="https://wa.me/8801841258255" target="_blank" rel="noreferrer">
                <FaWhatsapp className="icon text-green-400" />
              </a>
              <a href="https://www.linkedin.com/in/afiujjaman/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon text-blue-400" />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                <FaGithub className="icon text-gray-300" />
              </a>
            </div>
          ) : (
            <form className="mt-10 w-full max-w-2xl flex flex-col gap-5 font-mono">
              {[
                { label: "Name", ref: name },
                { label: "Email address", ref: email },
                { label: "Phone Number", ref: number },
                { label: "Current Address", ref: address }
              ].map((field) => (
                <input
                  key={field.label}
                  placeholder={field.label}
                  ref={field.ref}
                  className="bg-transparent border border-white/10 rounded-xl p-4 text-lg focus:outline-none focus:border-cyan-400/50"
                />
              ))}
              <textarea
                rows={4}
                ref={msg}
                placeholder="Work Description"
                className="bg-transparent border border-white/10 rounded-xl p-4 text-lg focus:outline-none focus:border-purple-400/50"
              />
              <button
                type="submit"
                onClick={(e) => onSubmitt(e)}
                className="mt-4 py-4 rounded-xl text-xl font-bold text-cyan-300 bg-cyan-400/10 hover:scale-105 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* icon base style */}
      <style>
        {`
          .icon {
            font-size: 2.5rem;
            transition: transform .3s, filter .3s;
          }
          .icon:hover {
            transform: scale(1.25);
            filter: drop-shadow(0 0 15px currentColor);
          }
        `}
      </style>
    </ContactBG>
  );
}

export default Contact;