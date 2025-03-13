import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 pt-12">
        <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">
          Welcome to Data Hygienics
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-2xl text-center">
          Professional IT Consulting & Software Solutions
        </p>
      </main>

      <section className="w-full bg-gray-800 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-300">Our Services</h2>
        <p className="mt-4 text-lg text-gray-300">
          Explore our professional IT consulting and software solutions tailored
          for businesses.
        </p>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg w-72 transform transition hover:scale-105 hover:bg-gray-600">
            <h3 className="text-2xl font-bold text-blue-400">IT Consulting</h3>
            <p className="mt-2 text-sm text-gray-300">
              Expert advice and strategic planning to optimize your IT
              infrastructure.
            </p>
          </div>
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg w-72 transform transition hover:scale-105 hover:bg-gray-600">
            <h3 className="text-2xl font-bold text-blue-400">
              Cloud Solutions
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Seamless cloud integration and management for your business needs.
            </p>
          </div>
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg w-72 transform transition hover:scale-105 hover:bg-gray-600">
            <h3 className="text-2xl font-bold text-blue-400">Cybersecurity</h3>
            <p className="mt-2 text-sm text-gray-300">
              Protect your business with top-tier security strategies and tools.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-6 mt-12 text-center border-t border-gray-700">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Data Hygienics, LLC. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="#" className="hover:underline hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline hover:text-blue-300">
            Terms of Service
          </a>
          <a href="#" className="hover:underline hover:text-blue-300">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}
