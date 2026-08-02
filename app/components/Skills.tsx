import {
  siC,
  siExpress,
  siGit,
  siJavascript,
  siJson,
  siLinux,
  siMongodb,
  siMui,
  siNextdotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPython,
  siReact,
  siSap,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { SkillsMarquee } from "./SkillsMarquee";

const skills: ReadonlyArray<{ name: string; icon: SimpleIcon }> = [
  { name: "Python", icon: siPython },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "C", icon: siC },
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "React Native", icon: siReact },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Material UI", icon: siMui },
  { name: "Express.js", icon: siExpress },
  { name: "REST APIs", icon: siOpenapiinitiative },
  { name: "JSON", icon: siJson },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "SAP BTP", icon: siSap },
  { name: "Git", icon: siGit },
  { name: "Linux", icon: siLinux },
] as const;

function SkillSequence({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="skills-sequence" aria-hidden={duplicate || undefined}>
      {skills.map((skill) => (
        <li className="skill-item" key={skill.name}>
          <span className="skill-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d={skill.icon.path} />
            </svg>
          </span>
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <h2 className="visually-hidden" id="skills-title">Skills and tools</h2>
      <div
        className="skills-marquee"
        tabIndex={0}
        aria-label="Skills and tools. Pause the moving list by focusing it, or scroll horizontally."
      >
        <SkillsMarquee>
          <SkillSequence />
          <SkillSequence duplicate />
        </SkillsMarquee>
      </div>
    </section>
  );
}
