import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ListRow } from "@/components/ui/list-row";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container className="max-w-3xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Projects</h1>
          <p className="max-w-2xl text-sm leading-8 text-zinc-400">
            Selected projects spanning machine learning, distributed systems, and backend engineering.
          </p>
        </header>
        <ul>
          {projects.map((project) => (
            <ListRow key={project.title}>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm font-medium text-zinc-200">{project.title}</h2>
                {project.year && <span className="font-mono text-xs text-zinc-500">{project.year}</span>}
              </div>
              <p className="mt-3 text-sm leading-8 text-zinc-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {project.href && (
                <Link
                  className="mt-4 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  href={project.href}
                >
                  Visit project →
                </Link>
              )}
            </ListRow>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
