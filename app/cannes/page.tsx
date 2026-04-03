export const metadata = {
  title: "Cannes 2026 — ROB cinoche",
  description: "La couverture du Festival de Cannes 2026 par ROB cinoche.",
};

export default function CannesPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <span
          className="inline-block text-sm px-3 py-0.5 rounded-full text-white mb-3"
          style={{ background: "#f28b82", transform: "rotate(-1deg)" }}
        >
          bientôt
        </span>
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "#1a1a2e" }}
        >
          Cannes 2026
        </h1>
        <p className="text-lg" style={{ color: "#1a1a2e" }}>
          On sera au Festival de Cannes — restez connectés pour notre couverture
          complète.
        </p>
      </div>

      <div
        className="p-8 rounded-lg border-2 bg-white/70 text-center"
        style={{ borderColor: "#ffd966" }}
      >
        <div className="text-6xl mb-4">🎬</div>
        <p
          className="text-xl font-bold mb-2"
          style={{ color: "#1a1a2e" }}
        >
          La couverture arrive en mai 2026.
        </p>
        <p style={{ color: "#888" }}>
          Films vus, avis, rencontres — tout sera ici.
        </p>
      </div>
    </div>
  );
}
