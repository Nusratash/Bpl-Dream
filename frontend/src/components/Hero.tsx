import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-12 mt-3 mb-12 flex flex-col items-center rounded-3xl bg-[#131313] px-4 py-14 text-center">
      <Image src="/hero.png" alt="hero image" width={215} height={200}/>

      <h1 className="mt-6 text-3xl font-bold text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="mt-5 text-lg text-white/60">
        Beyond Boundaries Beyond Limits
      </p>

      <div className="mt-7 rounded-2xl border border-[#E7FE55] p-2">
        <button className="rounded-xl bg-[#E7FE55] px-5 py-3 font-semibold text-black">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
}