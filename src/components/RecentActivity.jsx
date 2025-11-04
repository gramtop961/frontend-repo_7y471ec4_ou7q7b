import { ArrowRight, MessageSquare, Star, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: UserPlus,
    title: "New signup",
    subtitle: "Lena Martinez joined",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: MessageSquare,
    title: "Feedback received",
    subtitle: "4 new comments",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Star,
    title: "Milestone reached",
    subtitle: "Project v2.0 launched",
    color: "bg-violet-100 text-violet-700",
  },
];

export default function RecentActivity() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-sky-100/50 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
          <p className="text-xs text-slate-500">What changed in your workspace</p>
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((i, idx) => (
          <motion.li
            key={i.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="group flex items-center justify-between rounded-xl border border-white/60 bg-white/60 p-3 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className={`grid h-9 w-9 place-items-center rounded-lg ${i.color}`}>
                <i.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{i.title}</p>
                <p className="text-xs text-slate-500">{i.subtitle}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition group-hover:opacity-100" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
