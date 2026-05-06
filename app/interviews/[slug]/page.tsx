import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { interviews } from "@/data/interviews";

export async function generateStaticParams() {
  return interviews.map((itw) => ({ slug: itw.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itw = interviews.find((i) => i.slug === slug);
  if (!itw) return {};
  return {
    title: `${itw.name} — ROB cinoche`,
    description: `Interview de ${itw.name} pour ${itw.film}.`,
  };
}

async function getTranscript(slug: string): Promise<{ content: string; interviewe: string } | null> {
  const filePath = path.join(process.cwd(), "..", "content", "interviews", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { content: processed.toString(), interviewe: data.interviewe ?? "" };
}

function hasVideo(slug: string): boolean {
  const videoPath = path.join(process.cwd(), "public", "videos", `${slug}.mp4`);
  return fs.existsSync(videoPath);
}

function hasAudio(slug: string): boolean {
  const audioPath = path.join(process.cwd(), "public", "videos", `${slug}.mp3`);
  return fs.existsSync(audioPath);
}

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itw = interviews.find((i) => i.slug === slug);
  if (!itw) notFound();

  const transcript = await getTranscript(slug);
  const video = hasVideo(slug);
  const audio = !video && hasAudio(slug);

  return (
    <div className="flex flex-col gap-10">
      {/* En-tête */}
      <div>
        <span
          className="inline-block text-sm px-3 py-0.5 rounded-full text-white mb-3"
          style={{ background: itw.color, transform: "rotate(-1deg)" }}
        >
          Interview
        </span>
        <h1 className="text-4xl font-bold mb-2" style={{ color: itw.color }}>
          {itw.name}
        </h1>
        <span
          className="inline-block text-sm px-3 py-1 rounded-full font-medium"
          style={{ background: "#ffd966", color: "#1a1a2e" }}
        >
          {itw.film}
        </span>
      </div>

      {/* Lecteur vidéo */}
      {video && (
        <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: itw.color }}>
          <video
            controls
            preload="metadata"
            className="w-full"
            style={{ maxHeight: "480px" }}
          >
            <source src={`/videos/${slug}.mp4`} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      )}

      {/* Lecteur audio */}
      {audio && (
        <div
          className="p-6 rounded-lg border-2 bg-white/70"
          style={{ borderColor: itw.color }}
        >
          <p className="text-sm mb-3 font-medium" style={{ color: "#888" }}>
            Écouter l&apos;interview
          </p>
          <audio controls className="w-full">
            <source src={`/videos/${slug}.mp3`} type="audio/mpeg" />
            Votre navigateur ne supporte pas la lecture audio.
          </audio>
        </div>
      )}

      {/* Transcript */}
      {transcript ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>
            Retranscription
          </h2>
          <div
            className="p-6 rounded-lg border-2 bg-white/70 prose prose-sm max-w-none"
            style={{ borderColor: itw.color }}
            dangerouslySetInnerHTML={{ __html: transcript.content }}
          />
        </div>
      ) : (
        <div
          className="p-8 rounded-lg border-2 bg-white/70 text-center"
          style={{ borderColor: itw.color }}
        >
          <p className="text-lg" style={{ color: "#888" }}>
            Retranscription à venir.
          </p>
        </div>
      )}
    </div>
  );
}
