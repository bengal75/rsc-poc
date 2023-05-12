import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href="/on-client"
      >
        <h3 className="text-2xl font-bold">Client Components →</h3>
        <div className="text-lg">The 'traditional' React setup</div>
      </Link>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href="/on-server"
      >
        <h3 className="text-2xl font-bold">Server Components →</h3>
        <div className="text-lg">Using the new RSCs</div>
      </Link>
    </div>
  );
}
