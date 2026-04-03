export const metadata = {
  title: "Interviews — ROB cinoche",
  description: "Les interviews de cinéastes par ROB cinoche.",
};

const interviews = [
  {
    name: "Alexandre Aja",
    slug: "aa",
    film: "Luster",
    desc: "Rencontre avec le réalisateur de Luster, son retour aux sources.",
    color: "#f28b82",
  },
  {
    name: "Chloé Robichaud",
    slug: "robichaud",
    film: "Deux femmes en or",
    desc: "Discussion autour de la mise en scène et de la sexualité au cinéma.",
    color: "#4a90d9",
  },
];

export default function InterviewsPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "#f28b82" }}
        >
          Interviews
        </h1>
        <p className="text-lg" style={{ color: "#1a1a2e" }}>
          On va à la rencontre des cinéastes.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {interviews.map((itw) => (
          <div
            key={itw.slug}
            className="p-6 rounded-lg border-2 bg-white/70"
            style={{ borderColor: itw.color }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
                style={{ background: itw.color }}
              >
                {itw.name[0]}
              </div>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: itw.color }}
                >
                  {itw.name}
                </h2>
                <span
                  className="inline-block text-sm px-3 py-0.5 rounded-full text-white mb-2"
                  style={{ background: "#ffd966", color: "#1a1a2e" }}
                >
                  {itw.film}
                </span>
                <p style={{ color: "#1a1a2e" }}>{itw.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
