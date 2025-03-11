import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 pt-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Data Hygienics is committed to providing professional IT consulting
          and software solutions that empower businesses.
        </p>
      </main>
    </>
  );
}
