import { motion } from "framer-motion";
import { SEVERITY_BANDS } from "../../lib/assessmentData";

// Convert math angle (0°=right, CCW positive) to SVG x,y
function polarXY(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

// SVG arc path from startAngle to endAngle (math convention, CCW)
// Going CW (decreasing angle) → sweep=1 in SVG
function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = polarXY(cx, cy, r, startDeg);
  const e = polarXY(cx, cy, r, endDeg);
  const span = startDeg - endDeg;
  const largeArc = span > 180 ? 1 : 0;
  // CW in SVG (sweep=1) from start to end
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}

const CX = 100;
const CY = 96;
const R_TRACK = 72;
const R_NEEDLE = 65;
const R_DOT = 8;
const STROKE = 14;

// Arc spans 180° total: 180° (left) → 0° (right)
const START_ANGLE = 180;
const END_ANGLE = 0;

function scoreToAngle(score) {
  return START_ANGLE - (score / 100) * 180;
}

// Band definitions: each covers 25% of the 180° arc
const BAND_ANGLES = [
  { startDeg: 180, endDeg: 135, color: '#22c55e' }, // 0–25
  { startDeg: 135, endDeg: 90,  color: '#eab308' }, // 26–50
  { startDeg: 90,  endDeg: 45,  color: '#f97316' }, // 51–75
  { startDeg: 45,  endDeg: 0,   color: '#ef4444' }, // 76–100
];

export default function ScoreGauge({ score }) {
  const needleAngle = scoreToAngle(score);
  const needleTip = polarXY(CX, CY, R_NEEDLE, needleAngle);
  const band = SEVERITY_BANDS.find((b) => score >= b.min && score <= b.max) ?? SEVERITY_BANDS[0];

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 110" className="w-56 sm:w-64 overflow-visible">
        {/* Background track */}
        <path
          d={arcPath(CX, CY, R_TRACK, 180, 0)}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={STROKE}
          strokeLinecap="butt"
        />

        {/* Colored band segments */}
        {BAND_ANGLES.map((b, i) => (
          <path
            key={i}
            d={arcPath(CX, CY, R_TRACK, b.startDeg, b.endDeg)}
            fill="none"
            stroke={b.color}
            strokeWidth={STROKE}
            strokeLinecap="butt"
            opacity={0.25}
          />
        ))}

        {/* Needle */}
        <motion.line
          x1={CX}
          y1={CY}
          x2={needleTip.x}
          y2={needleTip.y}
          stroke="hsl(var(--foreground))"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ rotate: 0, originX: `${CX}px`, originY: `${CY}px` }}
          animate={{
            x2: needleTip.x,
            y2: needleTip.y,
          }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />

        {/* Needle pivot */}
        <circle cx={CX} cy={CY} r={R_DOT / 2} fill="hsl(var(--foreground))" />

        {/* Score label */}
        <text
          x={CX}
          y={CY + 20}
          textAnchor="middle"
          fontSize={18}
          fontWeight="bold"
          fill="hsl(var(--foreground))"
        >
          {score}
        </text>

        {/* Band label ticks */}
        {[0, 25, 50, 75, 100].map((val) => {
          const angle = scoreToAngle(val);
          const inner = polarXY(CX, CY, R_TRACK - STROKE / 2 - 4, angle);
          const outer = polarXY(CX, CY, R_TRACK + STROKE / 2 + 4, angle);
          return (
            <line
              key={val}
              x1={inner.x.toFixed(2)}
              y1={inner.y.toFixed(2)}
              x2={outer.x.toFixed(2)}
              y2={outer.y.toFixed(2)}
              stroke="hsl(var(--background))"
              strokeWidth={2}
            />
          );
        })}

        {/* Band labels */}
        {BAND_ANGLES.map((b, i) => {
          const midAngle = (b.startDeg + b.endDeg) / 2;
          const pos = polarXY(CX, CY, R_TRACK + STROKE / 2 + 14, midAngle);
          const labels = ['0–25', '26–50', '51–75', '76–100'];
          return (
            <text
              key={i}
              x={pos.x.toFixed(2)}
              y={pos.y.toFixed(2)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={6.5}
              fill="hsl(var(--muted-foreground))"
            >
              {labels[i]}
            </text>
          );
        })}
      </svg>

      {/* Band name badge */}
      <span
        className="mt-1 text-sm font-bold px-3 py-1 rounded-full"
        style={{ backgroundColor: band.color + '22', color: band.color }}
      >
        {band.label}
      </span>
    </div>
  );
}
