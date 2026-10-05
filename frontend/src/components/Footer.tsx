import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070918] px-4 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-bold">About Us</h3>
            <p className="mt-3 text-gray-400">
              We provide the best services to our customers.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/fixture" className="hover:text-white">Fixture</Link></li>
              <li><Link href="/teams" className="hover:text-white">Teams</Link></li>
              <li><Link href="/schedules" className="hover:text-white">Schedules</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-bold">Subscribe</h3>
            <p className="mt-3 text-gray-400">
              Subscribe for the latest updates.
            </p>

            <div className="mx-auto mt-4 flex w-full max-w-sm flex-col overflow-hidden rounded-md sm:flex-row md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-white px-5 py-3 text-black"
              />

              <button
                className="cursor-pointer px-6 py-3 text-sm font-bold text-black"
                style={{ background: "linear-gradient(#f0d27a, #e8809f)" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          © 2026 Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}