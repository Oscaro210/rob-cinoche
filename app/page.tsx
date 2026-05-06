import Link from "next/link";
import Image from "next/image";

const trio = [
  { letter: "R", name: "Romain", src: "/images/romain.png", color: "#f28b82", rotate: "-3deg" },
  { letter: "O", name: "Oscar", src: "/images/oscar.png", color: "#ffd966", rotate: "2deg" },
  { letter: "B", name: "Bastien", src: "/images/bastien.png", color: "#4a90d9", rotate: "-1deg" },
];

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
    href: "/critiques",
    label: "Critiques",
    desc: "Ce qu'on a vu, ce qu'on en a pensé.",
    color: "#ffd966",
    rotate: "0.8deg",
    levitate: "levitate-2",
  },
  {
    href: "/cine-club",
    label: "Ciné Club",
    desc: "Une séance, un film, une discussion.",
    color: "#4a90d9",
    rotate: "1deg",
    levitate: "levitate-3",
  },
  {
    href: "/cannes",
    label: "Cannes",
    desc: "Notre couverture du festival.",
    color: "#f28b82",
    rotate: "-0.5deg",
    levitate: "levitate",
  },
];

const actu = {
  href: "/cannes",
  kicker: "L'actu du moment",
  title: "Rob débarque à Cannes",
  subtitle:
    "Du 13 au 24 mai 2026, on couvre le festival : films, rencontres, à chaud.",
  cta: "Suivre la couverture →",
  date: "13 — 24 mai",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-14 py-10">
      {/* Hero — titre flanqué des 3 têtes (gauche & droite) */}
      <div className="relative flex items-center justify-center w-full py-6 sm:py-10">
        {/* Romain — gauche, en haut */}
        <div
          className="absolute left-2 sm:left-6 top-2 levitate flex flex-col items-center gap-1"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
            <Image
              src={trio[0].src}
              alt={trio[0].name}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <span
            className="text-2xl sm:text-3xl font-bold leading-none"
            style={{ color: trio[0].color }}
          >
            {trio[0].letter}
          </span>
        </div>

        {/* Oscar — gauche, en bas */}
        <div
          className="absolute left-4 sm:left-12 bottom-0 levitate-2 hidden sm:flex flex-col items-center gap-1"
          style={{ transform: "rotate(4deg)" }}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
            <Image
              src={trio[1].src}
              alt={trio[1].name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <span
            className="text-xl sm:text-2xl font-bold leading-none"
            style={{ color: trio[1].color }}
          >
            {trio[1].letter}
          </span>
        </div>

        {/* Bastien — droite */}
        <div
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 levitate-3 flex flex-col items-center gap-1"
          style={{ transform: "translateY(-50%) rotate(5deg)" }}
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
            <Image
              src={trio[2].src}
              alt={trio[2].name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <span
            className="text-2xl sm:text-3xl font-bold leading-none"
            style={{ color: trio[2].color }}
          >
            {trio[2].letter}
          </span>
        </div>

        {/* Texte central */}
        <div className="text-center flex flex-col items-center gap-6 px-28 sm:px-44 z-10">
          <p
            className="text-3xl sm:text-5xl max-w-2xl text-center leading-tight font-bold"
            style={{ color: "#1a1a2e" }}
          >
            Le cinéma vu par{" "}
            <span className="px-2 rounded" style={{ background: "#ffd966" }}>
              le R, le O et le B
            </span>
            .
            <br />
            <span className="text-xl sm:text-2xl font-normal">
              Critiques, interviews, et ciné club.
            </span>
          </p>

          <span
            className="inline-block text-white text-sm px-4 py-1 rounded-full"
            style={{ background: "#f28b82", transform: "rotate(-1deg)" }}
          >
            ✦ média cinéma indépendant
          </span>
        </div>
      </div>

      {/* Actu du moment — sticker sobre */}
      <Link
        href={actu.href}
        className="group block max-w-xl w-full rounded-md px-7 py-6 hover:shadow-md transition-shadow"
        style={{
          background: "#3e6e44",
          color: "#fffaf0",
          transform: "rotate(-1deg)",
        }}
      >
        <div className="flex items-center justify-between gap-4 mb-2">
          <span
            className="text-xs uppercase tracking-widest opacity-80"
            style={{ color: "#fffaf0" }}
          >
            ✦ {actu.kicker}
          </span>
          <span className="text-xs uppercase tracking-widest opacity-80">
            {actu.date}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
          {actu.title}
        </h2>
        <p className="text-sm sm:text-base mt-1 opacity-90">
          {actu.subtitle}
        </p>
        <span className="inline-block mt-3 text-sm underline underline-offset-4 decoration-1 group-hover:translate-x-1 transition-transform">
          {actu.cta}
        </span>
      </Link>

      {/* Sections */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`block p-5 rounded-lg border-2 bg-white/70 hover:bg-white hover:shadow-lg ${s.levitate}`}
            style={{ borderColor: s.color, rotate: s.rotate }}
          >
            <div
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: s.color }}
            >
              {s.label}
            </div>
            <p className="text-sm sm:text-base" style={{ color: "#1a1a2e" }}>
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
