"use client";

import Image from "next/image";
import { useTeam } from "../context/TeamContext";

export default function Hero() {
  const { addCredit } = useTeam();

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-12">
      <section className="mt-3 mb-12 flex flex-col items-center rounded-3xl bg-[#131313] px-4 py-10 text-center md:py-16">
        <Image src="/hero.png" alt="hero image" width={215} height={200} />

        <h1 className="mt-6 text-2xl font-bold text-white md:text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="mt-5 text-base text-white/60 md:text-lg">
          Beyond Boundaries Beyond Limits
        </p>

        <div className="mt-7 rounded-2xl border border-[#E7FE55] p-2">
          <button
            onClick={addCredit}
            className="cursor-pointer rounded-xl bg-[#E7FE55] px-5 py-3 font-semibold text-black"
          >
            Claim Free Credit
          </button>
        </div>
      </section>
    </div>
  );
}
