"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import { useTeam } from "../../context/TeamContext";

export default function Page() {
  const { selected, removePlayer } = useTeam();
  const totalCost = selected.reduce((sum, p) => sum + p.price, 0);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <div className="mx-auto max-w-[1035px] px-4 py-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-black">
            My Team ({selected.length}/11)
          </h1>
          <p className="font-semibold text-black">Total Cost: ${totalCost}</p>
        </div>

        {selected.length === 0 && (
          <p className="my-12 text-center text-gray-500">
            You have not selected any player yet.
          </p>
        )}

        <div className="space-y-4">
          {selected.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between rounded-2xl border border-gray-200 px-5 py-4"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={player.image}
                  alt={player.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-black">
                    {player.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {player.role} · {player.battingType} · ${player.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removePlayer(player)}
                className="cursor-pointer text-red-400 hover:text-red-600"
                aria-label={`Remove ${player.name}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-9 inline-block rounded-xl border border-black p-1"
        >
          <span className="block rounded-lg bg-[#E7FE29] px-4 py-2 font-bold text-black">
            Add More Player
          </span>
        </Link>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}
