import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 pt-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Questions? Those are good! Reach out to us at{" "}
          <a
            href="mailto:dhygienics@gmail.com"
            className="text-blue-400 hover:underline"
          >
            dhygienics@gmail.com
          </a>
        </p>
      </main>
    </>
  );
}
