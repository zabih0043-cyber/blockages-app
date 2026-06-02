export const CATEGORIES = [
  { id: 'mental',     label: 'Mental',     max: 12 },
  { id: 'energy',     label: 'Energy',     max: 9  },
  { id: 'behavioral', label: 'Behavioral', max: 12 },
  { id: 'emotional',  label: 'Emotional',  max: 12 },
  { id: 'direction',  label: 'Direction',  max: 9  },
  { id: 'relational', label: 'Relational', max: 6  },
];

export const SECTIONS = [
  {
    id: 1,
    category: 'mental',
    title: 'Mental',
    description: 'How you think, plan, and decide.',
  },
  {
    id: 2,
    category: 'energy',
    title: 'Energy',
    description: 'Your current vitality and capacity.',
  },
  {
    id: 3,
    category: 'behavioral',
    title: 'Behavioral',
    description: 'Your habits, routines, and follow-through.',
  },
  {
    id: 4,
    category: 'emotional',
    title: 'Emotional',
    description: 'How you handle feelings, fear, and mistakes.',
  },
  {
    id: 5,
    category: 'direction',
    title: 'Direction',
    description: 'Your clarity of goals and sense of progress.',
  },
  {
    id: 6,
    category: 'relational',
    title: 'Relational',
    description: 'Your environment and relationship with others\' opinions.',
  },
];

