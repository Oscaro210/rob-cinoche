import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/interviews", label: "Interviews" },
  { href: "/cine-club", label: "Ciné Club" },
  { href: "/cannes", label: "Cannes" },
];

export default function Header() {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-6 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/logo-transparent.png"
          alt="ROB cinoche"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
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
    </header>
  );
}
