import Link from "next/link";
import { critiques } from "@/data/critiques";

export const metadata = {
  title: "Critiques — ROB cinoche",
  description: "Les critiques de films par ROB cinoche.",
};

function Stars({ note }: { note: number }) {
  return (
    <span aria-label={`${note} sur 5`} style={{ color: "#ffd966" }}>
      {"★".repeat(note)}
      <span style={{ color: "#e5e5e5" }}>{"★".repeat(5 - note)}</span>
    </span>
  );
}

export default function CritiquesPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#ffd966" }}>
          Critiques
        </h1>
        <p className="text-lg" style={{ color: "#1a1a2e" }}>
          Ce qu&apos;on a vu, ce qu&apos;on en a pensé.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {critiques.map((c) => (
          <Link
            key={c.slug}
            href={`/critiques/${c.slug}`}
            className="block p-6 rounded-lg border-2 bg-white/70 hover:bg-white hover:shadow-lg transition-shadow"
            style={{ borderColor: c.color }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h2
                  className="text-2xl font-bold leading-tight"
                  style={{ color: c.color }}
                >
                  {c.film}
                </h2>
                <Stars note={c.note} />
              </div>
              <div className="text-sm" style={{ color: "#888" }}>
                de {c.realisateur}
              </div>
              <p className="text-base" style={{ color: "#1a1a2e" }}>
                « {c.punchline} »
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
