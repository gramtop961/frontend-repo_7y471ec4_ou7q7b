import { Activity, Rocket, ShoppingCart, Users } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "New Users",
    value: "2,431",
    change: "+12%",
    icon: Users,
    gradient: "from-sky-200 via-indigo-200 to-teal-200",
  },
  {
    title: "Revenue",
    value: "$18,920",
    change: "+8.3%",
    icon: ShoppingCart,
    gradient: "from-pink-200 via-rose-200 to-amber-200",
  },
  {
    title: "Engagement",
    value: "76%",
    change: "+3.1%",
    icon: Activity,
    gradient: "from-violet-200 via-sky-200 to-fuchsia-200",
  },
  {
    title: "Launches",
    value: "54",
    change: "+2",
    icon: Rocket,
    gradient: "from-emerald-200 via-teal-200 to-cyan-200",
  },
];

export default function StatCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((c) => (
        <motion.div
          key={c.title}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg shadow-sky-100/50 backdrop-blur-md"
        >
          <div
            className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${c.gradient} opacity-70`}
          />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {c.title}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-800">
                {c.value}
              </h3>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white/90 to-white/40">
              <c.icon className="h-5 w-5 text-slate-600" />
            </div>
          </div>
          <p className="mt-3 text-xs font-medium text-emerald-600">{c.change} this week</p>
        </motion.div>
      ))}
    </section>
  );
}
