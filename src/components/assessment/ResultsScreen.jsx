import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CATEGORIES, CATEGORY_DATA, calculateResults } from "../../lib/assessmentData";
import RadarChartSection from "./RadarChartSection";
import ScoreGauge from "./ScoreGauge";

// Tailwind color maps per category
const CAT_COLORS = {
  mental:     { bar: 'bg-blue-500',    barBg: 'bg-blue-100 dark:bg-blue-900/30',    text: 'text-blue-600 dark:text-blue-400',    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',    card: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' },
  energy:     { bar: 'bg-amber-500',   barBg: 'bg-amber-100 dark:bg-amber-900/30',   text: 'text-amber-600 dark:text-amber-400',   badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',   card: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800' },
  behavioral: { bar: 'bg-emerald-500', barBg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300', card: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' },
  emotional:  { bar: 'bg-violet-500',  barBg: 'bg-violet-100 dark:bg-violet-900/30',  text: 'text-violet-600 dark:text-violet-400',  badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300',  card: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800' },
  direction:  { bar: 'bg-indigo-500',  barBg: 'bg-indigo-100 dark:bg-indigo-900/30',  text: 'text-indigo-600 dark:text-indigo-400',  badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300',  card: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800' },
  relational: { bar: 'bg-rose-500',    barBg: 'bg-rose-100 dark:bg-rose-900/30',    text: 'text-rose-600 dark:text-rose-400',    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',    card: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800' },
};

const CAT_EMOJI = { mental: '🧠', energy: '⚡', behavioral: '🎯', emotional: '💚', direction: '🧭', relational: '🤝' };

function CalloutCard({ categoryId, rank, delay }) {
  const data = CATEGORY_DATA[categoryId];
  const c = CAT_COLORS[categoryId];
  const isPrimary = rank === 'Primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn('rounded-2xl border p-5 sm:p-6', c.card)}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{CAT_EMOJI[categoryId]}</span>
        <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', c.badge)}>{rank}</span>
        <span className={cn('text-sm font-bold', c.text)}>{data.label}</span>
        <span className="text-xs text-muted-foreground">— {data.subtitle}</span>
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed mb-4">{data.diagnosis}</p>

      <div className="space-y-2">
        {(isPrimary ? data.actions : data.actions.slice(0, 1)).map((action, i) => (
          <div key={i} className="flex items-start gap-2">
            <ArrowRight className={cn('h-3.5 w-3.5 flex-shrink-0 mt-0.5', c.text)} />
            <p className="text-sm text-foreground leading-snug">{action}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ResultsScreen({ answers, details, onRestart }) {
  const results = calculateResults(answers);
  const { normalizedPercents, ranked, severityScore, severityBand, primaryCategory, secondaryCategory } = results;
  const isLargleyUnblocked = severityScore <= 25;
  const primaryData = CATEGORY_DATA[primaryCategory];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Your Blockage Profile</h2>
          {details?.name && <p className="text-sm text-muted-foreground">{details.name}</p>}
        </motion.div>
      </div>

      {/* Largely Unblocked banner */}
      {isLargleyUnblocked && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-6 flex items-start gap-3"
        >
          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-1">Largely Unblocked</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You&apos;re in a good place. No single blockage dominates. Your mild edge is{' '}
              <span className="font-semibold">{primaryData.label}</span> — keep it in check with:{' '}
              <span className="italic">{primaryData.actions[0]}</span>
            </p>
          </div>
        </motion.div>
      )}

      {/* 1 — Radar chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-5"
      >
        <h3 className="text-sm font-bold text-foreground mb-1 text-center">Blockage Shape</h3>
        <p className="text-xs text-muted-foreground text-center mb-4">Normalized % across all 6 areas</p>
        <RadarChartSection normalizedPercents={normalizedPercents} />
      </motion.div>

      {/* 2 — Ranked horizontal bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-5"
      >
        <h3 className="text-sm font-bold text-foreground mb-5 text-center">Category Breakdown</h3>
        <div className="space-y-3">
          {ranked.map(({ id, pct }, i) => {
            const c = CAT_COLORS[id];
            const data = CATEGORY_DATA[id];
            return (
              <div key={id}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={cn('font-semibold flex items-center gap-1.5', c.text)}>
                    <span>{CAT_EMOJI[id]}</span>
                    {data.label}
                    {i === 0 && (
                      <span className="text-[10px] font-bold opacity-70 ml-1">(Primary)</span>
                    )}
                  </span>
                  <span className="text-muted-foreground font-medium">{pct}%</span>
                </div>
                <div className={cn('h-2.5 rounded-full overflow-hidden', c.barBg)}>
                  <motion.div
                    className={cn('h-full rounded-full', c.bar)}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + i * 0.06 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 3 — Severity gauge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-5"
      >
        <h3 className="text-sm font-bold text-foreground mb-1 text-center">Severity Score</h3>
        <p className="text-xs text-muted-foreground text-center mb-4">Overall blockage level (0–100)</p>
        <div className="flex justify-center">
          <ScoreGauge score={severityScore} />
        </div>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {[{ label: 'Largely Unblocked', color: '#22c55e' }, { label: 'Mild', color: '#eab308' }, { label: 'Moderate', color: '#f97316' }, { label: 'High', color: '#ef4444' }].map((b) => (
            <div key={b.label} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
              <span className="text-[11px] text-muted-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 4 — Callout cards (skip if largely unblocked) */}
      {!isLargleyUnblocked && (
        <>
          <CalloutCard categoryId={primaryCategory} rank="Primary" delay={0.65} />
          <div className="mt-4">
            <CalloutCard categoryId={secondaryCategory} rank="Secondary" delay={0.75} />
          </div>
        </>
      )}

      <div className="flex items-center justify-center gap-3 mt-8 mb-12">
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RotateCcw className="h-4 w-4" /> Retake Assessment
        </Button>
      </div>
    </motion.div>
  );
}
