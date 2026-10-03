import Image from "next/image";
import players from "../DummyData/player.json";

export default function Card() {
  return (
    <>
      <div className="mx-12 mt-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">
          Available Players
        </h1>

        <div className="flex gap-2">
          <button className="rounded-lg bg-[#EE77FFEE] px-5 py-2  text-black">
            Available
          </button>

          <button className="rounded-lg border border-gray-200 px-5 py-2 text-black">
            Selected
          </button>
        </div>
      </div>

      <div className="mx-12 my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <div
            key={player.id}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <Image src={player.image} alt={player.name} width={400} height={250} className="h-54 w-full rounded-xl"/>

            <h2 className="mt-5 text-xl font-semibold text-[#131313]">
              {player.name}
            </h2>

            <div className="mt-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-500">{player.country}</span>

              <span className="rounded-lg bg-gray-100 px-3.5 py-2 text-black">
                {player.role}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold text-black">
                {player.battingType}
              </span>

              <span className="text-gray-500">{player.bowlingType}</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-black">
                Price: ${player.price}
              </span>

              <button className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2  text-[#131313] ">
                Choose Player
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}