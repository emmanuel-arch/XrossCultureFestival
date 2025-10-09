import Link from "next/link";

export default function TicketsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Buy Tickets</h1>
        <p className="mb-6">This is a simple placeholder for the Tickets page. Implement ticket purchase flow here.</p>
        <Link href="/" className="inline-block text-sm text-blue-600 underline">Back to home</Link>
      </div>
    </div>
  );
}
