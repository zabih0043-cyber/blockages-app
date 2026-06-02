import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// 5 logical nodes; steps 2-7 all map to the "Questions" node
const LOGICAL_STEPS = [
  { id: 0, label: "Welcome",   steps: [0] },
  { id: 1, label: "Details",   steps: [1] },
  { id: 2, label: "Questions", steps: [2, 3, 4, 5, 6, 7] },
  { id: 3, label: "Review",    steps: [8] },
  { id: 4, label: "Results",   steps: [9] },
];

function getLogicalStep(currentStep) {
  return LOGICAL_STEPS.findIndex((ls) => ls.steps.includes(currentStep));
}

function getSectionProgress(currentStep) {
  if (currentStep >= 2 && currentStep <= 7) return currentStep - 1; // 1-6
  return null;
}

export default function ProgressTracker({ currentStep }) {
  const logicalStep = getLogicalStep(currentStep);
  const sectionNum = getSectionProgress(currentStep);
  const progress = (logicalStep / (LOGICAL_STEPS.length - 1)) * 100;

  return (
    <div className="w-full px-2">
      {/* Mobile: progress bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">
            {LOGICAL_STEPS[logicalStep]?.label}
            {sectionNum !== null && (
              <span className="ml-1 text-primary font-semibold">{sectionNum}/6</span>
            )}
          </span>
          <span className="text-xs font-medium text-primary">
            {logicalStep}/{LOGICAL_STEPS.length - 1}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Desktop: dot steps */}
      <div className="hidden md:flex items-center justify-between relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted" />
        <motion.div
          className="absolute top-4 left-0 h-0.5 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {LOGICAL_STEPS.map((ls) => {
          const isComplete = logicalStep > ls.id;
          const isCurrent = logicalStep === ls.id;

          return (
            <div key={ls.id} className="flex flex-col items-center relative z-10">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                  isComplete && "bg-primary text-primary-foreground",
                  isCurrent && "bg-primary text-primary-foreground ring-4 ring-accent",
                  !isComplete && !isCurrent && "bg-muted text-muted-foreground"
                )}
              >
                {isComplete ? <Check className="h-4 w-4" /> : ls.id + 1}
              </div>
              <span
                className={cn(
                  "text-[10px] mt-1.5 font-medium transition-colors text-center",
                  isCurrent ? "text-primary" : "text-muted-foreground"
                )}
              >
                {ls.label}
                {isCurrent && sectionNum !== null && (
                  <span className="block text-[9px] text-primary/70">{sectionNum}/6</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
