import Header from "./components/Header";
import StatCards from "./components/StatCards";
import ActivityChart from "./components/ActivityChart";
import RecentActivity from "./components/RecentActivity";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-pink-50 to-violet-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StatCards />
            <ActivityChart />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
