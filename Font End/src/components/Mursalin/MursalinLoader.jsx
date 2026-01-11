import { motion } from "framer-motion";

function MursalinLoader() {
  return (
    <div className="grid place-content-center min-h-dvh bg-black">
      <motion.div
        className="flex gap-2"
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-10 w-2 rounded bg-cyan-400 shadow-[0_0_12px_#0ff]"
            variants={{
              initial: { scaleY: 0.4, opacity: 0.5 },
              animate: {
                scaleY: 1,
                opacity: 1,
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 0.8,
                  ease: "easeInOut",
                },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default MursalinLoader;
