import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ListRow } from "@/components/ui/list-row";
import { Tag } from "@/components/ui/tag";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container className="max-w-3xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Experience</h1>
          <p className="max-w-2xl text-sm leading-8 text-zinc-400">
            Four years of backend engineering experience building workflow orchestration platforms, distributed
            systems, data infrastructure, and consumer products at scale.
          </p>
        </header>

        <ul>
          {experience.map((entry) => (
            <ListRow key={entry.company} className="py-8 sm:py-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-medium text-zinc-200">{entry.company}</h2>
                  <p className="mt-1 text-sm text-zinc-400">{entry.role}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-zinc-500">{entry.period}</p>
              </div>

              <p className="mt-5 text-sm leading-8 text-zinc-400">{entry.intro ?? entry.summary}</p>

              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="mt-8 space-y-5">
                  {entry.highlights.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-medium text-zinc-200">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-8 text-zinc-400">{item.body}</p>
                    </li>
                  ))}
                </ul>
              )}

              {entry.sections && entry.sections.length > 0 && (
                <div className="mt-8 space-y-8">
                  {entry.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-sm font-medium text-zinc-200">{section.title}</h3>
                      <ul className="mt-4 space-y-3">
                        {section.highlights.map((text) => (
                          <li key={text} className="text-sm leading-8 text-zinc-400">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {entry.techStack && entry.techStack.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {entry.techStack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              )}
            </ListRow>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
