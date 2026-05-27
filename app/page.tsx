import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ListRow } from "@/components/ui/list-row";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);
  const featuredProjects = projects.slice(0, 2);
  const snapshotExperience = experience.slice(0, 2);

  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Container>
          <div className="space-y-7">
            <nav aria-label="Sections" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                {siteConfig.name}
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{siteConfig.role}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,42rem)_11rem]">
              <div className="max-w-3xl space-y-4 text-base leading-8 text-zinc-400">
                <p className="text-zinc-200">
                  I am a self-taught backend engineer and a Master&apos;s student in Computer Science at UMass Amherst.
                </p>
                <p>
                  I previously worked at Thena and Unacademy, and I have spent ~3.5 years building reliable production
                  systems.
                </p>
                <p>
                  I am especially interested in databases, distributed systems, and infrastructure. Outside of
                  programming, I am a cricket fan and enjoy traveling.
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm lg:hidden">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <aside className="hidden space-y-5 font-mono text-xs text-zinc-500 lg:block">
                <div>
                  <p className="uppercase tracking-[0.18em]">Location</p>
                  <p className="mt-1 text-zinc-400">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.18em]">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="uppercase tracking-[0.18em]">Links</p>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <h2 className="text-lg font-medium tracking-tight text-zinc-200">Experience</h2>
          <ul>
            {snapshotExperience.map((entry) => (
              <ListRow key={entry.company}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm font-medium text-zinc-200">
                    {entry.role} · {entry.company}
                  </p>
                  <p className="font-mono text-xs text-zinc-500">{entry.period}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{entry.summary}</p>
              </ListRow>
            ))}
          </ul>
          <Link href="/experience" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
            Experience details →
          </Link>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <h2 className="text-lg font-medium tracking-tight text-zinc-200">Education</h2>
          <ul>
            {education.map((entry) => (
              <ListRow key={entry.school}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm font-medium text-zinc-200">{entry.degree}</p>
                  <p className="font-mono text-xs text-zinc-500">{entry.period}</p>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{entry.school}</p>
                {entry.location && <p className="mt-0.5 font-mono text-xs text-zinc-500">{entry.location}</p>}
                {entry.detail && <p className="mt-2 text-sm leading-7 text-zinc-400">{entry.detail}</p>}
              </ListRow>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <h2 className="text-lg font-medium tracking-tight text-zinc-200">Skills</h2>
          <ul>
            {skills.map((group) => (
              <ListRow key={group.label}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{group.label}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{group.items.join(" · ")}</p>
              </ListRow>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <h2 className="text-lg font-medium tracking-tight text-zinc-200">Writing</h2>
          <ul>
            {posts.map((post) => (
              <ListRow key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-sm font-medium text-zinc-200 group-hover:text-zinc-50">{post.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{post.description}</p>
                  <p className="mt-3 font-mono text-xs text-zinc-500">
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                </Link>
              </ListRow>
            ))}
          </ul>
          <Link href="/blog" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
            Read all posts →
          </Link>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <h2 className="text-lg font-medium tracking-tight text-zinc-200">Selected Work</h2>
          <ul>
            {featuredProjects.map((project) => (
              <ListRow key={project.title}>
                <p className="text-sm font-medium text-zinc-200">{project.title}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{project.description}</p>
              </ListRow>
            ))}
          </ul>
          <Link href="/projects" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
            View all projects →
          </Link>
        </Container>
      </Section>
    </>
  );
}
