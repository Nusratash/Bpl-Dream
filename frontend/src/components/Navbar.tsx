import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-white text-black/90">
      <Link href="/"> 
      <Image src="/Group 1.png" alt="Logo" width={60} height={60}/>
      </Link>
     
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="">Fixture</Link>
        <Link href="">Teams</Link>
        <Link href="">Schedules</Link>
        <Link href="/cart">Cart</Link>
      </div>
      
      <div className="border rounded-lg px-4 py-2">
        0 Coin 
      </div>
    </nav>
  );
}