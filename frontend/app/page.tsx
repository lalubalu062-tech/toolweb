export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">TooliyaHub</h1>

        <div className="flex gap-4">
          <button className="px-4 py-2 border border-gray-700 rounded-lg">
            Login
          </button>

          <button className="px-4 py-2 bg-white text-black rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Deploy Anything.
          <br />
          Powered by Community Nodes.
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Free distributed container hosting platform powered by TooliyaHub.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
          Get Started
        </button>
      </section>
    </main>
  );
}
