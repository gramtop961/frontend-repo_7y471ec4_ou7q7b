import { motion } from "framer-motion";

function generatePath(width, height) {
  // Simple smooth curve path
  const points = [
    [0, 0.7],
    [0.15, 0.45],
    [0.3, 0.6],
    [0.5, 0.35],
    [0.7, 0.5],
    [0.85, 0.28],
    [1, 0.4],
  ];
  const scaled = points.map(([x, y]) => [x * width, y * height]);
  let d = `M ${scaled[0][0]} ${scaled[0][1]}`;
  for (let i = 1; i < scaled.length; i++) {
    const [x, y] = scaled[i];
    const [px, py] = scaled[i - 1];
    const cx = (px + x) / 2;
    const cy = (py + y) / 2;
    d += ` Q ${px} ${py}, ${cx} ${cy}`;
  }
  d += ` T ${scaled[scaled.length - 1][0]} ${scaled[scaled.length - 1][1]}`;
  return d;
}

export default function ActivityChart() {
  const width = 900;
  const height = 260;
  const path = generatePath(width, height);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-sky-100/50 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Weekly Activity</h3>
          <p className="text-xs text-slate-500">Animated vector area chart</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span>Engagement</span>
        </div>
      </div>

      <div className="relative">
        {/* Pastel gradient orbs */}
        <motion.div
          className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 opacity-50"
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 opacity-50"
          animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <svg viewBox={`0 0 ${width} ${height}`} className="h-64 w-full">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="stroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>

          <path d={`${path} V ${height} H 0 Z`} fill="url(#area)" />

          <motion.path
            d={path}
            fill="none"
            stroke="url(#stroke)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Floating indicator */}
          <motion.circle
            r="6"
            fill="#38bdf8"
            initial={{ cx: 0, cy: height * 0.7 }}
            animate={{ cx: width, cy: height * 0.4 }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>
    </section>
  );
}
