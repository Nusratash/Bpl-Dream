import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import matches from "../../Data/matches.json";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-bold text-black">Fixture</h1>
        <p className="mt-2 text-gray-500">Upcoming matches of the tournament.</p>

        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {matches.map((m) => (
            <div key={m.id} className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm text-gray-500">Match {m.id}</p>
              <h2 className="mt-3 text-lg font-semibold text-[#131313] sm:text-xl">
                {m.teamA} <span className="text-gray-400">vs</span> {m.teamB}
              </h2>
              <p className="mt-3 text-gray-500">{m.venue}</p>
              <p className="mt-2 font-semibold text-black">
                {m.date} · {m.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}
