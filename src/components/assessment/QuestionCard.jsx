import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function QuestionCard({ question, value, onChange, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="bg-card rounded-xl border border-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
          {question.id}
        </span>
        <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed pt-0.5">
          {question.text}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const isSelected = value === option.letter;

          return (
            <button
              key={option.letter}
              onClick={() => onChange(question.id, option.letter)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-2 text-left w-full",
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-foreground border-border/50 hover:border-primary/40 hover:bg-accent/30"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold border",
                  isSelected
                    ? "bg-primary-foreground/20 border-primary-foreground/40 text-primary-foreground"
                    : "border-border text-muted-foreground bg-muted"
                )}
              >
                {option.letter}
              </span>
              <span className="leading-snug">{option.text}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
