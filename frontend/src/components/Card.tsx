"use client";

import { useState } from "react";
import Image from "next/image";
import players from "../Data/player.json";
import { useTeam } from "../context/TeamContext";

export default function Card() {
  const { selected, choosePlayer: onChoose, removePlayer: onRemove } = useTeam();
  const [tab, setTab] = useState<"available" | "selected">("available");

  const available = players.filter(
    (p) => !selected.some((s) => s.id === p.id)
  );

  const list = tab === "available" ? available : selected;

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12">
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-bold text-black sm:text-2xl">
          {tab === "available"
            ? "Available Players"
            : `Selected Player (${selected.length}/11)`}
        </h1>

        <div className="flex gap-2">
          <button
            onClick={() => setTab("available")}
            className={`rounded-lg px-5 py-2 text-black ${
              tab === "available"
                ? "bg-[#EE77FFEE]"
                : "border border-gray-200"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setTab("selected")}
            className={`rounded-lg px-5 py-2 text-black ${
              tab === "selected"
                ? "bg-[#EE77FFEE]"
                : "border border-gray-200"
            }`}
          >
            Selected ({selected.length})
          </button>
        </div>
      </div>

      {list.length === 0 && (
        <p className="my-12 text-center text-gray-500">
          {tab === "available"
            ? "No more players available."
            : "You have not selected any player yet."}
        </p>
      )}

      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((player) => (
          <div
            key={player.id}
            className="rounded-2xl border border-gray-200 p-4 sm:p-6"
          >
            <Image
              src={player.image}
              alt={player.name}
              width={400}
              height={250}
              className="h-52 w-full rounded-xl object-cover"
            />

            <h2 className="mt-5 text-lg font-semibold text-[#131313] sm:text-xl">
              {player.name}
            </h2>

            <div className="mt-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-500">{player.country}</span>
              <span className="rounded-lg bg-gray-100 px-3.5 py-2 text-sm text-black">
                {player.role}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm sm:text-base">
              <span className="font-semibold text-black">
                {player.battingType}
              </span>
              <span className="text-gray-500">{player.bowlingType}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-black">
                Price: ${player.price}
              </span>

              {tab === "available" ? (
                <button
                  onClick={() => onChoose(player)}
                  className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-[#131313] hover:bg-gray-100"
                >
                  Choose Player
                </button>
              ) : (
                <button
                  onClick={() => onRemove(player)}
                  className="cursor-pointer rounded-lg border border-red-300 px-4 py-2 text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}