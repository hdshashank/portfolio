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
import { Logos22, type LogosDoubleRowStaticLogo } from "./Logos22";

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

function iconSource(icon: SimpleIcon) {
  return `data:image/svg+xml,${encodeURIComponent(icon.svg)}`;
}

const logos: LogosDoubleRowStaticLogo[] = skills.map((skill) => ({
  src: iconSource(skill.icon),
  alt: skill.name,
  className: "skills-logo-image",
}));

export function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <h2 className="visually-hidden" id="skills-title">Skills and tools</h2>
      <Logos22 topRow={logos.slice(0, 6)} bottomRow={logos.slice(6)} />
    </section>
  );
}
