import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 pt-12">
        <h1 className="text-4xl font-bold">Welcome to Data Hygienics</h1>
        <p className="text-lg mt-4">
          Professional IT Consulting & Software Solutions
        </p>
      </main>

      <section className="w-full bg-gray-800 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="mt-4 text-lg">
          Explore our professional IT consulting and software solutions tailored
          for businesses.
        </p>
        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold">IT Consulting</h3>
            <p className="mt-2 text-sm">
              Expert advice and strategic planning to optimize your IT
              infrastructure.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold">Cloud Solutions</h3>
            <p className="mt-2 text-sm">
              Seamless cloud integration and management for your business needs.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-bold">Cybersecurity</h3>
            <p className="mt-2 text-sm">
              Protect your business with top-tier security strategies and tools.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-4 mt-12 text-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Data Hygienics, LLC. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:underline hover:text-gray-400">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}
