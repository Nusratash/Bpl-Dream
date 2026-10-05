import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import matches from "../../Data/matches.json";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-bold text-black">Schedules</h1>
        <p className="mt-2 text-gray-500">Match dates, times and venues.</p>

        <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[600px] text-left text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Time</th>
                <th className="px-5 py-3">Match</th>
                <th className="px-5 py-3">Venue</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m) => (
                <tr key={m.id} className="border-t border-gray-200">
                  <td className="px-5 py-3">{m.date}</td>
                  <td className="px-5 py-3">{m.time}</td>
                  <td className="px-5 py-3 font-semibold">
                    {m.teamA} vs {m.teamB}
                  </td>
                  <td className="px-5 py-3 text-gray-500">{m.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}
