import Link from "next/link";

const sections = [
  {
    href: "/interviews",
    label: "Interviews",
    desc: "On rencontre les cinéastes.",
    color: "#f28b82",
    rotate: "-1deg",
    levitate: "levitate",
  },
  {
    href: "/cine-club",
    label: "Ciné Club",
    desc: "Une séance, un film, une discussion.",
    color: "#4a90d9",
    rotate: "1deg",
    levitate: "levitate-2",
  },
  {
    href: "/cannes",
    label: "Cannes",
    desc: "Notre couverture du festival.",
    color: "#ffd966",
    rotate: "-0.5deg",
    levitate: "levitate-3",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 py-12">
      {/* Hero */}
      <div className="text-center flex flex-col items-center gap-6">
        <p
          className="text-xl max-w-sm text-center leading-relaxed"
          style={{ color: "#1a1a2e" }}
        >
          Le cinéma vu par{" "}
          <span className="px-1 rounded" style={{ background: "#ffd966" }}>
            le R, le O et le B
          </span>
          .
          <br />
          Critiques, interviews, et ciné club.
        </p>

        <span
          className="inline-block text-white text-sm px-4 py-1 rounded-full"
          style={{ background: "#f28b82", transform: "rotate(-1deg)" }}
        >
          ✦ média cinéma indépendant
        </span>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`block p-6 rounded-lg border-2 bg-white/70 hover:bg-white hover:shadow-lg ${s.levitate}`}
            style={{ borderColor: s.color, rotate: s.rotate }}
          >
            <div
              className="text-2xl font-bold mb-2"
              style={{ color: s.color }}
            >
              {s.label}
            </div>
            <p className="text-base" style={{ color: "#1a1a2e" }}>
              {s.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Réseaux */}
      <p className="text-sm" style={{ color: "#888" }}>
        aussi sur{" "}
        <a
          href="https://www.instagram.com/rob.cinoche"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
          style={{ color: "#4a90d9" }}
        >
          @rob.cinoche
        </a>
      </p>
    </div>
  );
}
