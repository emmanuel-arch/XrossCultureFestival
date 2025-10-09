import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">For enquiries please email info@crossculturefestival.example (placeholder).</p>
        <Link href="/" className="inline-block text-sm text-blue-600 underline">Back to home</Link>
      </div>
    </div>
  );
}
