import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { CATEGORIES, CATEGORY_DATA } from "../../lib/assessmentData";

const COLOR_MAP = {
  blue:    'hsl(217 91% 60%)',
  amber:   'hsl(38 92% 50%)',
  emerald: 'hsl(160 84% 39%)',
  violet:  'hsl(263 70% 50%)',
  indigo:  'hsl(239 84% 67%)',
  rose:    'hsl(347 77% 50%)',
};

export default function RadarChartSection({ normalizedPercents }) {
  const data = CATEGORIES.map((cat) => ({
    subject: CATEGORY_DATA[cat.id].label,
    value: normalizedPercents[cat.id] ?? 0,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-64 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))", fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
            tickCount={4}
            tickFormatter={(v) => `${v}%`}
          />
          <Radar
            name="Score"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.18}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
