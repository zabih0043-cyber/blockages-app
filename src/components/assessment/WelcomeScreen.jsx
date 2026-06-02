import { motion } from "framer-motion";
import { ArrowRight, Layers, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import enableGLogo from "@/assets/enableg-logo-transparent.png";

export default function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img
          src={enableGLogo}
          alt="Enable G Logo"
          className="w-40 sm:w-48 mx-auto mb-2"
        />
        <p className="text-primary font-semibold text-sm mt-1 tracking-widest uppercase">
          Blockage Assessment
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed mb-8"
      >
        Discover what's holding you back. This assessment identifies your primary
        blockage type and gives you a clear, personalised path forward.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg w-full mb-10"
      >
        <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
          <Clock className="h-5 w-5 text-primary flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="text-sm font-semibold">5–8 mins</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
          <Target className="h-5 w-5 text-primary flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Questions</p>
            <p className="text-sm font-semibold">20 questions</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
          <Layers className="h-5 w-5 text-primary flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Format</p>
            <p className="text-sm font-semibold">6 areas</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          size="lg"
          onClick={onStart}
          className="px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Start Assessment
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      <p className="text-[11px] text-muted-foreground mt-8 max-w-sm">
        This isn't about labelling yourself — it's about finding direction.
        Identify faster, act sooner, stay unstuck. All responses are kept private.
      </p>
    </motion.div>
  );
}
