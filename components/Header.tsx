import Link from "next/link";

const navLinks = [
  { href: "/interviews", label: "Interviews" },
  { href: "/cine-club", label: "Ciné Club" },
  { href: "/cannes", label: "Cannes" },
];

export default function Header() {
  return (
    <header className="border-b-2 border-[#c8d8ea] bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
          <span style={{ color: "#4a90d9" }}>Ro</span>
          <span style={{ color: "#f28b82" }}>B</span>
          <span className="text-base ml-1" style={{ color: "#1a1a2e" }}>cinoche</span>
        </Link>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base hover:underline underline-offset-4 decoration-2"
              style={{ color: "#1a1a2e", textDecorationColor: "#f28b82" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
