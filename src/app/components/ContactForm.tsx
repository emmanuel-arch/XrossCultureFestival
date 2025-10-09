"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [priority, setPriority] = useState("standard");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // For now, simulate submit and show success message.
    setSubmitted(true);

    // TODO: wire to an API route or 3rd-party form endpoint.
    setTimeout(() => {
      setEmail("");
      setPriority("standard");
    }, 500);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-neutral-800 p-6 shadow-lg text-center text-neutral-100">
        <h4 className="font-semibold text-lg mb-2">Thanks — you're on the list!</h4>
        <p className="text-sm text-neutral-300">We'll contact you with priority booking information shortly.</p>
        <button className="mt-4 inline-block text-sm text-orange-300 underline" onClick={() => setSubmitted(false)}>
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-neutral-800 p-6 shadow-lg max-w-md text-neutral-100">
      <label className="block text-sm font-medium text-neutral-200 mb-2">Email address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md mb-3 text-sm text-neutral-100"
        required
      />

      <label className="block text-sm font-medium text-neutral-200 mb-2">Booking option</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md mb-3 text-sm text-neutral-100">
        <option value="standard">Standard sign-up</option>
        <option value="priority">Book priority for next festival</option>
      </select>

      {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

      <div className="flex items-center gap-3">
        <button type="submit" className="inline-block rounded-full bg-orange-500 text-black px-4 py-2 font-semibold text-sm hover:brightness-105 transition">
          Submit
        </button>
        <button type="button" className="text-sm text-neutral-300 underline" onClick={() => { setEmail(''); setPriority('standard'); }}>
          Clear
        </button>
      </div>
    </form>
  );
}
