"use client";
import { useRef, useState } from "react";

import ContactExperience from "../components/models/contact/ContactExperience";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      // Success handling
      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!"); // Or use toast
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 font-space-grotesk">
          Get in touch — let&apos;s connect
        </h1>
        <p className="text-md md:text-lg text-zinc-400 font-inter">
          💬 Have questions or ideas? Let’s talk! 🚀
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
        <div className="xl:col-span-5">
          <div className="flex justify-center items-center border border-zinc-800 bg-[#0f1117] rounded-2xl p-10 shadow-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7 font-inter"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-zinc-300 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your good name?"
                  required
                  className="bg-[#1b1f2a] w-full border border-zinc-700 text-zinc-100 px-4 py-2 rounded-lg placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-zinc-300 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                  className="bg-[#1b1f2a] w-full border border-zinc-700 text-zinc-100 px-4 py-2 rounded-lg placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-zinc-300 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  className="bg-[#1b1f2a] border w-full border-zinc-700 text-zinc-100 px-4 py-2 rounded-lg placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition rounded-lg px-4 py-2 shadow-md"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="xl:col-span-7 min-h-96">
          <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
