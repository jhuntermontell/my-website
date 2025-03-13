import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Data Hygienics</h1>
        <div className="space-x-6">
          <Link
            href="/"
            className="hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