// A = 0 (healthiest/unblocked), D = 3 (most blocked)
export const QUESTIONS = [
  // Mental (4)
  {
    id: 1,
    section: 1,
    category: 'mental',
    text: 'When starting an important task:',
    options: [
      { letter: 'A', text: 'I begin and adjust as I go' },
      { letter: 'B', text: 'I plan a little, then start' },
      { letter: 'C', text: 'I over-plan before acting' },
      { letter: 'D', text: 'I analyze endlessly and rarely start' },
    ],
  },
  {
    id: 2,
    section: 1,
    category: 'mental',
    text: 'Faced with a decision:',
    options: [
      { letter: 'A', text: 'I decide and move on' },
      { letter: 'B', text: 'I weigh it briefly' },
      { letter: 'C', text: 'I go back and forth' },
      { letter: 'D', text: 'I get stuck and avoid choosing' },
    ],
  },
  {
    id: 3,
    section: 1,
    category: 'mental',
    text: 'About getting things "right":',
    options: [
      { letter: 'A', text: 'Good enough works for me' },
      { letter: 'B', text: 'I aim high but ship' },
      { letter: 'C', text: 'I polish too long' },
      { letter: 'D', text: 'Nothing ever feels ready' },
    ],
  },
  {
    id: 4,
    section: 1,
    category: 'mental',
    text: 'My mind when I should focus:',
    options: [
      { letter: 'A', text: 'Clear' },
      { letter: 'B', text: 'A little busy' },
      { letter: 'C', text: 'Cluttered' },
      { letter: 'D', text: 'Racing and noisy' },
    ],
  },

  // Energy (3)
  {
    id: 5,
    section: 2,
    category: 'energy',
    text: 'My energy through the day:',
    options: [
      { letter: 'A', text: 'Steady' },
      { letter: 'B', text: 'Dips sometimes' },
      { letter: 'C', text: 'Often low' },
      { letter: 'D', text: 'Drained most of the time' },
    ],
  },
  {
    id: 6,
    section: 2,
    category: 'energy',
    text: 'After a normal day\'s work:',
    options: [
      { letter: 'A', text: 'Still have energy' },
      { letter: 'B', text: 'Tired but fine' },
      { letter: 'C', text: 'Wiped out' },
      { letter: 'D', text: 'Completely depleted' },
    ],
  },
  {
    id: 7,
    section: 2,
    category: 'energy',
    text: 'Pushing through tasks feels:',
    options: [
      { letter: 'A', text: 'Doable' },
      { letter: 'B', text: 'Takes effort' },
      { letter: 'C', text: 'Hard to sustain' },
      { letter: 'D', text: 'Impossible right now' },
    ],
  },

  // Behavioral (4)
  {
    id: 8,
    section: 3,
    category: 'behavioral',
    text: 'With routines:',
    options: [
      { letter: 'A', text: 'Consistent' },
      { letter: 'B', text: 'Mostly stick to them' },
      { letter: 'C', text: 'Start strong, fade' },
      { letter: 'D', text: "Can't keep any" },
    ],
  },
  {
    id: 9,
    section: 3,
    category: 'behavioral',
    text: 'Distractions (phone, noise):',
    options: [
      { letter: 'A', text: 'Rarely pull me' },
      { letter: 'B', text: 'Sometimes' },
      { letter: 'C', text: 'Often' },
      { letter: 'D', text: 'Constantly derail me' },
    ],
  },
  {
    id: 10,
    section: 3,
    category: 'behavioral',
    text: 'Finishing what I start:',
    options: [
      { letter: 'A', text: 'Almost always' },
      { letter: 'B', text: 'Usually' },
      { letter: 'C', text: 'Sometimes' },
      { letter: 'D', text: 'Rarely' },
    ],
  },
  {
    id: 11,
    section: 3,
    category: 'behavioral',
    text: 'A free hour to be productive:',
    options: [
      { letter: 'A', text: 'I use it well' },
      { letter: 'B', text: 'Mostly' },
      { letter: 'C', text: 'Drift a bit' },
      { letter: 'D', text: 'Waste it without meaning to' },
    ],
  },

  // Emotional (4)
  {
    id: 12,
    section: 4,
    category: 'emotional',
    text: 'After a mistake:',
    options: [
      { letter: 'A', text: 'Learn and move on' },
      { letter: 'B', text: 'Sting, then recover' },
      { letter: 'C', text: 'Dwell on it' },
      { letter: 'D', text: 'Take it deeply personally' },
    ],
  },
  {
    id: 13,
    section: 4,
    category: 'emotional',
    text: 'Uncomfortable feelings:',
    options: [
      { letter: 'A', text: 'I face them' },
      { letter: 'B', text: 'Usually handle them' },
      { letter: 'C', text: 'I avoid them' },
      { letter: 'D', text: 'I numb or escape them' },
    ],
  },
  {
    id: 14,
    section: 4,
    category: 'emotional',
    text: 'Trying something risky:',
    options: [
      { letter: 'A', text: 'I go for it' },
      { letter: 'B', text: 'Cautious but willing' },
      { letter: 'C', text: 'Hesitant' },
      { letter: 'D', text: 'Fear stops me' },
    ],
  },
  {
    id: 15,
    section: 4,
    category: 'emotional',
    text: 'Emotional weight lately:',
    options: [
      { letter: 'A', text: 'Light' },
      { letter: 'B', text: 'Manageable' },
      { letter: 'C', text: 'Heavy' },
      { letter: 'D', text: 'Overwhelming' },
    ],
  },

  // Direction (3)
  {
    id: 16,
    section: 5,
    category: 'direction',
    text: 'Knowing what I want:',
    options: [
      { letter: 'A', text: 'Very clear' },
      { letter: 'B', text: 'Mostly' },
      { letter: 'C', text: 'Fuzzy' },
      { letter: 'D', text: 'No idea' },
    ],
  },
  {
    id: 17,
    section: 5,
    category: 'direction',
    text: 'My goals right now:',
    options: [
      { letter: 'A', text: 'Defined and active' },
      { letter: 'B', text: 'Loosely set' },
      { letter: 'C', text: 'Vague' },
      { letter: 'D', text: 'None' },
    ],
  },
  {
    id: 18,
    section: 5,
    category: 'direction',
    text: 'Sense of progress:',
    options: [
      { letter: 'A', text: 'Moving forward' },
      { letter: 'B', text: 'Slow but going' },
      { letter: 'C', text: 'Stuck' },
      { letter: 'D', text: 'Lost' },
    ],
  },

  // Relational (2)
  {
    id: 19,
    section: 6,
    category: 'relational',
    text: 'My environment / people:',
    options: [
      { letter: 'A', text: 'Supportive' },
      { letter: 'B', text: 'Mostly fine' },
      { letter: 'C', text: 'Draining at times' },
      { letter: 'D', text: 'Toxic or isolating' },
    ],
  },
  {
    id: 20,
    section: 6,
    category: 'relational',
    text: "Others' opinions of me:",
    options: [
      { letter: 'A', text: "Don't run my choices" },
      { letter: 'B', text: 'Minor pull' },
      { letter: 'C', text: 'Often sway me' },
      { letter: 'D', text: 'Control what I do' },
    ],
  },
];

