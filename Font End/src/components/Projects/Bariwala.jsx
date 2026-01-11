import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { 
  Home, 
  Users, 
  Search, 
  Shield,
  MessageCircle,
  MapPin,
  Star,
  CheckCircle,
  Heart
} from "lucide-react";
import MursalinNav from "../Mursalin/MursalinNav";

function Bariwala() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Simple title animation without ScrollTrigger
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const features = [
    { icon: Users, title: "Dual Accounts", desc: "Separate for students & owners" },
    { icon: Search, title: "Smart Search", desc: "Filter by price, location & more" },
    { icon: Shield, title: "Verified Listings", desc: "All properties are verified" },
    { icon: MessageCircle, title: "Direct Chat", desc: "Talk directly with owners" },
    { icon: MapPin, title: "Location Map", desc: "See properties on map" },
    { icon: Star, title: "Reviews", desc: "Rate and review experiences" }
  ];

  const journey = [
    { title: "Research", desc: "Talked to students to understand needs" },
    { title: "Design", desc: "Created simple, clean interface" },
    { title: "Build", desc: "Developed full-stack application" },
    { title: "Launch", desc: "Tested with real users" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <MursalinNav />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
            <Home className="w-8 h-8 text-yellow-600" />
          </div>
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Bariwala
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Helping students find safe, affordable accommodation. 
          Connecting them with verified property owners.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Students", "Owners", "Verified", "Safe", "Affordable"].map((tag, i) => (
            <span 
              key={i}
              className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Problem</h2>
            <p className="text-gray-600 mb-6">
              Students moving to new cities struggle to find good accommodation. 
              They face high prices, unverified listings, and safety concerns.
            </p>
            <ul className="space-y-3">
              {["Overpriced rooms", "No safety guarantee", "Poor communication", "Hidden costs"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-yellow-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h2>
            <p className="text-gray-600 mb-6">
              Bariwala makes finding accommodation easy and safe for students, 
              while helping owners find reliable tenants.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Verified properties</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Direct communication</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Features
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-yellow-100 mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Journey
        </h2>

        <div className="space-y-8">
          {journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-700 font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16 p-8 bg-yellow-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Skills I Developed
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Full-Stack Dev", "UI/UX Design", "User Research", 
              "Database Design", "API Development", "Project Management"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-6 text-center bg-yellow-600 text-white">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Building for Real Impact
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Bariwala showed me how technology can solve real problems. 
            Seeing students find their perfect home is what makes it all worth it.
          </p>
          <div className="text-xl font-semibold">
            More features coming soon!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center bg-gray-800 text-gray-300">
        <p>
          Made with care | Bariwala Project
        </p>
      </footer>
    </div>
  );
}

export default Bariwala;