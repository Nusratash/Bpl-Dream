import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import { Trash2 } from "lucide-react";
export default function Page() {
  const players = [
    {
      id: 1,
      name: "Sakib Al Hasan",
      style: "Left-Hand-Bat",
    },
    {
      id: 2,
      name: "Mushfiq",
      style: "Left-Hand-Bat",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <div className="mx-auto max-w-[1035px] px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">
            Available Players
          </h1>
          <div className="flex gap-2">
            <button className="rounded-lg border border-gray-200 px-5 py-2 text-black">
              Available
            </button>
            <button className="rounded-lg bg-[#E7FE29] px-5 py-2 text-black">
              Selected
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4"
            >
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-xl bg-gray-300"></div>
                <div>
                  <h2 className="text-xl font-bold text-black">
                    {player.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {player.style}
                  </p>
                </div>
              </div>

              <button className="text-red-400">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="mt-9 rounded-xl border border-black p-1">
          <span className="block rounded-lg bg-[#E7FE29] px-4 py-2 font-bold text-black">
            Add More Player
          </span>
        </button>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}