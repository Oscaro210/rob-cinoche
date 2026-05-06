import Link from "next/link";
import { interviews } from "@/data/interviews";

export const metadata = {
  title: "Interviews — ROB cinoche",
  description: "Les interviews de cinéastes par ROB cinoche.",
};

export default function InterviewsPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#f28b82" }}>
          Interviews
        </h1>
        <p className="text-lg" style={{ color: "#1a1a2e" }}>
          On va à la rencontre des cinéastes.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {interviews.map((itw) => (
          <Link
            key={itw.slug}
            href={`/interviews/${itw.slug}`}
            className="block p-6 rounded-lg border-2 bg-white/70 hover:bg-white hover:shadow-lg transition-shadow"
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
                <h2 className="text-2xl font-bold" style={{ color: itw.color }}>
                  {itw.name}
                </h2>
                <span
                  className="inline-block text-sm px-3 py-0.5 rounded-full text-white"
                  style={{ background: "#ffd966", color: "#1a1a2e" }}
                >
                  {itw.film}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
