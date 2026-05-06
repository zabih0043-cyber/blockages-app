export const SECTIONS = [
  {
    id: 1,
    title: "Your Starting Point",
    description:
      "Reflect on how you begin tasks, what you're currently experiencing, and how you handle mistakes and frustration.",
    measures: ["Task initiation", "Current state", "Response to setbacks", "Primary frustration"],
  },
  {
    id: 2,
    title: "Your Operating Style",
    description:
      "Consider how you approach goals, what your environment feels like, what you tend to avoid, and how you use unstructured time.",
    measures: ["Goal approach", "Environment", "Avoidance patterns", "Unstructured time"],
  },
];

export const QUESTIONS = [
  {
    id: 1,
    section: 1,
    text: "When you need to begin an important task, what typically happens?",
    options: [
      { letter: "A", text: "I overanalyze and delay getting started" },
      { letter: "B", text: "I feel fatigued or lack motivation" },
      { letter: "C", text: "I become distracted by other activities" },
      { letter: "D", text: "I feel anxious or uncertain" },
    ],
  },
  {
    id: 2,
    section: 1,
    text: "Which statement best reflects your current experience?",
    options: [
      { letter: "A", text: "\"I'm unsure what the right next step is\"" },
      { letter: "B", text: "\"I don't have the energy to follow through\"" },
      { letter: "C", text: "\"I struggle to stay consistent\"" },
      { letter: "D", text: "\"Something feels emotionally overwhelming\"" },
    ],
  },
  {
    id: 3,
    section: 1,
    text: "How do you respond to mistakes or setbacks?",
    options: [
      { letter: "A", text: "I analyze them excessively" },
      { letter: "B", text: "I avoid trying again" },
      { letter: "C", text: "I move on quickly without much reflection" },
      { letter: "D", text: "I take them personally" },
    ],
  },
  {
    id: 4,
    section: 1,
    text: "What is your primary frustration at the moment?",
    options: [
      { letter: "A", text: "Feeling stuck in my thoughts" },
      { letter: "B", text: "Persistent fatigue or burnout" },
      { letter: "C", text: "Lack of discipline or follow-through" },
      { letter: "D", text: "Emotional instability or intensity" },
    ],
  },
  {
    id: 5,
    section: 2,
    text: "How do you typically approach goals?",
    options: [
      { letter: "A", text: "I plan extensively but delay taking action" },
      { letter: "B", text: "I struggle to initiate" },
      { letter: "C", text: "I start but rarely complete tasks" },
      { letter: "D", text: "I feel conflicted or uncertain about direction" },
    ],
  },
  {
    id: 6,
    section: 2,
    text: "How would you describe your current environment?",
    options: [
      { letter: "A", text: "Mentally cluttered or overwhelming" },
      { letter: "B", text: "Physically draining or disorganized" },
      { letter: "C", text: "Filled with distractions" },
      { letter: "D", text: "Emotionally tense or heavy" },
    ],
  },
  {
    id: 7,
    section: 2,
    text: "What do you tend to avoid most?",
    options: [
      { letter: "A", text: "Making decisions" },
      { letter: "B", text: "Effort that feels mentally or physically exhausting" },
      { letter: "C", text: "Tedious or challenging tasks" },
      { letter: "D", text: "Uncomfortable emotions" },
    ],
  },
  {
    id: 8,
    section: 2,
    text: "If you had an entirely free day, how would it likely unfold?",
    options: [
      { letter: "A", text: "I would spend time thinking about what I should do" },
      { letter: "B", text: "I would rest or remain inactive" },
      { letter: "C", text: "I would unintentionally waste time" },
      { letter: "D", text: "I would feel restless or uneasy" },
    ],
  },
];

