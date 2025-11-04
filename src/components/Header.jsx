import { Bell, Search, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/70 px-5 py-4 shadow-lg shadow-sky-100/60 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200"
        >
          <span className="text-slate-700 font-bold">PD</span>
        </motion.div>
        <div>
          <h1 className="text-xl font-semibold text-slate-800">PastelDash</h1>
          <p className="text-xs text-slate-500">Calm, vector-first dashboard</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            className="w-full rounded-xl border border-slate-200 bg-white/70 pl-9 pr-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-100"
            placeholder="Search insights, metrics, users..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-xl p-2 text-slate-600 hover:bg-sky-50">
          <Bell className="h-5 w-5" />
        </button>
        <button className="rounded-xl p-2 text-slate-600 hover:bg-sky-50">
          <Settings className="h-5 w-5" />
        </button>
        <div className="ml-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-pink-100 p-1 pr-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-600">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden sm:inline text-sm font-medium text-slate-700">Alex</span>
        </div>
      </div>
    </header>
  );
}
