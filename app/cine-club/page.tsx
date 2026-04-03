import Image from "next/image";

export const metadata = {
  title: "Ciné Club — ROB cinoche",
  description: "Le ciné club de ROB cinoche — une séance, un film, une discussion.",
};

const seances = [
  {
    numero: "#10",
    theme: "Cycle spécial cinéma français",
    film: "Léon Morin, prêtre",
    date: "Février 2026",
  },
];

export default function CineClubPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-48 h-48 shrink-0">
          <Image
            src="/images/cine-club.png"
            alt="Logo ROB ciné club"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1
            className="text-4xl font-bold mb-3"
            style={{ color: "#4a90d9" }}
          >
            Ciné Club
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#1a1a2e" }}>
            Une fois par mois, on se retrouve pour regarder un film ensemble —
            puis on en discute autour d&apos;un verre.
            <br />
            Ouvert à tous.
          </p>
        </div>
      </div>

      {/* Séances */}
      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "#1a1a2e" }}
        >
          Séances passées
        </h2>
        <div className="flex flex-col gap-4">
          {seances.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border-2 bg-white/70 flex gap-4 items-center"
              style={{ borderColor: "#4a90d9" }}
            >
              <span
                className="text-2xl font-bold shrink-0"
                style={{ color: "#4a90d9" }}
              >
                {s.numero}
              </span>
              <div>
                <div className="font-bold text-lg" style={{ color: "#1a1a2e" }}>
                  {s.film}
                </div>
                <div className="text-sm" style={{ color: "#888" }}>
                  {s.theme} — {s.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