export const BLOCKAGE_TYPES = {
  A: {
    letter: "A",
    name: "The Overthinker",
    type: "Mental Blockage",
    tagline: "You live in your head.",
    description:
      "You analyze, question, and replay scenarios — but action gets delayed. Your blockage isn't lack of ability, it's mental friction.",
    corePattern: "\"I need to be sure before I start.\"",
    whatHappening: [
      "Fear of failure disguised as planning",
      "Perfectionism slowing momentum",
      "Decision fatigue from excessive analysis",
    ],
    shifts: [
      "Act before you feel ready",
      "Limit decision-making time to 5 minutes",
      "Use the 5-minute rule: start for just 5 minutes",
      "Take small, imperfect actions consistently",
    ],
  },
  B: {
    letter: "B",
    name: "The Drained One",
    type: "Energy Blockage",
    tagline: "You're running on empty.",
    description:
      "This isn't laziness — it's depletion. Your body and mind don't have the resources to push forward consistently.",
    corePattern: "\"I just don't have the energy.\"",
    whatHappening: [
      "Burnout or poor recovery cycles",
      "Too much output, not enough input",
      "Exhaustion mistaken for lack of motivation",
    ],
    shifts: [
      "Restore before you push forward",
      "Prioritise sleep, movement, and nutrition",
      "Start smaller than you think necessary",
      "Reduce workload before adding more",
    ],
  },
  C: {
    letter: "C",
    name: "The Inconsistent Starter",
    type: "Behavioral Blockage",
    tagline: "You can begin — staying consistent is the challenge.",
    description:
      "You have the ability to act, but consistency is lacking. This typically reflects weak systems rather than a weak character.",
    corePattern: "\"I struggle to stay consistent.\"",
    whatHappening: [
      "Weak routines or lack of structure",
      "Distraction replacing focused effort",
      "Starting without completing cycles",
    ],
    shifts: [
      "Build structured daily routines",
      "Minimise distractions in your environment",
      "Focus on completing small tasks fully",
      "Track your follow-through habits weekly",
    ],
  },
  D: {
    letter: "D",
    name: "The Protector",
    type: "Emotional Blockage",
    tagline: "You avoid emotional discomfort.",
    description:
      "You're not weak — you're guarded. Your system is trying to protect you from overwhelm, rejection, or pain.",
    corePattern: "\"This feels like too much.\"",
    whatHappening: [
      "Unprocessed emotions blocking clarity",
      "Avoidance replacing action",
      "Internal conflict creating paralysis",
    ],
    shifts: [
      "Feel first, then act",
      "Express instead of suppress",
      "Journal, talk, or release emotions safely",
      "Identify and acknowledge emotions clearly",
    ],
  },
};

export const MIXED_TYPES = {
  "A+B": {
    title: "Paralysis + Depletion",
    description:
      "Overthinking consumes the limited energy you have. Simplify decisions and protect your energy — choose fewer, more focused actions.",
  },
  "A+C": {
    title: "Overthinking + Procrastination",
    description:
      "Excessive analysis leads you to delay, and when you do start, consistency is hard to maintain. Break the cycle by committing to small, imperfect actions on a fixed schedule.",
  },
  "A+D": {
    title: "Fear-Driven Hesitation",
    description:
      "Mental overthinking and emotional avoidance create a powerful paralysis. Start by acknowledging the feeling, then take one small action regardless.",
  },
  "B+C": {
    title: "Low Energy + Inconsistency",
    description:
      "Depleted energy makes it hard to build consistent habits. Focus on restoration first — better energy is the foundation for better behavior.",
  },
  "B+D": {
    title: "Emotional Burnout",
    description:
      "Emotional strain is draining your energy. Rest and emotional processing work together — address both, not just one.",
  },
  "C+D": {
    title: "Emotional Weight + Behavioral Drift",
    description:
      "Unresolved emotions make it hard to build consistent habits. Small, reliable routines can provide the emotional grounding you need.",
  },
};

export function calculateResults(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((letter) => {
    if (counts[letter] !== undefined) counts[letter]++;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];
  const secondary = sorted[1][0];
  const primaryCount = sorted[0][1];
  const secondaryCount = sorted[1][1];

  const isMixed = primaryCount - secondaryCount <= 1 && secondaryCount >= 2;
  const mixedKey = isMixed ? [primary, secondary].sort().join("+") : null;

  return {
    counts,
    primary,
    secondary: isMixed ? secondary : null,
    isMixed,
    mixedKey,
    totalAnswered: Object.keys(answers).length,
  };
}
