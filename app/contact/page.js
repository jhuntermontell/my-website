"use client";
import { useState } from "react";
import Navbar from "../components/Navbar"; // Ensure the Navbar is imported

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mdkeovqy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message received. Thanks! 📨");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Oof! Something went wrong. ❌");
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Navbar is added here so navigation is available */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <label className="block mb-4">
            <span className="text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-300">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 mt-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
      </div>
    </>
  );
}
