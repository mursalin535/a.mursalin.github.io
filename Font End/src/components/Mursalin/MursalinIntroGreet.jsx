import { LayoutTextFlip } from "../ui/layout-text-flip";
import { motion } from "framer-motion";

function MursalinIntroGreet() {
  return (
    <motion.div
      className="flex justify-center gap-2 text-xl sm:text-2xl font-mono"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <LayoutTextFlip words={["Hello,", "Hi,", "Wassup,", "Hey,"]} />
    </motion.div>
  );
}

export default MursalinIntroGreet;
