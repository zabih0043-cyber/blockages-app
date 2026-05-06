import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryLow,
  Brain,
  CheckCircle2,
  RotateCcw,
  Shield,
  Shuffle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BLOCKAGE_TYPES,
  calculateResults,
  MIXED_TYPES,
} from "../../lib/assessmentData";
import RadarChartSection from "./RadarChartSection";

const TYPE_ICONS = {
  A: Brain,
  B: BatteryLow,
  C: Shuffle,
  D: Shield,
};

const TYPE_COLORS = {
  A: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    icon: "text-blue-600 dark:text-blue-400",
    bar: "bg-blue-500",
    barBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  B: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-400",
    bar: "bg-amber-500",
    barBg: "bg-amber-100 dark:bg-amber-900/30",
  },
  C: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    icon: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
    barBg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  D: {
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
    icon: "text-violet-600 dark:text-violet-400",
    bar: "bg-violet-500",
    barBg: "bg-violet-100 dark:bg-violet-900/30",
  },
};

export default function ResultsScreen({ answers, details, onRestart }) {
  const results = calculateResults(answers);
  const primary = BLOCKAGE_TYPES[results.primary];
  const colors = TYPE_COLORS[results.primary];
  const Icon = TYPE_ICONS[results.primary];
  const mixedData = results.isMixed ? MIXED_TYPES[results.mixedKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
            Your Blockage Profile
          </h2>
          {details?.name && (
            <p className="text-sm text-muted-foreground">{details.name}</p>
          )}
        </motion.div>
      </div>

      {/* Primary blockage type card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={cn(
          "rounded-2xl border p-6 sm:p-8 mb-6",
          colors.bg,
          colors.border
        )}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className={cn("p-3 rounded-xl bg-white/60 dark:bg-black/20", colors.icon)}>
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full", colors.badge)}>
              {primary.type}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
              {primary.name}
            </h3>
          </div>
        </div>

        <p className={cn("text-lg sm:text-xl font-semibold italic mb-3", colors.icon)}>
          {primary.tagline}
        </p>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
          {primary.description}
        </p>

        <div className="bg-white/50 dark:bg-black/20 rounded-xl px-4 py-3 border border-white/60 dark:border-white/10">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
            Core Pattern
          </p>
          <p className={cn("text-sm font-semibold", colors.icon)}>
            {primary.corePattern}
          </p>
        </div>
      </motion.div>

      {/* What's happening + Your shift */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-card rounded-xl border border-border p-5 shadow-sm"
        >
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-warning" />
            What&apos;s Really Happening
          </h3>
          <div className="space-y-2">
            {primary.whatHappening.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                <p className="text-sm text-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-5 shadow-sm"
        >
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Your Shift
          </h3>
          <div className="space-y-2">
            {primary.shifts.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight className={cn("h-3.5 w-3.5 flex-shrink-0 mt-0.5", colors.icon)} />
                <p className="text-sm text-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Blockage breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-6"
      >
        <h3 className="text-sm font-bold text-foreground mb-5 text-center">
          Your Blockage Breakdown
        </h3>
        <div className="space-y-3">
          {Object.entries(results.counts).map(([letter, count]) => {
            const type = BLOCKAGE_TYPES[letter];
            const c = TYPE_COLORS[letter];
            const pct = Math.round((count / 8) * 100);
            const isPrimary = letter === results.primary;

            return (
              <div key={letter}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={cn("font-semibold", c.icon)}>
                    {type.type}
                    {isPrimary && (
                      <span className="ml-2 text-[10px] font-bold opacity-70">(Primary)</span>
                    )}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {count}/8
                  </span>
                </div>
                <div className={cn("h-2.5 rounded-full overflow-hidden", c.barBg)}>
                  <motion.div
                    className={cn("h-full rounded-full", c.bar)}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Radar chart profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-6"
      >
        <h3 className="text-sm font-bold text-foreground mb-4 text-center">
          Profile Overview
        </h3>
        <RadarChartSection counts={results.counts} />
      </motion.div>

      {/* Mixed type card */}
      {results.isMixed && mixedData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex gap-1 flex-shrink-0">
              {[results.primary, results.secondary].map((letter) => {
                const C = TYPE_ICONS[letter];
                const c = TYPE_COLORS[letter];
                return (
                  <span key={letter} className={cn("p-1.5 rounded-lg bg-muted", c.icon)}>
                    <C className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Mixed Pattern · {results.primary} + {results.secondary}
              </p>
              <h4 className="text-base font-bold text-foreground mb-2">
                {mixedData.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {mixedData.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RotateCcw className="h-4 w-4" /> Retake Assessment
        </Button>
      </div>
    </motion.div>
  );
}