export const CATEGORY_DATA = {
  mental: {
    label: 'Mental',
    subtitle: 'Overthinking & Perfectionism',
    color: 'blue',
    diagnosis: 'Thinking has become a substitute for doing. You see every angle, which makes starting and finishing hard.',
    actions: [
      'Set a timer: decide in 10 minutes, then commit.',
      'Ship at 80% — treat "good enough" as the goal, not a compromise.',
      'Take one small imperfect action before planning the next.',
    ],
  },
  energy: {
    label: 'Energy',
    subtitle: 'Burnout & Fatigue',
    color: 'amber',
    diagnosis: "Your tank is low. This isn't laziness; it's depletion, and pushing harder makes it worse.",
    actions: [
      "Protect sleep first — it's the lever everything else depends on.",
      'Cut or delegate one recurring drain this week.',
      'Add light daily movement (a 10-min walk) to rebuild, don\'t grind.',
    ],
  },
  behavioral: {
    label: 'Behavioral',
    subtitle: 'Habits & Discipline',
    color: 'emerald',
    diagnosis: "You can act — consistency is the gap. This is weak systems, not weak character.",
    actions: [
      'Anchor one keystone habit to a fixed time daily.',
      'Remove the top distraction from reach (not willpower — friction).',
      'Finish small: pick tasks you can complete to rebuild momentum.',
    ],
  },
  emotional: {
    label: 'Emotional',
    subtitle: 'Internal Weight & Avoidance',
    color: 'violet',
    diagnosis: "Something underneath is steering you — fear, old pain, or feelings you're avoiding.",
    actions: [
      'Name the feeling out loud or on paper before acting.',
      "Approach one thing you've been avoiding, in the smallest possible step.",
      'If the weight stays heavy, talk to someone you trust or a professional.',
    ],
  },
  direction: {
    label: 'Direction',
    subtitle: 'Clarity & Purpose',
    color: 'indigo',
    diagnosis: "The engine works, but there's no destination set. Effort without direction feels like drifting.",
    actions: [
      'Write one clear goal for the next 90 days — just one.',
      'Define what "progress" looks like this week, concretely.',
      'Block 30 minutes to ask: what do I actually want here?',
    ],
  },
  relational: {
    label: 'Relational',
    subtitle: 'Environment & Approval',
    color: 'rose',
    diagnosis: "Your blockage may be outside you — draining people, a heavy environment, or living for others' approval.",
    actions: [
      'Identify the one relationship or space costing you the most.',
      'Practice one small "no" this week without over-explaining.',
      'Seek one source of genuine support or accountability.',
    ],
  },
};

export const SEVERITY_BANDS = [
  { min: 0,  max: 25,  label: 'Largely Unblocked', color: '#22c55e' },
  { min: 26, max: 50,  label: 'Mild',              color: '#eab308' },
  { min: 51, max: 75,  label: 'Moderate',          color: '#f97316' },
  { min: 76, max: 100, label: 'High',              color: '#ef4444' },
];

const LETTER_SCORE = { A: 0, B: 1, C: 2, D: 3 };

export function calculateResults(answers) {
  // Raw score per category
  const categoryScores = {};
  CATEGORIES.forEach((cat) => {
    const qs = QUESTIONS.filter((q) => q.category === cat.id);
    const score = qs.reduce((sum, q) => {
      const letter = answers[q.id];
      return sum + (letter !== undefined ? LETTER_SCORE[letter] : 0);
    }, 0);
    categoryScores[cat.id] = score;
  });

  // Total severity score (sum / 60 × 100)
  const totalScore = Object.values(answers).reduce(
    (sum, letter) => sum + (LETTER_SCORE[letter] ?? 0),
    0
  );
  const severityScore = Math.round((totalScore / 60) * 100);
  const severityBand = SEVERITY_BANDS.find(
    (b) => severityScore >= b.min && severityScore <= b.max
  ) ?? SEVERITY_BANDS[0];

  // Raw % per category (score / max)
  const rawPercents = {};
  CATEGORIES.forEach((cat) => {
    rawPercents[cat.id] = (categoryScores[cat.id] / cat.max) * 100;
  });

  // Normalize to sum to 100
  const rawSum = Object.values(rawPercents).reduce((s, v) => s + v, 0);
  const normalizedPercents = {};
  if (rawSum === 0) {
    CATEGORIES.forEach((cat) => {
      normalizedPercents[cat.id] = Math.round(100 / CATEGORIES.length);
    });
  } else {
    CATEGORIES.forEach((cat) => {
      normalizedPercents[cat.id] = Math.round((rawPercents[cat.id] / rawSum) * 100);
    });
    // Fix rounding drift
    const pctSum = Object.values(normalizedPercents).reduce((s, v) => s + v, 0);
    if (pctSum !== 100) {
      const topCat = Object.entries(normalizedPercents).sort((a, b) => b[1] - a[1])[0][0];
      normalizedPercents[topCat] += 100 - pctSum;
    }
  }

  // Rank categories by normalized %
  const ranked = Object.entries(normalizedPercents)
    .sort((a, b) => b[1] - a[1])
    .map(([id, pct]) => ({ id, pct }));

  return {
    categoryScores,
    normalizedPercents,
    ranked,
    totalScore,
    severityScore,
    severityBand,
    primaryCategory: ranked[0].id,
    secondaryCategory: ranked[1].id,
    totalAnswered: Object.keys(answers).length,
  };
}
