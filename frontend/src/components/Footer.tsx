
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070918] text-white p-6">

      <div className="flex justify-center">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold">About Us</h3>
          <p className="mt-3 text-gray-400">
            We provide the best services to our customers.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Subscribe</h3>
          <p className="mt-3 text-gray-400">
            Subscribe for the latest updates.
          </p>

          <div className="mt-4 flex overflow-hidden rounded-md ">
            <input type="email" placeholder="Enter your email" className="bg-white px-5 py-3  text-black " />

            <button
              className="px-6 text-sm text-black font-bold cursor-pointer "
              style={{background:"linear-gradient( #f0d27a, #e8809f)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-gray-400">
        © 2026 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}