import Link from "next/link";
import { projects } from "@/content/projects";

export default function DeedsPage() {
  return (
    <main className="min-h-screen px-8 py-10 text-[#001AE6] md:px-16">
      <h1 className="display-font mb-10 text-5xl font-black md:text-7xl">
        Deeds
      </h1>

      <div className="grid max-w-4xl gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/deeds/${project.slug}`}
            className="rounded-3xl border-4 border-[#001AE6] bg-[#FFDB61]/75 p-6 shadow-[8px_8px_0_#001AE6] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#001AE6]"
          >
            <h2 className="display-font text-3xl font-black">
              {project.title.en}
            </h2>
            <p className="body-font mt-2 text-xl">
              {project.publisher} · {project.year}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}